import { Component, OnInit } from '@angular/core';
import { DepartureInformation } from './models/DepartureInformation';

@Component({
  selector: 'stop-details-page',
  templateUrl: './stop-details-page.component.html',
  styleUrls: ['./stop-details-page.component.scss']
})
export class StopDetailsPageComponent implements OnInit {

  departures: DepartureInformation[] = [
    {
      serviceName: '22',
      backgroundColour: '#E8378C',
      textColour: '#FFFFFF',
      departures: [
        {
          when: '5 mins',
          destination: 'Gyle Centre',
          journeyId: '1234'
        },
        {
          when: '27 mins',
          destination: 'Gyle Centre',
          journeyId: '1234'
        },
        {
          when: '45 mins',
          destination: 'Longstone',
          journeyId: '1234'
        }
      ]
    },
    {
      serviceName: '16',
      backgroundColour: '#4B4328',
      textColour: '#FFFFFF',
      departures: [
        {
          when: '2 mins',
          destination: 'Torphin',
          journeyId: '1234'
        },
        {
          when: '19 mins',
          destination: 'Torphin',
          journeyId: '1234'
        },
        {
          when: '38 mins',
          destination: 'Elm Row',
          journeyId: '1234'
        }
      ]
    },
    {
      serviceName: '36',
      backgroundColour: '#6eba6e',
      textColour: '#FFFFFF',
      departures: [
        {
          when: '8 mins',
          destination: 'Gyle Centre',
          journeyId: '1234'
        },
        {
          when: '30 mins',
          destination: 'Gyle Centre',
          journeyId: '1234'
        },
        {
          when: '58 mins',
          destination: 'Longstone',
          journeyId: '1234'
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
