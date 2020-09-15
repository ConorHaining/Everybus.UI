import { Component, OnInit } from '@angular/core';
import * as sortByDistance from 'sort-by-distance';
import { Stop } from './../../../models/Stop';
import { StopsService } from './../../../services/stops.service';

@Component({
  selector: 'stop-selector',
  templateUrl: './stop-selector.component.html',
  styleUrls: ['./stop-selector.component.scss']
})
export class StopSelectorComponent implements OnInit {

  stops: Stop[] = [];
  stopInput = '';

  locateButtonIcon = '📍';
  constructor(
    private readonly stopsService: StopsService
  ) { }

  ngOnInit(): void {
    this.stopsService.getAllStops().subscribe(stops => {
      this.stops = stops;
    });
  }

  locateUser(): void {
    this.locateButtonIcon = '⌛';
    window.navigator.geolocation
      .getCurrentPosition(
        success => {
          this.locateButtonIcon = '📍';

          const currentCoordinates = success.coords;
          const opts = {
            yName: 'latitude',
            xName: 'longitude'
          };
          this.stops = sortByDistance(currentCoordinates, this.stops, opts);
          this.stopInput = '';

        },
        error => {
          this.locateButtonIcon = '❌';
          console.error(error);
        });
  }

}
