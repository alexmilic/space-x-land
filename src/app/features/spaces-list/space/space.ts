import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-space',
  imports: [MatIconModule, RouterLink],
  templateUrl: './space.html',
  styleUrl: './space.scss',
})
export class Space {
  text = input.required<string>();
  icon = input.required<string>();
  description = input('');
  link = input('');
}

