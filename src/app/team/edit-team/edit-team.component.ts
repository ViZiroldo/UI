import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Team } from 'src/app/shared';
import { TeamService } from '../services/team.service';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {

  @ViewChild("formTeam") formTeam!: NgForm
  team!: Team;

  constructor(
    private teamService: TeamService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    const res = this.teamService.buscarPorId(id);
    if (res !== undefined){
      this.team = res;
    }
    else {
      throw new Error("Time nao encontrado: id =" + id)
    }
  }

  atualizar():void {
    if (this.formTeam.form.valid) {
      this.teamService.atualizar(this.team);
      this.router.navigate(['/teams']);
    }
  }
}
