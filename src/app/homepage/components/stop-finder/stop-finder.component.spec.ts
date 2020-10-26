import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { StopsService } from './../../../services/stops.service';
import { StopFinderComponent } from './stop-finder.component';

describe('StopFinderComponent', () => {
  let component: StopFinderComponent;
  let fixture: ComponentFixture<StopFinderComponent>;
  let stopService: StopsService;

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
          useClass: class {
              navigate = jasmine.createSpy('navigate');
          }
      }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StopFinderComponent);
    stopService = TestBed.inject(StopsService);
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

});
