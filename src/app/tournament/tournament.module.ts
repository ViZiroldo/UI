import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTournamentComponent } from './list-tournament/list-tournament.component';
import { InsertEditTournamentComponent } from './insert-edit-tournament/insert-edit-tournament.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared';
import { IConfig, NgxMaskModule } from 'ngx-mask';

export const option: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [
    ListTournamentComponent,
    InsertEditTournamentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule,
    NgxMaskModule.forRoot()
  ]
})
export class TournamentModule { }
