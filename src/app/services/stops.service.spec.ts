import { Stop } from './../models/Stop';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { StopsService } from './stops.service';

describe('StopsService', () => {
  let service: StopsService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  const tfeOpenDataUrls = {
    stops: 'http://tfe-opendata.com/api/v1/stops'
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
        expect(data).not.toContain(jasmine.objectContaining({last_updated: 1599501134}));
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
});
