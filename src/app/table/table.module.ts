import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableComponent } from "./table.component";
import { TableMainComponent } from './table-main/table-main.component';

import { LoaderComponent } from "../loader/loader.component";


@NgModule({
  declarations: [
    TableComponent,
    TableMainComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    
  ],
  exports: [
    TableComponent
  ]
})
export class TableModule { }
