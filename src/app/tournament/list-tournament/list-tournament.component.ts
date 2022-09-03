import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Tournament } from 'src/app/shared';
import { TournamentService } from '../services/tournament.service';

@Component({
  selector: 'app-list-tournament',
  templateUrl: './list-tournament.component.html',
  styleUrls: ['./list-tournament.component.css']
})
export class ListTournamentComponent implements OnInit {

  tournaments: Tournament[] = [];

  constructor(
    private tournamentService: TournamentService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.tournaments = [];
    this.getAll();
  }

  getAll(): Tournament[] {
    this.tournamentService.getAll().subscribe({
      next: (data: Tournament[]) => {
        if (data == null) {
          this.tournaments = [];
        }
        else {
          this.tournaments = data;
        }
      }
    });
    return this.tournaments;
  }

  delete($event: any, tournament: Tournament): void {
    $event.preventDefault();
    if (confirm('Deseja realmente remover o usuario "' + tournament.nome + '"?')) {
      this.tournamentService.delete(tournament.id!).subscribe({
        complete:() => {
          this.getAll();
        }
      });
    }
  }

  // openModal(user: Tournament) {
  //   const modalRef = this.modalService.open(UserModalComponent);
  //   modalRef.componentInstance.user = user;
  // }
}
