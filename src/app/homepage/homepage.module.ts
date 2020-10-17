import { ConnectedIndicatorComponent } from './components/connected-indicator/connected-indicator.component';
import { ListModule } from './../common/list/list.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';
import { ServicesModule } from './../services/services.module';
import { StopFinderComponent } from './components/stop-finder/stop-finder.component';
import { OverlayHostDirective } from './directives/overlay-host.directive';
import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { StopOptionComponent } from './components/stop-option/stop-option.component';



@NgModule({
  declarations: [
    HomepageComponent,
    OverlayHostDirective,
    StopFinderComponent,
    StopOptionComponent,
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    FormsModule,
    PipesModule,

    ListModule
  ]
})
export class HomepageModule { }
