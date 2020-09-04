import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage/homepage.component';
import { StopFinderComponent } from './homepage/components/stop-finder/stop-finder.component';
import { StopSelectorComponent } from './homepage/components/stop-selector/stop-selector.component';
import { OverlayHostDirective } from './homepage/directives/overlay-host.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    StopFinderComponent,
    StopSelectorComponent,
    OverlayHostDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
