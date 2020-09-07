import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StopFinderComponent } from './homepage/components/stop-finder/stop-finder.component';
import { StopSelectorComponent } from './homepage/components/stop-selector/stop-selector.component';
import { OverlayHostDirective } from './homepage/directives/overlay-host.directive';
import { HomepageComponent } from './homepage/homepage/homepage.component';
import { StopFilterPipe } from './homepage/pipes/stop-filter.pipe';
import { MapPageComponent } from './map-page/map-page.component';
import { DepartureDetailsComponent } from './stop-details-page/components/departure-details/departure-details.component';
import { StopDetailsPageComponent } from './stop-details-page/stop-details-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    StopFinderComponent,
    StopSelectorComponent,
    OverlayHostDirective,
    StopDetailsPageComponent,
    DepartureDetailsComponent,
    MapPageComponent,
    StopFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
