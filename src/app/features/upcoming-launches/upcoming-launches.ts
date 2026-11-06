import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { UpcomingLaunchesService } from './services/upcoming-launches.service';
import { UpcomingLaunchesResponse } from './services/upcoming-launches.models';
import { LaunchCard } from './launch-card/launch-card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-upcoming-launches',
  imports: [LaunchCard, MatProgressSpinnerModule, MatPaginator],
  templateUrl: './upcoming-launches.html',
  styleUrl: './upcoming-launches.scss',
})

export class UpcomingLaunches implements OnInit {
  readonly results = signal<UpcomingLaunchesResponse | null>(null);
  readonly message = signal<string | null>(null);
  readonly isLoading = signal<boolean>(true);
  readonly length = signal<number>(0);

  private readonly destroyRef = inject(DestroyRef);

  constructor(private service: UpcomingLaunchesService) { }

  ngOnInit(): void {
    this.getAllUpcomingLaunches();
  }

  getAllUpcomingLaunches(limit: number = 12, offset: number = 0): void {
    this.message.set('Loading launches…');
    this.isLoading.set(true);
    this.service.getUpcomingLaunches(limit, offset)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (response) => {
          this.results.set(response);
          this.isLoading.set(false);
          this.length.set(response.count);
        },
        error: (error) => {
          this.message.set('Failed to fetch upcoming launches. Please try again later.');
          console.error('Error fetching upcoming launches:', error);
          this.isLoading.set(false);
        }
      })
  }

  onPageChange(event: PageEvent): void {
    const limit = event.pageSize;
    const offset = event.pageIndex * event.pageSize;
    this.getAllUpcomingLaunches(limit, offset);
  }
}

