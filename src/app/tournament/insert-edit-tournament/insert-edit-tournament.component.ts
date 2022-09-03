import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tournament } from 'src/app/shared';
import { TournamentService } from '../services/tournament.service';

@Component({
  selector: 'app-insert-edit-tournament',
  templateUrl: './insert-edit-tournament.component.html',
  styleUrls: ['./insert-edit-tournament.component.css']
})
export class InsertEditTournamentComponent implements OnInit {
@ViewChild('formTournament') formTournament!: NgForm;
isNewTournament: boolean = true;
tournament: Tournament = new Tournament();
id!: string;
isLoading!: boolean;

  constructor(
    private tournamentService: TournamentService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.tournament = new Tournament();
    this.isLoading = false;

    this.id = this.route.snapshot.params['id'];
    this.isNewTournament = !this.id;

    if (!this.isNewTournament) {
      this.tournamentService.getById(+this.id).subscribe(
        tournament => {
          this.tournament = tournament;
          this.tournament.nome = "";
        }
      );
    }
  }

  save(): void {
    this.isLoading = true;
    if (this.formTournament.form.valid) {
      if (this.isNewTournament) {
        this.tournamentService.insert(this.tournament).subscribe(
          tournament => {
            this.isLoading = false;
            this.router.navigate(["/tournament"]);
          }
        )
      }
    }
    else {
      this.tournamentService.update(this.tournament).subscribe(
        tournament => {
          this.isLoading = false;
          this.router.navigate(["/tournament"]);
        }
      )
    }
    this.isLoading = false;
  }
}
