import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Player } from 'src/app/shared';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-list-player',
  templateUrl: './list-player.component.html',
  styleUrls: ['./list-player.component.css']
})
export class ListPlayerComponent implements OnInit {

  players: Player[] = [];

  constructor(
    private playerService: PlayerService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.players = [];
    this.getAll();
  }

  getAll(): Player[] {
    this.playerService.getAll().subscribe({
      next: (data: Player[]) => {
        if (data == null) {
          this.players = [];
        }
        else {
          this.players = data;
        }
      }
    });
    return this.players;
  }

  delete($event: any, player: Player): void {
    $event.preventDefault();
    if (confirm('Deseja realmente remover o player "' + player.nome + '"?')) {
      this.playerService.delete(player.id!).subscribe({
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
