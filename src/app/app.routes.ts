import { Routes } from '@angular/router';
import { Landing } from './features/landing/landing';
import { SpacesList } from './features/spaces-list/spaces-list';
import { Capsules } from './features/spaces-list/capsules/capsules';
import { UpcomingLaunches } from './features/upcoming-launches/upcoming-launches';

export const routes: Routes = [
  {
    path: '',
    component: Landing    
  },
  {
    path: 'spaces-list',
    component: SpacesList
  },
  {
    path: 'capsules',
    component: Capsules
  },
  {
    path: 'upcoming-launches',
    component: UpcomingLaunches
  }


  // dodati rute i kreirati komponente za sve ekrane sa spaces-list
];
