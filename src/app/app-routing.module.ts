import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage/homepage.component';
import { MapPageComponent } from './map-page/map-page.component';
import { DeparturesResolver } from './stop-details-page/resolvers/departures-resolver.service';
import { StopResolver } from './stop-details-page/resolvers/stop-resolver.service';
import { StopDetailsPageComponent } from './stop-details-page/stop-details-page.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepageModule),
  },
  {
    path: 'stop',
    loadChildren: () => import('./stop-details-page/stop-details-page.module').then(m => m.StopDetailsPageModule),
  },
  {
    path: 'vehicle',
    loadChildren: () => import('./map-page/map-page.module').then(m => m.MapPageModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
