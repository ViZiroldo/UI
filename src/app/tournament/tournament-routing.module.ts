import { Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { InsertEditTournamentComponent } from "./insert-edit-tournament/insert-edit-tournament.component";
import { ListTournamentComponent } from "./list-tournament/list-tournament.component";

export const TournamentRoutes: Routes = [
  {
    path: 'tournament',
    redirectTo: 'tournament/list'
  },
  {
    path: 'tournament/list',
    component: ListTournamentComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ADMIN'
    }
  },
  {
    path: 'tournament/new',
    component: InsertEditTournamentComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ADMIN'
    }
  },
  {
    path: 'tournament/edit/:id',
    component: InsertEditTournamentComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ADMIN'
    }
  }
];
