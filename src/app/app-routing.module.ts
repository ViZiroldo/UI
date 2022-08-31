import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditTeamComponent } from './team/edit-team/edit-team.component';
import { InsertTeamComponent } from './team/insert-team/insert-team.component';
import { ListTeamComponent } from './team/list-team/list-team.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'teams/list',
    pathMatch: 'full'
  },
  {
    path: 'teams',
    redirectTo: 'teams/list'
  },
  {
    path: 'teams/list',
    component: ListTeamComponent,
  },
  {
    path: 'teams/new',
    component: InsertTeamComponent,
  },
  {
    path: 'teams/edit/:id',
    component: EditTeamComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
