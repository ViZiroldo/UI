import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/auth/services/user.service';
import { User } from 'src/app/shared';
import { UserModalComponent } from '../user-modal/user-modal.component';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users: User[] = [];

  constructor(
    private userService: UserService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.users = [];
    this.getAll();
  }

  getAll(): User[] {
    this.userService.getAll().subscribe({
      next: (data: User[]) => {
        if (data == null) {
          this.users = [];
        }
        else {
          this.users = data;
        }
      }
    });
    return this.users;
  }

  delete($event: any, user: User): void {
    $event.preventDefault();
    if (confirm('Deseja realmente remover o usuario "' + user.nome + '"?')) {
      this.userService.delete(user.id!).subscribe({
        complete:() => {
          this.getAll();
        }
      });
    }
  }

  openModal(user: User) {
    const modalRef = this.modalService.open(UserModalComponent);
    modalRef.componentInstance.user = user;
  }
}
