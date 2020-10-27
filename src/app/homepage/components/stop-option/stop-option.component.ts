import { Highlightable } from '@angular/cdk/a11y';
import { Component, Input, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'pl-stop-option',
  template: '<ng-content></ng-content>',
  host: {
    role: 'option'
  }
})
export class StopOptionComponent implements Highlightable {

  @Input() @HostBinding('attr.aria-label') label: string;
  @Input() @HostBinding('id') identifer: string;

  private _isActive = false;
  @HostBinding('class.bg-gray-300') get active(): boolean { return this._isActive; }

  disabled?: boolean;

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
