import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import type { Result } from '../services/rockets.models';

@Component({
  selector: 'app-rocket-card',
  imports: [RouterLink, MatIcon],
  templateUrl: './rocket-card.html',
  styleUrl: './rocket-card.scss',
})
export class RocketCard {
  readonly rocket = input.required<Result>();
}
