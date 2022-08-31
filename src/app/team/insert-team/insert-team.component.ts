import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Team } from 'src/app/shared';
import { TeamService } from '../services/team.service';

@Component({
  selector: 'app-insert-team',
  templateUrl: './insert-team.component.html',
  styleUrls: ['./insert-team.component.css']
})
export class InsertTeamComponent implements OnInit {

  @ViewChild ('formTeam') formTeam!: NgForm;
  team! : Team;

  constructor(
    private teamService: TeamService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.team = new Team();
  }

  inserir(): void {
    if (this.formTeam.form.value) {
      this.teamService.inserir(this.team);
      this.router.navigate(["/teams"])
    }
  }
}
