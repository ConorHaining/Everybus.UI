import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stop } from 'src/app/models/Stop';
import { StopsService } from 'src/app/services/stops.service';

@Component({
  selector: 'stop-finder',
  templateUrl: './stop-finder.component.html'
})
export class StopFinderComponent implements OnInit {

  stops: Stop[] = [];
  stopInput = '';

  locateButtonIcon = '📍';

  showPicker = false;

  constructor(
    private readonly stopsService: StopsService,
  ) { }

  ngOnInit(): void {
    this.stopsService.getAllStops().subscribe(stops => {
      this.stops = stops;
    });
  }

  togglePicker(): void {
    this.showPicker = !this.showPicker;
  }

}
