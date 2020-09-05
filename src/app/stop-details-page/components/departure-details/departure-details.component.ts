import { Component, OnInit, Input } from '@angular/core';
import { DepartureInformation } from '../../models/DepartureInformation';

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
  }

  toggleDepartures(): void {
    this.showDepartures = !this.showDepartures;

  }

}
