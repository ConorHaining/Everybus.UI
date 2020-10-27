import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { StopsService } from 'src/app/services/stops.service';
import { StopResolver } from './stop-resolver.service';

describe('StopResolverService', () => {
  let service: StopResolver;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let stopsService: StopsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        {
          provide: StopsService,
          useValue: {
            getStopByAtco: jasmine.createSpy().and.returnValue(of())
          }
        }
      ]
    });

    service = TestBed.inject(StopResolver);
    httpClient = TestBed.inject(HttpClient);
    stopsService = TestBed.inject(StopsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('resolve', () => {

    it('should call stop service with the atco code given in the url', () => {
      const snapshot: ActivatedRouteSnapshot = {
        paramMap: convertToParamMap({ atcoCode: '123' })
      } as any as ActivatedRouteSnapshot;

      service.resolve(snapshot);

      expect(stopsService.getStopByAtco).toHaveBeenCalledWith('123');
    });

  });

});
