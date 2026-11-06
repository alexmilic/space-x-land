import { Component, DestroyRef, ElementRef, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { UpcomingLaunchesService } from './services/upcoming-launches.service';
import { UpcomingLaunchesResponse } from './services/upcoming-launches.models';
import { LaunchCard } from './launch-card/launch-card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, switchMap, tap } from 'rxjs';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-upcoming-launches',
  imports: [
    LaunchCard,
    MatProgressSpinnerModule,
    MatPaginator,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIcon,
    MatButtonModule
  ],
  templateUrl: './upcoming-launches.html',
  styleUrl: './upcoming-launches.scss',
})


export class UpcomingLaunches implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('launchesToolbar') launchesToolbar!: ElementRef<HTMLElement>;

  readonly results = signal<UpcomingLaunchesResponse | null>(null);
  readonly message = signal<string | null>(null);
  readonly isLoading = signal<boolean>(true);
  readonly length = signal<number>(0);
  readonly searchControl = new FormControl('');

  private readonly destroyRef = inject(DestroyRef);


  constructor(private service: UpcomingLaunchesService) { }

  ngOnInit(): void {
    this.getAllUpcomingLaunches();

    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        takeUntilDestroyed(this.destroyRef),
        tap(() => {
          this.paginator.firstPage();
        }),
        switchMap((searchTerm: string | null) => {
          this.getAllUpcomingLaunches(searchTerm);
          return [];
        })
      )
      .subscribe((searchTerm: string | null) => {
        console.log('Search term:', searchTerm);
        this.getAllUpcomingLaunches(searchTerm);
      });
  }

  getAllUpcomingLaunches(searchTerm: string | null = '', limit: number = 12, offset: number = 0): void {
    this.message.set('Loading launches…');
    this.isLoading.set(true);
    this.service.getUpcomingLaunches(searchTerm || '', limit, offset)
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

  clearSearch(): void {
    this.searchControl.setValue('');
    this.getAllUpcomingLaunches();
  }

  onPageChange(event: PageEvent): void {
    const limit = event.pageSize;
    const offset = event.pageIndex * event.pageSize;
    this.getAllUpcomingLaunches(this.searchControl.value, limit, offset);

    // this.launchesToolbar.nativeElement.scrollIntoView({
    //   behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
    //     ? 'instant'
    //     : 'smooth',
    //   block: 'start'
    // });

  }

}

