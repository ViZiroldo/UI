import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from 'src/app/shared';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  getAll(): Observable<Player[]> {
    const apiUrl = `${environment.apiUrl}/api/Player/`;
    return this.httpClient.get<Player[]>(apiUrl, this.httpOptions);
  }

  getById(id: number): Observable<Player> {
    const apiUrl = `${environment.apiUrl}/api/Player/`;
    return this.httpClient.get<Player>(apiUrl + id, this.httpOptions);
  }

  insert(player: Player): Observable<Player> {
    const apiUrl = `${environment.apiUrl}/api/Player/`;
    return this.httpClient.post<Player>(apiUrl, JSON.stringify(player), this.httpOptions);
  }

  delete(id: number): Observable<Player> {
    const apiUrl = `${environment.apiUrl}/api/Player/`;
    return this.httpClient.delete<Player>(apiUrl + id, this.httpOptions);
  }

  update(player: Player): Observable<Player> {
    const apiUrl = `${environment.apiUrl}/api/Player/`;
    return this.httpClient.put<Player>(apiUrl + player.id, JSON.stringify(player), this.httpOptions);
  }
}
