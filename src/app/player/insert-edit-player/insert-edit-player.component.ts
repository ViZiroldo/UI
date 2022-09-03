import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from 'src/app/shared';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-insert-edit-player',
  templateUrl: './insert-edit-player.component.html',
  styleUrls: ['./insert-edit-player.component.css']
})
export class InsertEditPlayerComponent implements OnInit {
  @ViewChild('formPlayer') formPlayer!: NgForm;
  isNewPlayer: boolean = true;
  player: Player = new Player();
  id!: string;
  isLoading!: boolean;

  constructor(
    private playerService: PlayerService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.player = new Player();
    this.isLoading = false;

    this.id = this.route.snapshot.params['id'];
    this.isNewPlayer = !this.id;

    if (!this.isNewPlayer) {
      this.playerService.getById(+this.id).subscribe(
        player => {
          this.player = player;
          this.player.nome = "";
        }
      );
    }
  }

  save(): void {
    this.isLoading = true;
    if (this.formPlayer.form.valid) {
      if (this.isNewPlayer) {
        this.playerService.insert(this.player).subscribe(
          player => {
            this.isLoading = false;
            this.router.navigate(["/players"]);
          }
        )
      }
    }
    else {
      this.playerService.update(this.player).subscribe(
        player => {
          this.isLoading = false;
          this.router.navigate(["/players"]);
        }
      )
    }
    this.isLoading = false;
  }
}
