import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteListItemComponent } from './autocomplete-list-item.component';

describe('AutocompleteListItemComponent', () => {
  let component: AutocompleteListItemComponent;
  let fixture: ComponentFixture<AutocompleteListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocompleteListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
