import { Component, DestroyRef, ElementRef, inject, OnInit, signal, ViewChild } from '@angular/core';
import { AstronautsService } from './services/astronauts.services';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AstronautsResponse } from './services/astronauts.model';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AstronautCard } from './astronaut-card/astronaut-card';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatFormField, MatLabel } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { catchError, debounce, debounceTime, distinctUntilChanged, EMPTY, switchMap, take, tap } from 'rxjs';

@Component({
  selector: 'app-astronauts',
  imports: [
    MatButtonModule,
    AstronautCard,
    MatProgressSpinner,
    MatPaginator,
    MatFormField,
    MatInputModule,
    MatLabel,
    MatIcon,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  templateUrl: './astronauts.html',
  styleUrl: './astronauts.scss',
})
export class Astronauts implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('launchesToolbar') launchesToolbar!: ElementRef<HTMLElement>;

  readonly results = signal<AstronautsResponse | null>(null);
  readonly message = signal<string | null>(null);
  readonly isLoading = signal<boolean>(true);
  readonly length = signal<number>(0);
  readonly searchControl = new FormControl('');

  private readonly destroyRef = inject(DestroyRef);

  constructor(private astronautsService: AstronautsService) { }


  ngOnInit() {
    this.getAllAstronauts('', 12, 0);
    this.predictiveSearch();
  }

  getAllAstronauts(search: string = '', limit: number, offset: number) {
    this.message.set('Loading launches…');
    this.isLoading.set(true);
    this.astronautsService.getAstronauts(search, limit, offset)
      .pipe(
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe({
        next: (response) => {

          this.results.set(response);
          this.isLoading.set(false);
          this.length.set(response.count);
        },
        error: (error) => {
          this.message.set('Failed to fetch upcoming launches. Please try again later.');
          console.error('Error fetching astronauts:', error);
          this.isLoading.set(false);
        }
      });
  }

  onPageChange(event: PageEvent): void {
    this.getAllAstronauts(
      this.searchControl.value ?? '',
      event.pageSize,
      event.pageIndex * event.pageSize
    );
  }

  predictiveSearch() {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),

        tap(() => {
          if (this.paginator) {
            this.paginator.pageIndex = 0
          }

        }),

        switchMap((searchTerm) => {
          this.isLoading.set(true);
          this.message.set(null);

          return this.astronautsService.getAstronauts(searchTerm ?? '', this.paginator?.pageSize ?? 12, 0)
            .pipe(
              catchError(() => {
                this.isLoading.set(false);
                this.message.set('Unable to load rockets. Please try again later.');
                return EMPTY;
              })
            )
        }),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((response) => {
        this.results.set(response);
        this.length.set(response.count);
        this.isLoading.set(false);
      })
  }

  clearSearch(): void {
    this.searchControl.setValue('');
  }

}