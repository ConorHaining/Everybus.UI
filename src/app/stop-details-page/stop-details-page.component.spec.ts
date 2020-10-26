import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of, throwError } from 'rxjs';
import { ConnectionStatus } from '../homepage/components/connected-indicator/connected-indicator.component';
import { StopsService } from '../services/stops.service';
import { DepartureInformationMock } from './../../test/data/departure-information';
import { PipesModule } from './../pipes/pipes.module';
import { DepartureDetailsComponent } from './components/departure-details/departure-details.component';
import { StopDetailsPageComponent } from './stop-details-page.component';

describe('StopDetailsPageComponent', () => {
  let component: StopDetailsPageComponent;
  let fixture: ComponentFixture<StopDetailsPageComponent>;
  let stopsService: StopsService;

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
              }
            },
            paramMap: of(convertToParamMap({ atcoCode: '123456' }))
          }
        },
        {
          provide: StopsService,
          useValue: {
            getAllStops: () => of(),
            getStopDepartures: () => of(),
            getStopByAtco: () => of(),
            listenForDepartureUpdates: (atcoCode) => of([DepartureInformationMock])
          }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StopDetailsPageComponent);
    stopsService = TestBed.inject(StopsService);
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

  describe('ngOnInit', () => {

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should register an onOffline event', () => {
      const spy = spyOn(window, 'addEventListener').and.callThrough();

      component.ngOnInit();

      expect(spy.calls.allArgs()).toContain(['offline', jasmine.any(Function)]);
    });

    it('should register an onOnline event', () => {
      const spy = spyOn(window, 'addEventListener').and.callThrough();

      component.ngOnInit();

      expect(spy.calls.allArgs()).toContain(['online', jasmine.any(Function)]);
    });

    describe('Stop departures listening', () => {

      it('should get and store the atco code from the route', () => {
        expect(component.atcoCode).toBe('123456');
      });

      it('should create a stop departure subscription', () => {
        spyOn(stopsService, 'listenForDepartureUpdates').and.callThrough();

        component.ngOnInit();

        expect(stopsService.listenForDepartureUpdates).toHaveBeenCalled();
      });

      describe('happy path', () => {

        it('should set the departures', () => {
          expect(component.departures).toEqual([DepartureInformationMock]);
        });

        it('should set isLoading flag to false', () => {
          expect(component.isLoading).toBeFalse();
        });

        it('should set isError flag to false', () => {
          expect(component.isError).toBeFalse();
        });

      });

      describe('error path', () => {

        beforeEach(() => {
          spyOn(stopsService, 'listenForDepartureUpdates').and.returnValue(throwError(new Error()));
        });

        it('should set isError flag to true', () => {
          component.ngOnInit();

          expect(component.isError).toBeTrue();
        });

      });

    });

  });

  describe('updateNetworkStatus', () => {

    it('should set the status to live when there is an online event', () => {
      const mockEvent = { type: 'online' } as any as Event;

      component.updateNetworkStatus(mockEvent);

      expect(component.status).toBe(ConnectionStatus.LIVE);
    });

    it('should set the status to live when there is an online event', () => {
      const mockEvent = { type: 'offline' } as any as Event;

      component.updateNetworkStatus(mockEvent);

      expect(component.status).toBe(ConnectionStatus.OFFLINE);
    });

  });

});
