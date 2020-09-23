import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesModule } from '../services/services.module';
import { PipesModule } from './../pipes/pipes.module';
import { DepartureDetailsComponent } from './components/departure-details/departure-details.component';
import { StopResolver } from './resolvers/stop-resolver.service';
import { StopDetailsPageComponent } from './stop-details-page.component';

const routes: Routes = [
  {
    path: ':atcoCode',
    component: StopDetailsPageComponent,
    resolve: {
      stop: StopResolver
    }
  }
];

@NgModule({
  declarations: [
    DepartureDetailsComponent,
    StopDetailsPageComponent,
  ],
  imports: [
    CommonModule,
    ServicesModule,
    PipesModule,
    RouterModule.forChild(routes),
  ]
})
export class StopDetailsPageModule { }
