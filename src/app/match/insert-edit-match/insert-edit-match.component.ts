import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Match } from 'src/app/shared';
import { MatchService } from '../services/match.service';

@Component({
  selector: 'app-insert-edit-match',
  templateUrl: './insert-edit-match.component.html',
  styleUrls: ['./insert-edit-match.component.css']
})
export class InsertEditMatchComponent implements OnInit {
  @ViewChild('formMatch') formMatch!: NgForm;
  isNewMatch: boolean = true;
  match: Match = new Match();
  id!: string;
  isLoading!: boolean;

  constructor(
    private matchService: MatchService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.match = new Match();
    this.isLoading = false;

    this.id = this.route.snapshot.params['id'];
    this.isNewMatch = !this.id;

    if (!this.isNewMatch) {
      this.matchService.getById(+this.id).subscribe(
        match => {
          this.match = match;
          this.match.nome = "";
        }
      );
    }
  }

  save(): void {
    this.isLoading = true;
    if (this.formMatch.form.valid) {
      if (this.isNewMatch) {
        this.matchService.insert(this.match).subscribe(
          match => {
            this.isLoading = false;
            this.router.navigate(["/matchs"]);
          }
        )
      }
    }
    else {
      this.matchService.update(this.match).subscribe(
        match => {
          this.isLoading = false;
          this.router.navigate(["/matchs"]);
        }
      )
    }
    this.isLoading = false;
  }
}
