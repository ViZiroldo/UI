import { Injectable } from '@angular/core';
import { Player } from 'src/app/shared';

const LS_CHAVE: string ="players"

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor() { }

  listarTodos(): Player[] {
    const players = localStorage[LS_CHAVE];
    return players ? JSON.parse(players) : [];
  }

  inserir(player: Player): void {
    const players = this.listarTodos();
    player.id = new Date().getTime();
    players.push(player);
    localStorage[LS_CHAVE] = JSON.stringify(players);
  }

  buscarPorId(id : number): Player | undefined {
     const players: Player[] = this.listarTodos();
     return players.find( players => players.id === id);
  }

  atualizar(player: Player): void {
    const players: Player[] = this.listarTodos();

    players.forEach(
      (obj, index, objs) => {
        if (player.id === obj.id) {
          objs[index] = player;
        }
      }
    );
    localStorage[LS_CHAVE] = JSON.stringify(players);
  }

  remover(id: number): void {
    let players: Player[] = this.listarTodos();
    players = players.filter( player => player.id !== id);
    localStorage[LS_CHAVE] = JSON.stringify(players);
  }
}
