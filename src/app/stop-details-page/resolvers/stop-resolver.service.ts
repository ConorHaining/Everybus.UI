import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Stop } from 'src/app/models/Stop';
import { StopsService } from 'src/app/services/stops.service';

@Injectable({
  providedIn: 'root'
})
export class StopResolver implements Resolve<Stop> {

  constructor(
    private readonly stopsService: StopsService
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Stop> {
    return this.stopsService.getStopByAtco(route.paramMap.get('atcoCode'));
  }
}
