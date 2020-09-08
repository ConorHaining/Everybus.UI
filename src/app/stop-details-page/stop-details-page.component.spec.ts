import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { StopsService } from '../services/stops.service';
import { DepartureDetailsComponent } from './components/departure-details/departure-details.component';
import { StopDetailsPageComponent } from './stop-details-page.component';

describe('StopDetailsPageComponent', () => {
  let component: StopDetailsPageComponent;
  let fixture: ComponentFixture<StopDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        StopDetailsPageComponent,
        DepartureDetailsComponent
      ],
      providers: [
        {
          provide: StopsService,
          useValue: {
            getAllStops: () => of(),
            getStopDepartures: () => of()
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StopDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
