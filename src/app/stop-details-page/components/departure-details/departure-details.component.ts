import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'departure-details',
  templateUrl: './departure-details.component.html',
  styleUrls: ['./departure-details.component.scss']
})
export class DepartureDetailsComponent implements OnInit {

  showDepartures = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleDepartures(): void {
    this.showDepartures = !this.showDepartures;

  }

}
