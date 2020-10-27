import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ListComponent } from './components/list/list.component';


@NgModule({
  declarations: [
    ListComponent,
    ListItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListComponent,
    ListItemComponent
  ],
})
export class ListModule { }
