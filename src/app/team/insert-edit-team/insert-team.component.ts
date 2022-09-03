import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Team } from 'src/app/shared';
import { TeamService } from '../services/team.service';

@Component({
  selector: 'app-insert-team',
  templateUrl: './insert-team.component.html',
  styleUrls: ['./insert-team.component.css']
})
export class InsertEditTeamComponent implements OnInit {
  @ViewChild('formTeam') formTeam!: NgForm;
  isNewTeam: boolean = true;
  team: Team = new Team();
  id!: string;
  isLoading!: boolean;

    constructor(
      private teamService: TeamService,
      private route: ActivatedRoute,
      private router: Router
    ) { }

    ngOnInit(): void {
      this.team = new Team();
      this.isLoading = false;

      this.id = this.route.snapshot.params['id'];
      this.isNewTeam = !this.id;

      if (!this.isNewTeam) {
        this.teamService.getById(+this.id).subscribe(
          team => {
            this.team = team;
            this.team.nome = "";
          }
        );
      }
    }

    save(): void {
      this.isLoading = true;
      if (this.formTeam.form.valid) {
        if (this.isNewTeam) {
          this.teamService.insert(this.team).subscribe(
            team => {
              this.isLoading = false;
              this.router.navigate(["/teams"]);
            }
          )
        }
      }
      else {
        this.teamService.update(this.team).subscribe(
          team => {
            this.isLoading = false;
            this.router.navigate(["/teams"]);
          }
        )
      }
      this.isLoading = false;
    }
}
