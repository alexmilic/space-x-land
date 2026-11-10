import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { RocketsService } from './services/rockets.service';
import { RocketsResponse } from './services/rockets.models';
import { RocketCard } from './rocket-card/rocket-card';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-rockets',
  imports: [RocketCard, MatPaginator, MatProgressSpinner],
  templateUrl: './rockets.html',
  styleUrl: './rockets.scss',
})
export class Rockets implements OnInit {
  constructor(private rocketsService: RocketsService) { }

  private readonly destroyRef = inject(DestroyRef);

  results = signal<RocketsResponse | null>(null);
  readonly length = signal<number>(0);
  readonly isLoading = signal<boolean>(false);
  readonly message = signal<string | null>(null);

  ngOnInit() {
    this.getAllRockets();
  }

  getAllRockets(searchTerm: string = '', limit: number = 12, offset: number = 0): void {
    this.message.set('Loading launches…');
    this.isLoading.set(true);
    this.rocketsService.getRockets(searchTerm, limit, offset)
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe({
      next: (response) => {
      this.results.set(response);
      this.length.set(response.count);
      this.isLoading.set(false);
      },
      error: () => {
        this.isLoading.set(false);
        this.message.set('Unable to load rockets. Please try again later.');
      }
    });
  }

  onPageChange(event: PageEvent): void {
    const limit = event.pageSize;
    const offset = event.pageIndex * event.pageSize;
    this.rocketsService.getRockets('', limit, offset).subscribe((response) => {
      this.results.set(response);
      this.length.set(response.count);
    });

    // this.launchesToolbar.nativeElement.scrollIntoView({
    //   behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
    //     ? 'instant'
    //     : 'smooth',
    //   block: 'start'
    // });

  }

}
