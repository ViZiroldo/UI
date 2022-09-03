import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Match } from 'src/app/shared';
import { MatchService } from '../services/match.service';

@Component({
  selector: 'app-list-match',
  templateUrl: './list-match.component.html',
  styleUrls: ['./list-match.component.css']
})
export class ListMatchComponent implements OnInit {

  matchs: Match[] = [];

  constructor(
    private matchService: MatchService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.matchs = [];
    this.getAll();
  }

  getAll(): Match[] {
    this.matchService.getAll().subscribe({
      next: (data: Match[]) => {
        if (data == null) {
          this.matchs = [];
        }
        else {
          this.matchs = data;
        }
      }
    });
    return this.matchs;
  }

  delete($event: any, match: Match): void {
    $event.preventDefault();
    if (confirm('Deseja realmente remover o player "' + match.nome + '"?')) {
      this.matchService.delete(match.id!).subscribe({
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
