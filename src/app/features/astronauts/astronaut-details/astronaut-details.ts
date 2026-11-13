import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatIcon } from '@angular/material/icon';
import { AstronautsService } from '../services/astronauts.services';
import type { Result } from '../services/astronauts.model';

@Component({
  selector: 'app-astronaut-details',
  imports: [DatePipe, RouterLink, MatIcon],
  templateUrl: './astronaut-details.html',
  styleUrl: './astronaut-details.scss',
})
export class AstronautDetails implements OnInit {
  readonly astronautDetails = signal<Result | null>(null);
  readonly isLoading = signal(true);
  readonly message = signal('');
  private readonly route = inject(ActivatedRoute);
  private readonly service = inject(AstronautsService);
  private readonly destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      this.message.set('Astronaut ID is missing.');
      this.isLoading.set(false);
      return;
    }
    this.service.getAstronautById(id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (person) => {
          this.astronautDetails.set(person);
          this.isLoading.set(false);
        },
        error: () => {
          this.message.set('Unable to load this astronaut. Please try again later.');
          this.isLoading.set(false);
        }
      });
  }
}
