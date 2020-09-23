import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RelativeTimePipe } from '../../../pipes/relative-time.pipe';

import { DepartureDetailsComponent } from './departure-details.component';

describe('DepartureDetailsComponent', () => {
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
      backgroundColour: '#FFFFFF',
      textColour: '#000000',
      departures: []
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
