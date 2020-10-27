import { FocusKeyManager } from '@angular/cdk/a11y';
import { AfterContentInit, Component, ContentChildren, EventEmitter, HostListener, Output, QueryList } from '@angular/core';
import { ListItemComponent } from 'src/app/common/list/components/list-item/list-item.component';

@Component({
  selector: 'pl-list',
  template: '<ng-content></ng-content>',
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
export class ListComponent implements AfterContentInit {

  @ContentChildren(ListItemComponent) items: QueryList<ListItemComponent>;
  private keyManager: FocusKeyManager<ListItemComponent>;

  /** Will emit the identifer, if provided. Otherwise will emit null */
  @Output() selected = new EventEmitter<any>();

  @HostListener('keydown', ['$event'])
  manage(event: KeyboardEvent): void {
    if (event.code === 'Enter') {
      const identifier = this.keyManager.activeItem.identifier || null;
      this.selected.emit(identifier);
    } else {
      this.keyManager.onKeydown(event);
    }
  }

  ngAfterContentInit(): void {
    this.keyManager = new FocusKeyManager(this.items).withWrap().withHomeAndEnd();
  }

}
