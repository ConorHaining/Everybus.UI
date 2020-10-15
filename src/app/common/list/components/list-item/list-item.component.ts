import { FocusableOption, FocusOrigin } from '@angular/cdk/a11y';
import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pl-list-item',
  template: '<p>{{ fruit }}</p>',
  host: { 
    tabindex: '-1',
    role: 'option'
  }
})
export class ListItemComponent implements FocusableOption {
  @Input() fruit: string;
  disabled: boolean;

  constructor(private element: ElementRef) {
  }

  getLabel(): string {
    return this.fruit;
  }

  focus(): void {
    this.element.nativeElement.focus();
  }

}
