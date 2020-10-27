import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import { VehicleTrackingService } from './vehicle-tracking.service';

describe('VehicleTrackingService', () => {
  let service: VehicleTrackingService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
    });
    service = TestBed.inject(VehicleTrackingService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('pollForAllVehicleLocations', () => {
    const expectedUrl = 'https://everybus.azurewebsites.net/api/locations';

    it('should make a request every 10 seconds', fakeAsync(() => {
      spyOn(service, 'getAllVehicleLocations').and.callThrough();

      const subscription = service.pollForAllVehicleLocations().subscribe();
      tick(3 * 10000);

      expect(service.getAllVehicleLocations).toHaveBeenCalledTimes(4);
      subscription.unsubscribe();
      httpTestingController.match(expectedUrl);
    }));

  });

  describe('getAllVehicleLocations', () => {
    const expectedUrl = 'https://everybus.azurewebsites.net/api/locations';

    it('should make a GET request', () => {
      service.getAllVehicleLocations().subscribe();

      const req = httpTestingController.expectOne(expectedUrl);
      expect(req.request.method).toBe('GET');
    });

  });

});
