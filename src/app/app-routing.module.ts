import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginRoutes } from './auth/auth-routing.module';
import { AuthGuard } from './auth/auth.guard';
import { GroupRoutes } from './group/group-routing.module';
import { HomeComponent } from './home/home.component';
import { MatchRoutes } from './match/match-routing.module';
import { PlayerRoutes } from './player/player-routing.module';
import { TeamRoutes } from './team/team-routing.module';
import { TournamentRoutes } from './tournament/tournament-routing.module';
import { UserRoutes } from './user/user-routing.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
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
  ...PlayerRoutes,
  ...TournamentRoutes,
  ...MatchRoutes,
  ...GroupRoutes,
  ...TeamRoutes,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
