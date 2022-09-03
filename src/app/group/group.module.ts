import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsertEditGroupComponent } from './insert-edit-group/inser-edit-group.component';
import { ListGroupComponent } from './list-group/list-group.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared';
import { NgxMaskModule } from 'ngx-mask';



@NgModule({
  declarations: [
    InsertEditGroupComponent,
    ListGroupComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule,
    NgxMaskModule.forRoot()
  ]
})
export class GroupModule { }
