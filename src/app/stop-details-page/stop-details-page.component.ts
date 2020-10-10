import { Component, OnDestroy, OnInit, TrackByFunction } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Stop } from '../models/Stop';
import { StopsService } from './../services/stops.service';
import { DepartureInformation } from './models/DepartureInformation';
import { map, switchMap } from 'rxjs/operators';
import { ConnectionStatus } from '../homepage/components/connected-indicator/connected-indicator.component';

@Component({
  selector: 'stop-details-page',
  templateUrl: './stop-details-page.component.html',
  styleUrls: ['./stop-details-page.component.scss']
})
export class StopDetailsPageComponent implements OnInit, OnDestroy {
  status: ConnectionStatus = ConnectionStatus.LIVE;
  get isOffline(): boolean {
    return this.status === ConnectionStatus.OFFLINE;
  }

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
    this.createLoadingData();
    this.stop = this.route.snapshot.data.stop;

    this.route.paramMap.pipe(
      map(params => params.get('atcoCode')),
      switchMap(atcoCode => {
        this.stopDepartureListener$ = this.stopsService.listenForDepartureUpdates(atcoCode).subscribe(departures => {
          this.departures = departures;
          this.isLoading = false;
        });
        return this.stopsService.getStopDepartures(atcoCode);
    })).subscribe(departures => {
      this.departures = departures;
      this.isLoading = false;
    });

    window.addEventListener('offline', this.updateNetworkStatus.bind(this));
    window.addEventListener('online', this.updateNetworkStatus.bind(this));

  }

  updateNetworkStatus($event: Event): void {
    if ($event.type === 'online') {
      this.status = ConnectionStatus.LIVE;
    }
    if ($event.type === 'offline') {
      this.status = ConnectionStatus.OFFLINE;
    }
  }

  ngOnDestroy(): void {
    if (this.stopDepartureListener$) {
      this.stopDepartureListener$.unsubscribe();
    }
  }

  trackByFn(index: number, item: DepartureInformation): string {
    return item.routeName;
  }
  

  private createLoadingData(): void {
    for (let i = 0; i < 5; i++) {
      const info: DepartureInformation = {
        routeColour: '#000000',
        textColour: '#FFFFFF',
        routeName: 'XX',
        departures: []
      };
      this.departures.push(info);
    }
  }

}
