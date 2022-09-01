import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/auth/services/user.service';
import { User } from 'src/app/shared';

@Component({
  selector: 'app-insert-edit-user',
  templateUrl: './insert-edit-user.component.html',
  styleUrls: ['./insert-edit-user.component.css']
})
export class InsertEditUserComponent implements OnInit {
@ViewChild('formUser') formUser!: NgForm;
isNewUser: boolean = true;
user: User = new User();
id!: string;
isLoading!: boolean;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = new User();
    this.isLoading = false;

    this.id = this.route.snapshot.params['id'];
    this.isNewUser = !this.id;

    if (!this.isNewUser) {
      this.userService.buscarPorId(+this.id).subscribe(
        user => {
          this.user = user;
          this.user.nome = "";
        }
      );
    }
  }

  save(): void {
    this.isLoading = true;
    if (this.formUser.form.valid) {
      if (this.isNewUser) {
        this.userService.inserir(this.user).subscribe(
          user => {
            this.isLoading = false;
            this.router.navigate(["/users"]);
          }
        )
      }
    }
    else {
      this.userService.alterar(this.user).subscribe(
        user => {
          this.isLoading = false;
          this.router.navigate(["/users"]);
        }
      )
    }
    this.isLoading = false;
  }

}
