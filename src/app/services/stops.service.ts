import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
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
    return this.http.get <Stop[]>(environment.tfeOpenDataUrls.stops).pipe(
      pluck('stops'),
    );
  }
}
