import { Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { InsertEditUserComponent } from "./insert-edit-user/insert-edit-user.component";
import { ListUserComponent } from "./list-user/list-user.component";

export const UserRoutes: Routes = [
  {
    path: 'users',
    redirectTo: 'users/list'
  },
  {
    path: 'users/list',
    component: ListUserComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ADMIN'
    }
  },
  {
    path: 'users/new',
    component: InsertEditUserComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ADMIN'
    }
  },
  {
    path: 'users/edit/:id',
    component: InsertEditUserComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ADMIN'
    }
  }
];
