import { Component, OnDestroy, OnInit, TrackByFunction } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Stop } from '../models/Stop';
import { StopsService } from './../services/stops.service';
import { DepartureInformation } from './models/DepartureInformation';

@Component({
  selector: 'stop-details-page',
  templateUrl: './stop-details-page.component.html',
  styleUrls: ['./stop-details-page.component.scss']
})
export class StopDetailsPageComponent implements OnInit, OnDestroy {

  departures: DepartureInformation[] = [];
  stop: Stop;
  stopId: string;
  private stopDepartureListener$: Subscription;

  constructor(
    private readonly stopsService: StopsService,
    private readonly route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.stopId = this.route.snapshot.params.stopId;
    this.stop = this.route.snapshot.data.stop;
    this.departures = this.route.snapshot.data.departures;

    this.stopDepartureListener$ = this.stopsService.listenForDepartureUpdates(this.stopId)
      .subscribe(
        (departure: DepartureInformation[]) => {
          this.departures = departure;
        },
        (error) => {
          console.error(error);
        });
  }

  ngOnDestroy(): void {
    if (this.stopDepartureListener$) {
      this.stopDepartureListener$.unsubscribe();
    }
  }

  trackByFn(index: number, item: DepartureInformation): string {
    return item.routeName;
  }

}
