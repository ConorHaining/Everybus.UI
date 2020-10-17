import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StopOptionComponent } from './stop-option.component';

describe('StopOptionComponent', () => {
  let component: StopOptionComponent;
  let fixture: ComponentFixture<StopOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StopOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StopOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
