import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamService } from './services/team.service';
import { ListTeamComponent } from './list-team/list-team.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InsertEditTeamComponent } from './insert-edit-team/insert-team.component';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { SharedModule } from '../shared';
import { TeamModalComponent } from './team-modal/team-modal.component';


export const option: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [
    ListTeamComponent,
    InsertEditTeamComponent,
    TeamModalComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule,
    NgxMaskModule.forRoot()
  ],
  providers: [
    TeamService
  ]
})
export class TeamModule { }
