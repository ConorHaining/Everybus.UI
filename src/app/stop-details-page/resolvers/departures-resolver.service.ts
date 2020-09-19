import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { StopsService } from 'src/app/services/stops.service';
import { DepartureInformation } from '../models/DepartureInformation';

@Injectable({
  providedIn: 'root'
})
export class DeparturesResolver implements Resolve<Observable<DepartureInformation[]>>{

  constructor(
    private readonly stopsService: StopsService
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<DepartureInformation[]> {
    return this.stopsService.getStopDepartures(route.paramMap.get('atcoCode'));
  }
}
