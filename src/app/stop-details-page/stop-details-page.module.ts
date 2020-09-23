import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ServicesModule } from '../services/services.module';
import { PipesModule } from './../pipes/pipes.module';
import { DepartureDetailsComponent } from './components/departure-details/departure-details.component';
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
    RouterModule,
  ]
})
export class StopDetailsPageModule { }
