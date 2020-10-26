import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ConnectedIndicatorComponent, ConnectionStatus } from './connected-indicator.component';

describe('ConnectedIndicatorComponent', () => {
  let component: ConnectedIndicatorComponent;
  let fixture: ComponentFixture<ConnectedIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConnectedIndicatorComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectedIndicatorComponent);
    component = fixture.componentInstance;
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
