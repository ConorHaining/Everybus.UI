import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { ServicesModule } from '../services/services.module';
import { PipesModule } from './../pipes/pipes.module';
import { DepartureDetailsComponent } from './components/departure-details/departure-details.component';
import { StopDetailsPageRoutingModule } from './stop-details-page-routing.module';
import { StopDetailsPageComponent } from './stop-details-page.component';



@NgModule({
  declarations: [
    DepartureDetailsComponent,
    StopDetailsPageComponent,
  ],
  imports: [
    CommonModule,
    ServicesModule,
    PipesModule,
    StopDetailsPageRoutingModule,
  ]
})
export class StopDetailsPageModule { }
