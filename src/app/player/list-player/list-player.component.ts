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
    this.players = this.listarTodos();
  }

  listarTodos(): Player[] {
    return this.playerService.listarTodos();
  }

  remover($event: any, player: Player): void {
    $event.preventDefault();
    if(confirm(`Deseja realmente remover a pessoa ${player.nome}?`)) {
      this.playerService.remover(player.id!);
      this.players = this.listarTodos();
    }
  }


  // openModal(player: Player) {
  //   const modalRef = this.modalService.open(UserModalComponent);
  //   modalRef.componentInstance.player = player;
  // }
}
