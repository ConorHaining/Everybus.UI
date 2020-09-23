import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PipesModule } from '../pipes/pipes.module';
import { ServicesModule } from './../services/services.module';
import { StopFinderComponent } from './components/stop-finder/stop-finder.component';
import { OverlayHostDirective } from './directives/overlay-host.directive';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  }
];

@NgModule({
  declarations: [
    HomepageComponent,
    OverlayHostDirective,
    StopFinderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ServicesModule,
    FormsModule,
    PipesModule
  ]
})
export class HomepageModule { }
