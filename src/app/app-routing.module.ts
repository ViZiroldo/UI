import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginRoutes } from './auth/auth-routing.module';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { PlayerRoutes } from './player/player-routing.module';
import { EditTeamComponent } from './team/edit-team/edit-team.component';
import { InsertTeamComponent } from './team/insert-team/insert-team.component';
import { ListTeamComponent } from './team/list-team/list-team.component';
import { UserRoutes } from './user/user-routing.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'teams',
    redirectTo: 'teams/list'
  },
  {
    path: 'teams/list',
    component: ListTeamComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ADMIN,GERENTE,FUNC'
    }
  },
  {
    path: 'teams/new',
    component: InsertTeamComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ADMIN,GERENTE,FUNC'
    }
  },
  {
    path: 'teams/edit/:id',
    component: EditTeamComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ADMIN,GERENTE,FUNC'
    }
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ADMIN,GERENTE,FUNC'
    }
  },
  ...LoginRoutes,
  ...UserRoutes,
  ...PlayerRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
