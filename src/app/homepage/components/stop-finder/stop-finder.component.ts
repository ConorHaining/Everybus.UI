import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stop } from 'src/app/models/Stop';
import { StopsService } from 'src/app/services/stops.service';

@Component({
  selector: 'stop-finder',
  templateUrl: './stop-finder.component.html',
  styleUrls: ['./stop-finder.component.scss']
})
export class StopFinderComponent implements OnInit {

  stops: Stop[] = [];
  stopInput = '';

  locateButtonIcon = '📍';

  showPicker = false;

  constructor(
    private readonly stopsService: StopsService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.stopsService.getAllStops().subscribe(stops => {
      this.stops = stops;
    });
  }

  locateUser(): void {
    // this.locateButtonIcon = '⌛';
    // window.navigator.geolocation
    //   .getCurrentPosition(
    //     success => {
    //       this.locateButtonIcon = '📍';

    //       const currentCoordinates = success.coords;
    //       const opts = {
    //         yName: 'latitude',
    //         xName: 'longitude'
    //       };
    //       this.stops = sortByDistance(currentCoordinates, this.stops, opts);
    //       this.stopInput = '';

    //     },
    //     error => {
    //       this.locateButtonIcon = '❌';
    //       console.error(error);
    //     });
  }

  pickRandom(): void {
    const index = Math.floor(Math.random() * this.stops.length);
    const stop = this.stops[index];

    this.router.navigate(['stop', stop.atco_code]);
  }

  togglePicker(): void {
    this.showPicker = !this.showPicker;
  }

}
