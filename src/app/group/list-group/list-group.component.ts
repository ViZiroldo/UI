import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Group } from 'src/app/shared';
import { GroupService } from '../services/group.service';

@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.css']
})
export class ListGroupComponent implements OnInit {

  groups: Group[] = [];

  constructor(
    private groupService: GroupService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.groups = [];
    this.getAll();
  }

  getAll(): Group[] {
    this.groupService.getAll().subscribe({
      next: (data: Group[]) => {
        if (data == null) {
          this.groups = [];
        }
        else {
          this.groups = data;
        }
      }
    });
    return this.groups;
  }

  delete($event: any, match: Group): void {
    $event.preventDefault();
    if (confirm('Deseja realmente remover o player "' + match.nome + '"?')) {
      this.groupService.delete(match.id!).subscribe({
        complete:() => {
          this.getAll();
        }
      });
    }
  }

  // openModal(user: User) {
  //   const modalRef = this.modalService.open(UserModalComponent);
  //   modalRef.componentInstance.user = user;
  // }
}
