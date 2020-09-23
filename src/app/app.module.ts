import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MapPageModule } from 'src/app/map-page/map-page.module';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageModule } from './homepage/homepage.module';
import { StopDetailsPageModule } from './stop-details-page/stop-details-page.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HomepageModule,
    LeafletModule,

    HomepageModule,
    StopDetailsPageModule,
    MapPageModule,

    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
