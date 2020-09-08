import { StopsService } from './../services/stops.service';
import { Component, OnInit } from '@angular/core';
import { DepartureInformation } from './models/DepartureInformation';

@Component({
  selector: 'stop-details-page',
  templateUrl: './stop-details-page.component.html',
  styleUrls: ['./stop-details-page.component.scss']
})
export class StopDetailsPageComponent implements OnInit {

  departures: DepartureInformation[] = [];

  constructor(
    private readonly stopsService: StopsService
  ) { }

  ngOnInit(): void {
    this.stopsService.getStopDepartures('36238749').subscribe(departrues => {
      this.departures = departrues;
    });
  }

}
