import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChildren, QueryList, HostListener, AfterContentInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stop } from 'src/app/models/Stop';
import { StopsService } from 'src/app/services/stops.service';
import { StopOptionComponent } from '../stop-option/stop-option.component';

@Component({
  selector: 'stop-finder',
  templateUrl: './stop-finder.component.html',
  styleUrls: ['./stop-finder.component.scss']
})
export class StopFinderComponent implements OnInit, AfterViewInit {

  @ViewChildren(StopOptionComponent) options: QueryList<StopOptionComponent>;
  private keyManager: ActiveDescendantKeyManager<StopOptionComponent>;
  activeDescendant: string;

  stops: Stop[] = [];
  stopInput = '';

  locateButtonIcon = '📍';

  showPicker = false;

  constructor(
    private readonly stopsService: StopsService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.stopsService.getAllStops().subscribe(stops => {
      this.stops = stops;
    });
  }

  ngAfterViewInit(): void {
    this.keyManager = new ActiveDescendantKeyManager(this.options).withWrap().withHomeAndEnd();
    this.keyManager.setFirstItemActive();
    this.keyManager.change.subscribe(x => {
      const item = this.options.toArray()[x];
      this.activeDescendant = item.identifer;
    });
    this.options.changes.subscribe(x => this.activeDescendant = null);
  }

  pickRandom(): void {
    const index = Math.floor(Math.random() * this.stops.length);
    const stop = this.stops[index];

    this.router.navigate(['stop', stop.atco_code]);
  }

  togglePicker(): void {
    this.showPicker = !this.showPicker;
  }

  goToDepartures(atcoCode: string): void {
    this.router.navigate(['stop', atcoCode]);
  }

  @HostListener('keydown', ['$event'])
  manage(event: KeyboardEvent): void {
    this.keyManager.onKeydown(event);
  }

}
