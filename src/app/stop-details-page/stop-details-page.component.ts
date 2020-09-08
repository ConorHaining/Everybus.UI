import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Stop } from '../models/Stop';
import { StopsService } from './../services/stops.service';
import { DepartureInformation } from './models/DepartureInformation';

@Component({
  selector: 'stop-details-page',
  templateUrl: './stop-details-page.component.html',
  styleUrls: ['./stop-details-page.component.scss']
})
export class StopDetailsPageComponent implements OnInit {

  departures: DepartureInformation[] = [];
  stop: Stop;

  constructor(
    private readonly stopsService: StopsService,
    private readonly route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const atcoCode = params.get('atcoCode');
      this.stopsService.getStopByAtco(atcoCode).subscribe(stop => {
        this.stop = stop;
        this.stopsService.getStopDepartures(stop.stop_id).subscribe(departrues => {
          this.departures = departrues;
        });
      });
    });
  }

}
