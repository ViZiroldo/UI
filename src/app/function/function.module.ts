import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFunctionComponent } from './list-function/list-function.component';
import { InsertEditFunctionComponent } from './insert-edit-function/insert-edit-function.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared';
import { NgxMaskModule } from 'ngx-mask';



@NgModule({
  declarations: [
    ListFunctionComponent,
    InsertEditFunctionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule,
    NgxMaskModule.forRoot()
  ]
})
export class FunctionModule { }
