import { Highlightable } from '@angular/cdk/a11y';
import { Component, ElementRef, Host, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'pl-autocomplete-list-item',
  template: '<ng-content></ng-content>',
  host: {
    tabindex: '-1',
    role: 'option'
  }
})
export class AutocompleteListItemComponent implements Highlightable {

  /** Sets the label for the focusable item, which could be read by a screenreader */
  @Input() @HostBinding('attr.aria-label') label: string;

  /** A unique identifer for the item which will be emitted if the user presses enter */
  @Input() @HostBinding('id') identifier?: any;

  private _isActive = false;
  @HostBinding('class.bg-gray-300') get isActive(): boolean {
    return this._isActive;
  }

  disabled?: boolean;

  constructor() { }

  setActiveStyles(): void {
    this._isActive = true;
  }

  setInactiveStyles(): void {
    this._isActive = false;
  }

  getLabel?(): string {
    return this.label;
  }

}
