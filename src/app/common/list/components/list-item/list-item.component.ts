import { FocusableOption } from '@angular/cdk/a11y';
import { Component, ElementRef, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'pl-list-item',
  template: '<ng-content></ng-content>',
  host: {
    tabindex: '-1',
    role: 'option'
  }
})
export class ListItemComponent implements FocusableOption {
  /** Sets the label for the focusable item, which could be read by a screenreader */
  @Input() @HostBinding('attr.aria-label') label: string;

  /** A unique identifer for the item which will be emitted if the user presses enter */
  @Input() identifier?: any;

  disabled: boolean;

  constructor(private element: ElementRef) {
  }

  getLabel(): string {
    return this.label;
  }

  focus(): void {
    this.element.nativeElement.focus();
  }

}
