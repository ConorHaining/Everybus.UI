import { Component, OnDestroy, OnInit, TrackByFunction } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PartialObserver, Subscription } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ConnectionStatus } from '../homepage/components/connected-indicator/connected-indicator.component';
import { Stop } from '../models/Stop';
import { StopsService } from './../services/stops.service';
import { DepartureInformation } from './models/DepartureInformation';

@Component({
  selector: 'stop-details-page',
  templateUrl: './stop-details-page.component.html',
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
  isError = false;

  private stopDepartureListener$: Subscription;
  private departureUpdates: PartialObserver<DepartureInformation[]> = {
    next: this.updateDepartures.bind(this),
    error: this.departureError.bind(this)
  };

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
        this.atcoCode = atcoCode;
        this.stopDepartureListener$ = this.stopsService
                                      .listenForDepartureUpdates(this.atcoCode)
                                      .subscribe(this.departureUpdates);
        return this.stopsService.getStopDepartures(atcoCode);
    })).subscribe(this.departureUpdates);

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

  private updateDepartures(departures: DepartureInformation[]): void {
    this.departures = departures;
    this.isLoading = false;
    this.isError = false;
  }

  private departureError(error: any): void {
    this.isError = true;
    this.stopDepartureListener$ = this.stopsService
                                      .listenForDepartureUpdates(this.atcoCode)
                                      .subscribe(this.departureUpdates);
  }

  private createLoadingData(): void {
    for (let i = 0; i < 4; i++) {
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
