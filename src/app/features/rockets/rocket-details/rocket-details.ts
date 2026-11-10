import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { DatePipe, DecimalPipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RocketsService } from '../services/rockets.service';
import type { Result } from '../services/rockets.models';

@Component({
  selector: 'app-rocket-details',
  imports: [DatePipe, DecimalPipe, RouterLink],
  templateUrl: './rocket-details.html',
  styleUrl: './rocket-details.scss',
})
export class RocketDetails implements OnInit {
  readonly rocketDetails = signal<Result | null>(null);
  readonly isLoading = signal(true);
  readonly message = signal('');
  private readonly route = inject(ActivatedRoute);
  private readonly service = inject(RocketsService);
  private readonly destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      this.message.set('Rocket ID is missing.');
      this.isLoading.set(false);
      return;
    }
    this.service.getRocketDetailsById(id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (rocket) => {
          this.rocketDetails.set(rocket);
          this.isLoading.set(false);
        },
        error: () => {
          this.message.set('Unable to load this rocket. Please try again later.');
          this.isLoading.set(false);
        }
      });
  }
}
