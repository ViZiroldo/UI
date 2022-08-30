import { Time } from '@angular/common';
import { Injectable } from '@angular/core';
import { timestamp } from 'rxjs';
import { Team } from 'src/app/shared/models/team.model';


const LS_CHAVE: string ="teams"

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor() { }

  listarTodos(): Team[] {
    const times = localStorage[LS_CHAVE];
    return times ? JSON.parse(times) : [];
  }

  inserir(team: Team): void {
    const times = this.listarTodos();
    team.id = new Date().getTime();
    times.push(team);
    localStorage[LS_CHAVE] = JSON.stringify(times);
  }

  buscarPorId(id : number): Team | undefined {
     const times: Team[] = this.listarTodos();
     return times.find( times => times.id === id);
  }

  atualizar(team: Team): void {
    const times: Team[] = this.listarTodos();

    times.forEach(
      (obj, index, objs) => {
        if (team.id === obj.id) {
          objs[index] = team;
        }
      }
    );
    localStorage[LS_CHAVE] = JSON.stringify(times);
  }

  remover(id: number): void {
    let times: Team[] = this.listarTodos();
    times = times.filter( team => team.id !== id);
    localStorage[LS_CHAVE] = JSON.stringify(times);
  }
}
