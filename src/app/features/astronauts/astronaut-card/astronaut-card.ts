import { Component, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import type { Result } from '../services/astronauts.model';

@Component({
  selector: 'app-astronaut-card',
  imports: [MatIcon],
  templateUrl: './astronaut-card.html',
  styleUrl: './astronaut-card.scss',
})
export class AstronautCard {
  readonly astronaut = input.required<Result>();
}
