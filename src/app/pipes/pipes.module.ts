import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DestinationsOutputPipe } from './destinations-output.pipe';
import { RelativeTimePipe } from './relative-time.pipe';
import { StopFilterPipe } from './stop-filter.pipe';


@NgModule({
  declarations: [
    DestinationsOutputPipe,
    StopFilterPipe,
    RelativeTimePipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DestinationsOutputPipe,
    StopFilterPipe,
    RelativeTimePipe,
  ]
})
export class PipesModule { }
