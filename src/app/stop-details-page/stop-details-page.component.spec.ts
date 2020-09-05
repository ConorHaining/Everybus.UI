import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StopDetailsPageComponent } from './stop-details-page.component';

describe('StopDetailsPageComponent', () => {
  let component: StopDetailsPageComponent;
  let fixture: ComponentFixture<StopDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StopDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StopDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
