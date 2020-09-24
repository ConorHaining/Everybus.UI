import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage/homepage.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    pathMatch: 'full'
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
