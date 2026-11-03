import { Routes } from '@angular/router';
import { Landing } from './features/landing/landing';
import { SpacesList } from './features/spaces-list/spaces-list';
import { Capsules } from './features/spaces-list/capsules/capsules';

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
  }

  // dodati rute i kreirati komponente za sve ekrane sa spaces-list
];
