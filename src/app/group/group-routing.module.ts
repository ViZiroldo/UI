import { Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { InsertEditGroupComponent } from "./insert-edit-group/inser-edit-group.component";
import { ListGroupComponent } from "./list-group/list-group.component";

export const GroupRoutes: Routes = [
  {
    path: 'groups',
    redirectTo: 'groups/list'
  },
  {
    path: 'groups/list',
    component: ListGroupComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ADMIN'
    }
  },
  {
    path: 'groups/new',
    component: InsertEditGroupComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ADMIN'
    }
  },
  {
    path: 'groups/edit/:id',
    component: InsertEditGroupComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ADMIN'
    }
  }
];
