import { Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { InsertEditFunctionComponent } from "./insert-edit-function/insert-edit-function.component";
import { ListFunctionComponent } from "./list-function/list-function.component";

export const FunctionRoutes: Routes = [
  {
    path: 'functions',
    redirectTo: 'functions/list'
  },
  {
    path: 'functions/list',
    component: ListFunctionComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ADMIN'
    }
  },
  {
    path: 'functions/new',
    component: InsertEditFunctionComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ADMIN'
    }
  },
  {
    path: 'functions/edit/:id',
    component: InsertEditFunctionComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ADMIN'
    }
  }
];
