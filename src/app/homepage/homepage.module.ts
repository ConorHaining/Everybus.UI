import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';
import { StopFinderComponent } from './components/stop-finder/stop-finder.component';
import { AutocompleteModule } from './../common/autocomplete/autocomplete.module';
import { StopFinderComponent } from './components/stop-finder/stop-finder.component';
import { StopOptionComponent } from './components/stop-option/stop-option.component';
import { OverlayHostDirective } from './directives/overlay-host.directive';
import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage/homepage.component';



@NgModule({
  declarations: [
    HomepageComponent,
    StopFinderComponent,
    StopOptionComponent,
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    FormsModule,
    PipesModule,

    AutocompleteModule
  ]
})
export class HomepageModule { }
