import { FocusableOption, FocusOrigin } from '@angular/cdk/a11y';
import { Component, ElementRef, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pl-list-item',
  template: '<ng-content></ng-content>',
  host: {
    tabindex: '-1',
    role: 'option'
  }
})
export class ListItemComponent implements FocusableOption {
  @Input() label: string;
  @HostBinding('attr.aria-label') get ariaLabel(): string { return this.label; }
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
