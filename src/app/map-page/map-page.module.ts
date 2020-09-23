import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MapPageComponent } from './map-page.component';

@NgModule({
  declarations: [
    MapPageComponent
  ],
  imports: [
    CommonModule,
    LeafletModule,
    RouterModule,
  ]
})
export class MapPageModule { }
