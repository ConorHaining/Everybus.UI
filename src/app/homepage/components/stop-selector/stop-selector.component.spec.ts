import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { StopFilterPipe } from '../../pipes/stop-filter.pipe';
import { StopsService } from './../../../services/stops.service';
import { StopSelectorComponent } from './stop-selector.component';

describe('StopSelectorComponent', () => {
  let component: StopSelectorComponent;
  let fixture: ComponentFixture<StopSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        StopSelectorComponent,
        StopFilterPipe
      ],
      providers: [
        {
          provide: StopsService,
          useValue: {
            getAllStops: () => of()
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StopSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
