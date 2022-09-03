import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsertEditMatchComponent } from './insert-edit-match/insert-edit-match.component';
import { ListMatchComponent } from './list-match/list-match.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared';
import { NgxMaskModule } from 'ngx-mask';



@NgModule({
  declarations: [
    InsertEditMatchComponent,
    ListMatchComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule,
    NgxMaskModule.forRoot()
  ]
})
export class MatchModule { }
