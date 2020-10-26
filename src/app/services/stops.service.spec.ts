import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Stop } from './../models/Stop';
import { StopsService } from './stops.service';

describe('StopsService', () => {
  let service: StopsService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  const tfeOpenDataUrls = {
    stops: 'http://tfe-opendata.com/api/v1/stops',
    liveTimes: 'https://everybus.azurewebsites.net/api/departures/{atco_code}'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
    });

    service = TestBed.inject(StopsService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getAllStops', () => {

    it('should make a GET request', () => {
      service.getAllStops().subscribe();

      const req = httpTestingController.expectOne(tfeOpenDataUrls.stops);
      expect(req.request.method).toBe('GET');
    });

    it('should make a request to TFE open data', () => {
      service.getAllStops().subscribe();

      const req = httpTestingController.expectOne(tfeOpenDataUrls.stops);
      expect(req.request.url).toContain('http://tfe-opendata.com/api/v1/stops');
    });

    it('should discard the last updated timestamp', () => {
      service.getAllStops().subscribe(data => {
        expect(data).not.toContain(jasmine.objectContaining({ last_updated: 1599501134 }));
      });

      const req = httpTestingController.expectOne(tfeOpenDataUrls.stops);
      req.flush({
        last_updated: 1599501134,
        stops: []
      });
    });

    it('should pluck the stops', () => {
      const expectedStop: Stop = {
        atco_code: '6200200010',
        stop_id: '36234964',
        name: 'Cockburn Crescent',
        direction: 'NW',
        latitude: '55.876587',
        longitude: '-3.337471',
        destinations: [
          'Balerno',
          'Wallyford',
          'Whitecraig'
        ]
      };
      service.getAllStops().subscribe(data => {
        expect(data[0]).toEqual(jasmine.objectContaining(expectedStop));
      });

      const req = httpTestingController.expectOne(tfeOpenDataUrls.stops);
      req.flush({
        last_updated: 1599501134,
        stops: [
          {
            stop_id: 36234964,
            atco_code: '6200200010',
            name: 'Cockburn Crescent',
            identifier: null,
            locality: null,
            orientation: 270,
            direction: 'NW',
            latitude: 55.876587,
            longitude: -3.337471,
            service_type: 'bus',
            atco_latitude: 55.876587,
            atco_longitude: -3.337471,
            destinations: [
              'Balerno',
              'Wallyford',
              'Whitecraig'
            ],
            services: [
              '44',
              'N44'
            ]
          }
        ]
      });

    });

  });

  describe('getStopByAtco', () => {

    it('should filter stops', () => {
      service.getStopByAtco('6200200010').subscribe(data => {
        expect(data.atco_code).toEqual('6200200010');
      });

      const req = httpTestingController.expectOne(tfeOpenDataUrls.stops);
      req.flush({
        last_updated: 1599501134,
        stops: [{
          stop_id: 36234964,
          atco_code: '6200200010',
          name: 'Cockburn Crescent',
          identifier: null,
          locality: null,
          orientation: 270,
          direction: 'NW',
          latitude: 55.876587,
          longitude: -3.337471,
          service_type: 'bus',
          atco_latitude: 55.876587,
          atco_longitude: -3.337471,
          destinations: [
            'Balerno',
            'Wallyford',
            'Whitecraig'
          ],
          services: [
            '44',
            'N44'
          ]
        }]
      });

    });

  });

  describe('getStopByStopId', () => {

    it('should filter stops', () => {
      service.getStopByStopId('36234964').subscribe(data => {
        expect(data.stop_id).toEqual('36234964');
      });

      const req = httpTestingController.expectOne(tfeOpenDataUrls.stops);
      req.flush({
        last_updated: 1599501134,
        stops: [{
          stop_id: 36234964,
          atco_code: '6200200010',
          name: 'Cockburn Crescent',
          identifier: null,
          locality: null,
          orientation: 270,
          direction: 'NW',
          latitude: 55.876587,
          longitude: -3.337471,
          service_type: 'bus',
          atco_latitude: 55.876587,
          atco_longitude: -3.337471,
          destinations: [
            'Balerno',
            'Wallyford',
            'Whitecraig'
          ],
          services: [
            '44',
            'N44'
          ]
        }]
      });

    });

  });

  describe('getStopDepartures', () => {
    const expectedUrl = 'https://everybus.azurewebsites.net/api/departures/123456';

    it('should make a GET request', () => {
      service.getStopDepartures('123456').subscribe();

      const req = httpTestingController.expectOne(expectedUrl);
      expect(req.request.method).toBe('GET');
    });

    it('should replace the atco code in the url', () => {
      service.getStopDepartures('123456').subscribe();

      const req = httpTestingController.expectOne(expectedUrl);
      expect(req.request.url).toContain('123456');
    });

  });

  describe('listenForDepartureUpdates', () => {
    const expectedUrl = 'https://everybus.azurewebsites.net/api/departures/123456';

    it('should poll for stop departures every ten seconds', fakeAsync(() => {
      spyOn(service, 'getStopDepartures').and.callThrough();

      const subscription = service.listenForDepartureUpdates('123456').subscribe();
      tick(3 * 10000);

      expect(service.getStopDepartures).toHaveBeenCalledTimes(3);
      subscription.unsubscribe();
      httpTestingController.match(expectedUrl);
    }));
  });

});
