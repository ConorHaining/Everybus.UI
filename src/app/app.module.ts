import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StopFinderComponent } from './homepage/components/stop-finder/stop-finder.component';
import { OverlayHostDirective } from './homepage/directives/overlay-host.directive';
import { HomepageComponent } from './homepage/homepage/homepage.component';
import { DestinationsOutputPipe } from './homepage/pipes/destinations-output.pipe';
import { StopFilterPipe } from './homepage/pipes/stop-filter.pipe';
import { MapPageComponent } from './map-page/map-page.component';
import { DepartureDetailsComponent } from './stop-details-page/components/departure-details/departure-details.component';
import { RelativeTimePipe } from './stop-details-page/pipes/relative-time.pipe';
import { StopDetailsPageComponent } from './stop-details-page/stop-details-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    StopFinderComponent,
    OverlayHostDirective,
    StopDetailsPageComponent,
    DepartureDetailsComponent,
    MapPageComponent,
    StopFilterPipe,
    DestinationsOutputPipe,
    RelativeTimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    LeafletModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
