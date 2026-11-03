import { Component } from '@angular/core';
import { Space } from './space/space';

@Component({
  selector: 'app-spaces-list',
  imports: [Space],
  templateUrl: './spaces-list.html',
  styleUrls: ['./spaces-list.scss'],
})
export class SpacesList {
  list = [
    {
      icon: 'inventory_2',
      title: 'Capsules',
      description: 'Explore SpaceX crew and cargo capsules.',
      link: '/capsules'
    },
    {
      icon: 'satellite_alt',
      title: 'Dragons',
      description: 'Learn about Dragon spacecraft and their variants.',
      link: '/dragons'
    },
    {
      icon: 'flight_land',
      title: 'Landing Pads',
      description: 'Discover where boosters return to Earth.',
      link: '/landing-pads'
    },
    {
      icon: 'flight_takeoff',
      title: 'Launch Pads',
      description: 'Explore the sites where each journey begins.',
      link: '/launch-pads'
    },
    {
      icon: 'assignment',
      title: 'Missions',
      description: 'Discover the objectives behind SpaceX missions.',
      link: '/missions'
    },
    {
      icon: 'rocket_launch',
      title: 'Rockets',
      description: 'Explore SpaceX launch vehicles and their capabilities.',
      link: '/rockets'
    },
    {
      icon: 'directions_car',
      title: 'Roadster',
      description: 'Follow the Tesla Roadster on its journey through space.',
      link: '/roadster'
    },
    {
      icon: 'directions_boat',
      title: 'Ships',
      description: 'Meet the fleet supporting recovery operations at sea.',
      link: '/ships'
    }
  ]
}