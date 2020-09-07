import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
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
}
