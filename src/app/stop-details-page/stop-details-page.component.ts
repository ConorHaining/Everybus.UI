import { Component, OnDestroy, OnInit, TrackByFunction } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Stop } from '../models/Stop';
import { StopsService } from './../services/stops.service';
import { DepartureInformation } from './models/DepartureInformation';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'stop-details-page',
  templateUrl: './stop-details-page.component.html',
  styleUrls: ['./stop-details-page.component.scss']
})
export class StopDetailsPageComponent implements OnInit, OnDestroy {

  departures: DepartureInformation[] = [].fill(5);
  stop: Stop;
  atcoCode: string;

  isLoading = true;

  private stopDepartureListener$: Subscription;

  constructor(
    private readonly stopsService: StopsService,
    private readonly route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    for (let i = 0; i < 5; i++) {
      const info: DepartureInformation = {
        routeColour: '#000000',
        textColour: '#FFFFFF',
        routeName: 'XX',
        departures: []
      };
      this.departures.push(info);
    }
    this.stop = this.route.snapshot.data.stop;

    this.route.paramMap.pipe(
      map(params => params.get('atcoCode')),
      switchMap(atcoCode => this.stopsService.getStopDepartures(atcoCode))
    ).subscribe(departures => { this.departures = departures; this.isLoading = false; });

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
