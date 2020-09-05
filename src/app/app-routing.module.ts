import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage/homepage.component';
import { StopDetailsPageComponent } from './stop-details-page/stop-details-page.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'stop/:stopId', component: StopDetailsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
