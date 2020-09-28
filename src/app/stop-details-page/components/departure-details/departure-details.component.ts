import { Component, Input, OnInit } from '@angular/core';
import cloneDeep from 'lodash-es/cloneDeep';
import { interval } from 'rxjs';
import { tap } from 'rxjs/operators';
import { transform } from 'src/app/pipes/relative-time.pipe';
import { Departure, DepartureInformation } from '../../models/DepartureInformation';

@Component({
  selector: 'departure-details',
  templateUrl: './departure-details.component.html',
  styleUrls: ['./departure-details.component.scss']
})
export class DepartureDetailsComponent implements OnInit {

  @Input() departure: DepartureInformation;
  showDepartures = false;

  constructor() { }

  ngOnInit(): void {
    interval(10)
      .pipe(
        tap(() => {
          this.departure = cloneDeep(this.departure);
        })
      );
  }

  toggleDepartures(): void {
    this.showDepartures = !this.showDepartures;
  }

  trackByFn(index: number, item: Departure): string {
    return item.tripId + transform(item.departureTime);
  }

}
