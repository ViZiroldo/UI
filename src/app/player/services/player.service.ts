import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from 'src/app/shared';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  BASE_URL = "http://localhost:3000/user/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  getAll(): Observable<Player[]> {
    return this.httpClient.get<Player[]>(this.BASE_URL, this.httpOptions);
  }

  getById(id: number): Observable<Player> {
    return this.httpClient.get<Player>(this.BASE_URL + id, this.httpOptions);
  }

  insert(player: Player): Observable<Player> {
    return this.httpClient.post<Player>(this.BASE_URL, JSON.stringify(player), this.httpOptions);
  }

  delete(id: number): Observable<Player> {
    return this.httpClient.delete<Player>(this.BASE_URL + id, this.httpOptions);
  }

  update(player: Player): Observable<Player> {
    return this.httpClient.put<Player>(this.BASE_URL + player.id, JSON.stringify(player), this.httpOptions);
  }
}
