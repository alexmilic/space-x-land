import { Component, OnInit, inject, DestroyRef, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UpcomingLaunchesService } from '../services/upcoming-launches.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DatePipe } from '@angular/common';
import type { LaunchDetailsResponse } from '../services/launch-details.models';
import { MatSpinner } from '@angular/material/progress-spinner';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-launch-details',
  imports: [DatePipe, MatSpinner, RouterLink],
  templateUrl: './launch-details.html',
  styleUrl: './launch-details.scss',
})
export class LaunchDetails implements OnInit {
  constructor(private upcomingLaunchesService: UpcomingLaunchesService, private route: ActivatedRoute) { }

  private readonly destroyRef = inject(DestroyRef);

  readonly launchDetails = signal<LaunchDetailsResponse | null>(null);
  readonly message = signal<string | null>(null);
  readonly isLoading = signal<boolean>(true);

  ngOnInit(): void {
    this.message.set('Loading launches…');
    this.isLoading.set(true);

    const launchId = this.route.snapshot.paramMap.get('id');

    if (!launchId) return;
    this.getLaunchDetails(launchId);
  }

  getLaunchDetails(launchId: string) {
    this.upcomingLaunchesService.getLaunchDetailsById(launchId)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(
        {
          next: (response) => {
            this.launchDetails.set(response);
            this.message.set(null);
            this.isLoading.set(false);
            console.log('Launch details response:', response);
          },
          error: (error) => {
            this.message.set('Error fetching launch details.');
            this.isLoading.set(false);
            console.error('Error fetching launch details:', error);
          }
        }
      );
  }
}
