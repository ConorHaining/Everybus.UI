import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectedIndicatorComponent } from './connected-indicator.component';

describe('ConnectedIndicatorComponent', () => {
  let component: ConnectedIndicatorComponent;
  let fixture: ComponentFixture<ConnectedIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectedIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectedIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
