import { Component, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Result } from '../services/upcoming-launches.models';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-launch-card',
  imports: [DatePipe, MatCardModule, MatChipsModule, MatIconModule, RouterModule, MatButtonModule],
  templateUrl: './launch-card.html',
  styleUrl: './launch-card.scss',
})
export class LaunchCard {
  readonly launch = input.required<Result>();
}
