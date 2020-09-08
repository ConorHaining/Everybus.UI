import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage/homepage.component';
import { MapPageComponent } from './map-page/map-page.component';
import { StopDetailsPageComponent } from './stop-details-page/stop-details-page.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'stop/:atcoCode', component: StopDetailsPageComponent },
  { path: 'journey/:journeyId', component: MapPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
