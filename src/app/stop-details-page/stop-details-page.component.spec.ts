import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { StopsService } from '../services/stops.service';
import { PipesModule } from './../pipes/pipes.module';
import { DepartureDetailsComponent } from './components/departure-details/departure-details.component';
import { StopDetailsPageComponent } from './stop-details-page.component';

describe('StopDetailsPageComponent', () => {
  let component: StopDetailsPageComponent;
  let fixture: ComponentFixture<StopDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        PipesModule
      ],
      declarations: [
        StopDetailsPageComponent,
        DepartureDetailsComponent,
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              data: {
                stop: [],
                departures: []
              }
            }
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
      routeColour: '#FFFFFF',
      textColour: '#000000',
      departures: []
    }];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
