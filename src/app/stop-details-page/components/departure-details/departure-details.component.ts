import { Component, Input } from '@angular/core';
import { transform } from 'src/app/pipes/relative-time.pipe';
import { Departure, DepartureInformation } from '../../models/DepartureInformation';

@Component({
  selector: 'departure-details',
  templateUrl: './departure-details.component.html',
})
export class DepartureDetailsComponent {

  @Input() departure: DepartureInformation;
  showDepartures = false;

  toggleDepartures(): void {
    this.showDepartures = !this.showDepartures;
  }

  // tslint:disable-next-line: variable-name
  trackByFn(_index: number, item: Departure): string {
    return item.tripId + transform(item.departureTime);
  }

}
