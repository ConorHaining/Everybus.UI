import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[overlayHost]'
})
export class OverlayHostDirective {

  constructor(
    public viewContainerRef: ViewContainerRef
  ) { }

}
