import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { Stop } from 'src/app/models/Stop';
import { StopsService } from 'src/app/services/stops.service';
import { StopOptionComponent } from '../stop-option/stop-option.component';

@Component({
  selector: 'stop-finder',
  templateUrl: './stop-finder.component.html'
})
export class StopFinderComponent implements OnInit, AfterViewInit {

  @ViewChildren(StopOptionComponent) options: QueryList<StopOptionComponent>;
  private keyManager: ActiveDescendantKeyManager<StopOptionComponent>;
  activeDescendant: string;

  stops: Stop[] = [];
  stopInput = '';

  locateButtonIcon = '📍';

  showPicker = false;
  inputDecendent = '';

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

  togglePicker(): void {
    this.showPicker = !this.showPicker;
  }

  activeStopChange(atcoCode: string): void {
    this.inputDecendent = atcoCode;
  }

  goToDepartures(atcoCode: string): void {
    this.router.navigate(['stop', atcoCode]);
  }

}
