import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Stop } from 'src/app/models/Stop';
import { StopsService } from 'src/app/services/stops.service';
import { DepartureInformation } from '../models/DepartureInformation';

@Injectable({
  providedIn: 'root'
})
export class StopResolver implements Resolve<Stop> {

  constructor(
    private readonly stopsService: StopsService
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Stop> {
    return this.stopsService.getStopByStopId(route.paramMap.get('stopId'));
  }
}
