import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage/homepage.component';
import { MapPageComponent } from './map-page/map-page.component';
import { DeparturesResolver } from './stop-details-page/resolvers/departures-resolver.service';
import { StopResolver } from './stop-details-page/resolvers/stop-resolver.service';
import { StopDetailsPageComponent } from './stop-details-page/stop-details-page.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  {
    path: 'stop/:stopId',
    component: StopDetailsPageComponent,
    resolve: {
      departures: DeparturesResolver,
      stop: StopResolver
    }
  },
  { path: 'vehicle/:vehicleId', component: MapPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
