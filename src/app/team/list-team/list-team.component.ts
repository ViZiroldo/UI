import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/shared';
import { TeamService } from '../services/team.service';
import { TeamModalComponent } from '../team-modal/team-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-list-team',
  templateUrl: './list-team.component.html',
  styleUrls: ['./list-team.component.css']
})
export class ListTeamComponent implements OnInit {

  teams: Team[] = [];

  constructor(
    private teamService: TeamService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.teams = this.listarTodos();
  }

  listarTodos(): Team[] {
    return this.teamService.listarTodos();
  }

  remover($event: any, team: Team): void {
    $event.preventDefault();
    if(confirm(`Deseja realmente remover a pessoa ${team.nome}?`)) {
      this.teamService.remover(team.id!);
      this.teams = this.listarTodos();
    }
  }

  openModal(team: Team) {
    const modalRef = this.modalService.open(TeamModalComponent);
    modalRef.componentInstance.team = team;
  }
}
