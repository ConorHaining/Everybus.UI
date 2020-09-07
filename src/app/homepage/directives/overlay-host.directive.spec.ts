import { ViewContainerRef } from '@angular/core';
import { OverlayHostDirective } from './overlay-host.directive';

describe('OverlayHostDirective', () => {
  it('should create an instance', () => {
    const viewContainerRef = {} as ViewContainerRef;
    const directive = new OverlayHostDirective(viewContainerRef);
    expect(directive).toBeTruthy();
  });
});
