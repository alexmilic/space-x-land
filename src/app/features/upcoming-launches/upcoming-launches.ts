import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { UpcomingLaunchesService } from './services/upcoming-launches.service';
import { UpcomingLaunchesResponse } from './services/upcoming-launches.models';
import { LaunchCard } from './launch-card/launch-card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-upcoming-launches',
  imports: [LaunchCard, MatProgressSpinnerModule],
  templateUrl: './upcoming-launches.html',
  styleUrl: './upcoming-launches.scss',
})

export class UpcomingLaunches implements OnInit {
  readonly results = signal<UpcomingLaunchesResponse | null>(null);
  readonly message = signal<string | null>(null);
  readonly isLoading = signal<boolean>(true);

  private readonly destroyRef = inject(DestroyRef);

  constructor(private service: UpcomingLaunchesService) { }

  ngOnInit(): void {
    this.getAllUpcomingLaunches();
  }

  getAllUpcomingLaunches() {
    this.message.set('Loading launches…');
    this.isLoading.set(true);
    this.service.getUpcomingLaunches()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (response) => {
          console.log('Upcoming Launches:', response);
          this.results.set(response);
          this.isLoading.set(false);
        },
        error: (error) => {
          this.message.set('Failed to fetch upcoming launches. Please try again later.');
          console.error('Error fetching upcoming launches:', error);
          this.isLoading.set(false);
        }
      })
  }
}

