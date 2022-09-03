import { Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { InsertEditPlayerComponent } from "./insert-edit-player/insert-edit-player.component";
import { ListPlayerComponent } from "./list-player/list-player.component";

export const PlayerRoutes: Routes = [
  {
    path: 'players',
    redirectTo: 'players/list'
  },
  {
    path: 'players/list',
    component: ListPlayerComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ADMIN'
    }
  },
  {
    path: 'players/new',
    component: InsertEditPlayerComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ADMIN'
    }
  },
  {
    path: 'players/edit/:id',
    component: InsertEditPlayerComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ADMIN'
    }
  }
];
