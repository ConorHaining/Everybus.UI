import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef, ElementRef } from '@angular/core';
import { StopSelectorComponent } from '../stop-selector/stop-selector.component';
import { OverlayHostDirective } from '../../directives/overlay-host.directive';

@Component({
  selector: 'stop-finder',
  templateUrl: './stop-finder.component.html',
  styleUrls: ['./stop-finder.component.scss']
})
export class StopFinderComponent implements OnInit {

  @ViewChild(OverlayHostDirective) selectorHolder: OverlayHostDirective;

  constructor(
    private readonly componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
  }

  openSelector(): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(StopSelectorComponent);

    const viewContainerRef = this.selectorHolder.viewContainerRef;
    viewContainerRef.clear();

    viewContainerRef.createComponent<StopSelectorComponent>(componentFactory);
  }

}
