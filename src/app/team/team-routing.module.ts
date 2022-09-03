import { Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { InsertEditTeamComponent } from "./insert-edit-team/insert-team.component";
import { ListTeamComponent } from "./list-team/list-team.component";

export const TeamRoutes: Routes = [
  {
    path: 'teams',
    redirectTo: 'teams/list'
  },
  {
    path: 'teams/list',
    component: ListTeamComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ADMIN'
    }
  },
  {
    path: 'teams/new',
    component: InsertEditTeamComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ADMIN'
    }
  },
  {
    path: 'teams/edit/:id',
    component: InsertEditTeamComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ADMIN'
    }
  }
];
