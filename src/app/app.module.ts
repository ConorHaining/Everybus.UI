import { ListModule } from './common/list/list.module';
import { ServicesModule } from './services/services.module';
import { HomepageModule } from './homepage/homepage.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnectedIndicatorComponent } from './homepage/components/connected-indicator/connected-indicator.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnectedIndicatorComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HomepageModule,
    ServicesModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),

    ListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
