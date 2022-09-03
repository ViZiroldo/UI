import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFunctionComponent } from './list-function/list-function.component';
import { InsertEditFunctionComponent } from './insert-edit-function/insert-edit-function.component';



@NgModule({
  declarations: [
    ListFunctionComponent,
    InsertEditFunctionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FunctionModule { }
