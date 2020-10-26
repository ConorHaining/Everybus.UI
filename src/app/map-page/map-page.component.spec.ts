import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { of } from 'rxjs';
import { VehicleLocations } from './../../test/data/vehicleLocations';
import { VehicleTrackingService } from './../services/vehicle-tracking.service';
import { MapPageComponent } from './map-page.component';

describe('MapPageComponent', () => {
  let component: MapPageComponent;
  let fixture: ComponentFixture<MapPageComponent>;
  let vehicleTrackingService: VehicleTrackingService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LeafletModule],
      declarations: [MapPageComponent],
      providers: [
        {
          provide: VehicleTrackingService,
          useValue: {
            pollForAllVehicleLocations: jasmine.createSpy().and.returnValue(of(VehicleLocations))
          }
        },
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of(convertToParamMap({ vehicleId: '123' }))
          }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    vehicleTrackingService = TestBed.inject(VehicleTrackingService);
    fixture = TestBed.createComponent(MapPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('ngOnInit', () => {

    it('should get the vechicle id', () => {
      expect(component.vehicleId).toBe('123');
    });

    it('should begin polling for vehicle updates', () => {
      expect(vehicleTrackingService.pollForAllVehicleLocations).toHaveBeenCalled();
    });

    it('should find the vehicle', fakeAsync(() => {
      tick();
      expect(component.vehicle).toBeDefined();
    }));

    it('should center the map onto the vehicle', fakeAsync(() => {
      tick();
      expect(component.center).toBeDefined();
    }));

    it('should have a vehicle layer to display', fakeAsync(() => {
      tick();
      expect(component.vehicleLayer).toBeDefined();
    }));

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
