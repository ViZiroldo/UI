import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/shared/models/team.model';
import { TeamService } from '../services/team.service';

@Component({
  selector: 'app-list-team',
  templateUrl: './list-team.component.html',
  styleUrls: ['./list-team.component.css']
})
export class ListTeamComponent implements OnInit {

  teams: Team[] = [];

  constructor(
    private teamService: TeamService
  ) { }

  ngOnInit(): void {
    this.teams = this.listarTodos();
  }

  listarTodos(): Team[] {
    return this.teamService.listarTodos();
  }

}
