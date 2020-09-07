import { Component, OnInit } from '@angular/core';
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

  constructor(
    private readonly stopsService: StopsService
  ) { }

  ngOnInit(): void {
    this.stopsService.getAllStops().subscribe(stops => {
      this.stops = stops;
    });
  }

}
