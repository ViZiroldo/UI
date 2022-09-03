import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Function } from 'src/app/shared';
import { FunctionService } from '../services/function.service';

@Component({
  selector: 'app-list-function',
  templateUrl: './list-function.component.html',
  styleUrls: ['./list-function.component.css']
})
export class ListFunctionComponent implements OnInit {

  funcs: Function[] = [];

  constructor(
    private funcService: FunctionService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.funcs = [];
    this.getAll();
  }

  getAll(): Function[] {
    this.funcService.getAll().subscribe({
      next: (data: Function[]) => {
        if (data == null) {
          this.funcs = [];
        }
        else {
          this.funcs = data;
        }
      }
    });
    return this.funcs;
  }

  delete($event: any, func: Function): void {
    $event.preventDefault();
    if (confirm('Deseja realmente remover o player "' + func.nome + '"?')) {
      this.funcService.delete(func.id!).subscribe({
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
