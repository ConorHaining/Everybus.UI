import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MapPageComponent } from './map-page.component';

const routes: Routes = [
  {
    path: ':vehicleId',
    component: MapPageComponent
  }
];

@NgModule({
  declarations: [
    MapPageComponent
  ],
  imports: [
    CommonModule,
    LeafletModule,
    RouterModule.forChild(routes),
  ]
})
export class MapPageModule { }
