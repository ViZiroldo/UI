import { Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { InsertEditMatchComponent } from "./insert-edit-match/insert-edit-match.component";
import { ListMatchComponent } from "./list-match/list-match.component";

export const MatchRoutes: Routes = [
  {
    path: 'matchs',
    redirectTo: 'matchs/list'
  },
  {
    path: 'matchs/list',
    component: ListMatchComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ADMIN'
    }
  },
  {
    path: 'matchs/new',
    component: InsertEditMatchComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ADMIN'
    }
  },
  {
    path: 'matchs/edit/:id',
    component: InsertEditMatchComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ADMIN'
    }
  }
];
