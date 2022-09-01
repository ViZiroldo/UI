import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsertEditUserComponent } from './insert-edit-user/insert-edit-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { UserModalComponent } from './user-modal/user-modal.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    InsertEditUserComponent,
    ListUserComponent,
    UserModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class UserModule { }
