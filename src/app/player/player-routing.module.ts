import { Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { InserEditPlayerComponent } from "./inser-edit-player/inser-edit-player.component";
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
    component: InserEditPlayerComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ADMIN'
    }
  },
  {
    path: 'players/edit/:id',
    component: InserEditPlayerComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ADMIN'
    }
  }
];
