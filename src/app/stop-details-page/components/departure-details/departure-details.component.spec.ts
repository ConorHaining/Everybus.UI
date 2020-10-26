import { Departure } from './../../models/DepartureInformation';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RelativeTimePipe } from '../../../pipes/relative-time.pipe';

import { DepartureDetailsComponent } from './departure-details.component';

fdescribe('DepartureDetailsComponent', () => {
  let component: DepartureDetailsComponent;
  let fixture: ComponentFixture<DepartureDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DepartureDetailsComponent,
        RelativeTimePipe
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartureDetailsComponent);
    component = fixture.componentInstance;
    component.departure = {
      routeName: 'XX',
      routeColour: '#FFFFFF',
      textColour: '#000000',
      departures: []
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('toggleDeparture', () => {

    it('should show departures if not already shown', () => {
      component.showDepartures = false;

      component.toggleDepartures();

      expect(component.showDepartures).toBeTrue();
    });

    it('should hide departures if already shown', () => {
      component.showDepartures = true;

      component.toggleDepartures();

      expect(component.showDepartures).toBeFalse();
    });

  });

  describe('trackByFn', () => {

    it('should combine the trip id and departure time', () => {
      const utcTimestamp = '2020-09-08T12:00:00+00:00';
      jasmine.clock().mockDate(new Date(utcTimestamp));
      const departure: Departure = {
        when: '',
        destination: '',
        tripId: '123',
        vehicleId: '',
        departureTime: '2020-09-08T13:05:00+00:00',
        isLive: true,
        isDiverted: false,
      };

      const result = component.trackByFn(1, departure);

      expect(result).toBe('123in 5 minutes');
    });

  });

});
