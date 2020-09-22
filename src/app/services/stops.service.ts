import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { filter, map, pluck, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { DepartureInformation } from '../stop-details-page/models/DepartureInformation';
import { Stop } from './../models/Stop';

@Injectable({
  providedIn: 'root'
})
export class StopsService {

  constructor(
    private readonly http: HttpClient
  ) { }

  getAllStops(): Observable<Stop[]> {
    return this.http.get<Stop[]>(environment.tfeOpenDataUrls.stops).pipe(
      pluck('stops'),
      map((response: any[]) => {
        return response.map((stop: any) => {
          return {
            atco_code: stop.atco_code?.toString(),
            stop_id: stop.stop_id?.toString(),
            name: stop.name?.toString(),
            direction: stop.direction?.toString(),
            latitude: stop.latitude?.toString(),
            longitude: stop.longitude?.toString(),
            destinations: stop.destinations
          } as Stop;
        });
      })
    );
  }

  getStopByAtco(atcoCode: string): Observable<Stop> {
    return this.getAllStops()
      .pipe(
        map((response: any[]) => {
          return response.find(stop => stop.atco_code === atcoCode);
        })
      );
  }

  getStopByStopId(stopId: string): Observable<Stop> {
    return this.getAllStops()
      .pipe(
        map((response: any[]) => {
          return response.find(stop => stop.stop_id === stopId);
        })
      );
  }

  getStopDepartures(atcoCode: string): Observable<DepartureInformation[]> {
    const url = environment.tfeOpenDataUrls.liveTimes.replace('{atco_code}', atcoCode);
    return this.http.get<DepartureInformation[]>(url);
  }

  listenForDepartureUpdates(atcoCode: string): Observable<DepartureInformation[]> {
    return interval(3000).pipe(
      switchMap(() => this.getStopDepartures(atcoCode)),
    );
  }

}
