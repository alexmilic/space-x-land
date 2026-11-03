import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { catchError, of } from 'rxjs';
import { CapsulesService } from './services/capsules.service';

@Component({
  selector: 'app-capsules',
  imports: [AsyncPipe],
  templateUrl: './capsules.html',
  styleUrl: './capsules.scss',
})


export class Capsules {
  private readonly capsulesService = inject(CapsulesService);
  errorMessage = '';

  readonly capsules$ = this.capsulesService.getCapsules().pipe(
    catchError(() => {
      this.errorMessage = 'Unable to load capsules. Please try again later.';
      return of([]);
    }),
  );

}
