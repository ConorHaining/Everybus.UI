import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import { AfterContentInit, Component, ContentChildren, EventEmitter, HostBinding, HostListener, Output, QueryList } from '@angular/core';
import { AutocompleteListItemComponent } from '../autocomplete-list-item/autocomplete-list-item.component';

@Component({
  selector: 'pl-autocomplete-list',
  template: `<ng-content></ng-content>`,
  styles: [`
    :host {
      display: block;
    }
  `],
  host: { 
    tabindex: '0',
    role: 'listbox'
  },
})
export class AutocompleteListComponent implements AfterContentInit {

  @ContentChildren(AutocompleteListItemComponent) items: QueryList<AutocompleteListItemComponent>;
  private keyManager: ActiveDescendantKeyManager<AutocompleteListItemComponent>;

  /** Will emit the selected identifer when the user has pressed enter. Otherwise will emit null */
  @Output() selected = new EventEmitter<any>();

  /** Will emit the active identifer, if provided. Otherwise will emit null */
  @Output() activeIdentifer = new EventEmitter<any>();

  @HostListener('window:keydown', ['$event'])
  manage(event: KeyboardEvent): void {
    if (event.code === 'Enter') {
      const identifier = this.keyManager.activeItem.identifier || null;
      this.selected.emit(identifier);
    } else {
      this.keyManager.onKeydown(event);
    }
  }

  ngAfterContentInit(): void {
    this.keyManager = new ActiveDescendantKeyManager(this.items)
                              .withWrap()
                              .withHomeAndEnd()
                              .withTypeAhead();

    this.keyManager.change.subscribe(x => {
      this.activeIdentifer.emit(this.keyManager.activeItem.identifier);
    });
  }

}
