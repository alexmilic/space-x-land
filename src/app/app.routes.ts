import { Routes } from '@angular/router';
import { Landing } from './features/landing/landing';
import { SpacesList } from './features/spaces-list/spaces-list';
import { Capsules } from './features/spaces-list/capsules/capsules';
import { UpcomingLaunches } from './features/upcoming-launches/upcoming-launches';
import { LaunchDetails } from './features/upcoming-launches/launch-details/launch-details';

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
  },
  {
    path: 'launch-details/:id',
    component: LaunchDetails
  },
  {
    path: 'rockets',
    loadComponent: () => import('./features/rockets/rockets').then(m => m.Rockets)
  },
  {
    path: 'rockets/:id',
    loadComponent: () => import('./features/rockets/rocket-details/rocket-details').then(m => m.RocketDetails)
  },
  {
    path: 'astronauts',
    loadComponent: () => import('./features/astronauts/astronauts').then(m => m.Astronauts)
  },
  {
    path: 'astronauts/:id',
    loadComponent: () => import('./features/astronauts/astronaut-details/astronaut-details').then(m => m.AstronautDetails)
  },



  // dodati rute i kreirati komponente za sve ekrane sa spaces-list
];
