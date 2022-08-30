import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamService } from './services/team.service';
import { EditTeamComponent } from './edit-team/edit-team.component';
import { ListTeamComponent } from './list-team/list-team.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InsertTeamComponent } from './insert-team/insert-team.component';



@NgModule({
  declarations: [
    EditTeamComponent,
    ListTeamComponent,
    InsertTeamComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    TeamService
  ]
})
export class TeamModule { }
