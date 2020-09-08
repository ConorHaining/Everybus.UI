import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of, from } from 'rxjs';
import { DestinationsOutputPipe } from '../homepage/pipes/destinations-output.pipe';
import { StopsService } from '../services/stops.service';
import { DepartureDetailsComponent } from './components/departure-details/departure-details.component';
import { RelativeTimePipe } from './pipes/relative-time.pipe';
import { StopDetailsPageComponent } from './stop-details-page.component';

describe('StopDetailsPageComponent', () => {
  let component: StopDetailsPageComponent;
  let fixture: ComponentFixture<StopDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [
        StopDetailsPageComponent,
        DepartureDetailsComponent,
        DestinationsOutputPipe,
        RelativeTimePipe
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of(convertToParamMap({
              testId: 'abc123',
              anotherId: 'd31e8b48-7309-4c83-9884-4142efdf7271',
            }))
          }
        },
        {
          provide: StopsService,
          useValue: {
            getAllStops: () => of(),
            getStopDepartures: () => of(),
            getStopByAtco: () => of()
          }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StopDetailsPageComponent);
    component = fixture.componentInstance;
    component.stop = {
      atco_code: 'string',
      stop_id: 'string',
      name: 'string',
      identifer: 'string',
      direction: 'string',
      latitude: 'string',
      longitude: 'string',
      destinations: ['string[]']
    };
    component.departures = [{
      routeName: 'XX',
      backgroundColour: '#FFFFFF',
      textColour: '#000000',
      departures: []
    }];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
