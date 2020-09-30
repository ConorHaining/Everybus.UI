import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GeoJSON } from 'leaflet';
import { Observable, timer } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VehicleTrackingService {

  constructor(
    private readonly http: HttpClient
  ) { }

  pollForAllVehicleLocations(): Observable<any> {
    return timer(0, 10 * 1000)
              .pipe(
                flatMap(() => this.getAllVehicleLocations())
              );
  }

  private getAllVehicleLocations(): Observable<any> {
    return this.http.get<any>(environment.tfeOpenDataUrls.vehicleLocations);
  }
}
