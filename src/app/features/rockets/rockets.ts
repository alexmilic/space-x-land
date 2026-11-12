import { Component, DestroyRef, inject, OnInit, signal, ViewChild } from '@angular/core';
import { RocketsService } from './services/rockets.service';
import { RocketsResponse } from './services/rockets.models';
import { RocketCard } from './rocket-card/rocket-card';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatFormField, MatLabel } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { catchError, debounceTime, distinctUntilChanged, EMPTY, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-rockets',
  imports: [
    RocketCard,
    MatPaginator,
    MatProgressSpinner,
    MatFormFieldModule,
    MatFormField,
    MatLabel,
    MatInputModule,
    MatIcon,
    ReactiveFormsModule,
    MatButtonModule
  ],
  templateUrl: './rockets.html',
  styleUrl: './rockets.scss',
})
export class Rockets implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private rocketsService: RocketsService) { }

  private readonly destroyRef = inject(DestroyRef);

  results = signal<RocketsResponse | null>(null);
  readonly length = signal<number>(0);
  readonly isLoading = signal<boolean>(false);
  readonly message = signal<string | null>(null);
  readonly searchControl = new FormControl('');

  ngOnInit() {
    this.getAllRockets();
    this.predictiveSearch();
  }

  getAllRockets(searchTerm: string = '', limit: number = 12, offset: number = 0): void {
    this.message.set('Loading launches…');
    this.isLoading.set(true);
    this.rocketsService.getRockets(searchTerm || '', limit, offset)
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
    this.getAllRockets(
      this.searchControl.value ?? '',
      event.pageSize,
      event.pageIndex * event.pageSize
    );

    // this.launchesToolbar.nativeElement.scrollIntoView({
    //   behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
    //     ? 'instant'
    //     : 'smooth',
    //   block: 'start'
    // });
  }


  clearSearch(): void {
    this.searchControl.setValue('');
  }

  predictiveSearch(): void {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),

        tap(() => {
          if (this.paginator) {
            this.paginator.pageIndex = 0;
          }
        }),

        switchMap((searchTerm) => {
          this.isLoading.set(true);
          this.message.set(null);

          return this.rocketsService
            .getRockets(searchTerm ?? '', this.paginator?.pageSize ?? 12, 0)
            .pipe(
              catchError(() => {
                this.isLoading.set(false);
                this.message.set('Unable to load rockets. Please try again later.');
                return EMPTY;
              })
            );
        }),

        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((response) => {
        this.results.set(response);
        this.length.set(response.count);
        this.isLoading.set(false);
      })
  }

}
