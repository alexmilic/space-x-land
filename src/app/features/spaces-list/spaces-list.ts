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
      icon: 'event',
      title: 'Upcoming Launches',
      description: 'Discover upcoming launches and their mission details.',
      link: '/upcoming-launches',
      isDisabled: false
    },
    {
      icon: 'history',
      title: 'Previous Launches',
      description: 'Explore past launches and the missions they carried to space.',
      link: '/previous-launches',
      isDisabled: true
    },
    {
      icon: 'rocket_launch',
      title: 'Rockets',
      description: 'Learn about launch vehicles and their capabilities.',
      link: '/rockets',
      isDisabled: false
    },
    {
      icon: 'satellite_alt',
      title: 'Spacecraft',
      description: 'Explore the spacecraft carrying crews and cargo into orbit.',
      link: '/spacecraft',
      isDisabled: false
    },
    {
      icon: 'person',
      title: 'Astronauts',
      description: 'Meet the people exploring space and discover their stories.',
      link: '/astronauts',
      isDisabled: false
    },
    {
      icon: 'public',
      title: 'Agencies',
      description: 'Discover the organizations behind space exploration.',
      link: '/agencies',
      isDisabled: false
    },
    {
      icon: 'flight_takeoff',
      title: 'Launch Pads',
      description: 'Explore the launch pads where journeys to space begin.',
      link: '/launch-pads',
      isDisabled: false
    },
    {
      icon: 'hub',
      title: 'Space Stations',
      description: 'Discover orbital stations and their role in space research.',
      link: '/space-stations',
      isDisabled: false
    },
  ];
}
