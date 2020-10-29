import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { StopsService } from './../../../services/stops.service';
import { StopFinderComponent } from './stop-finder.component';

describe('StopFinderComponent', () => {
  let component: StopFinderComponent;
  let fixture: ComponentFixture<StopFinderComponent>;
  let stopService: StopsService;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        StopFinderComponent
      ],
      providers: [
        {
          provide: StopsService,
          useValue: {
            getAllStops: jasmine.createSpy().and.returnValue(of([]))
          }
        },
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy().and.callThrough()
          }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StopFinderComponent);
    stopService = TestBed.inject(StopsService);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('ngOnInit', () => {

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should fetch to get all stops', () => {
      expect(stopService.getAllStops).toHaveBeenCalled();
    });

  });

  describe('togglePicker', () => {

    it('should show picker when hidden', () => {
      component.showPicker = false;

      component.togglePicker();

      expect(component.showPicker).toBeTrue();
    });

    it('should hide picker when shown', () => {
      component.showPicker = true;

      component.togglePicker();

      expect(component.showPicker).toBeFalse();
    });

  });

  describe('goToDepartures', () => {

    it('should navigate the user', () => {
      const atcoCode = '1234567890';

      component.goToDepartures(atcoCode);

      expect(router.navigate).toHaveBeenCalled();
    });

    it('should navigate the user to the stops page', () => {
      const atcoCode = '1234567890';

      component.goToDepartures(atcoCode);

      expect(router.navigate).toHaveBeenCalledWith(['stop', jasmine.any(String)]);
    });

    it('should nvagigate the user to the stops page with a given atoc code', () => {
      const atcoCode = '1234567890';

      component.goToDepartures(atcoCode);

      expect(router.navigate).toHaveBeenCalledWith([jasmine.any(String), atcoCode]);
    });
  });

});
