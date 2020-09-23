import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { StopsService } from 'src/app/services/stops.service';



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    StopsService
  ]
})
export class ServicesModule { }
