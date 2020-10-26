import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AutocompleteListItemComponent } from './autocomplete-list-item/autocomplete-list-item.component';
import { AutocompleteListComponent } from './autocomplete-list/autocomplete-list.component';



@NgModule({
  declarations: [
    AutocompleteListComponent,
    AutocompleteListItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AutocompleteListComponent,
    AutocompleteListItemComponent
  ]
})
export class AutocompleteModule { }
