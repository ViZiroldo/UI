import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tournament } from 'src/app/shared';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  BASE_URL = "http://localhost:3000/user/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  getAll(): Observable<Tournament[]> {
    return this.httpClient.get<Tournament[]>(this.BASE_URL, this.httpOptions);
  }

  getById(id: number): Observable<Tournament> {
    return this.httpClient.get<Tournament>(this.BASE_URL + id, this.httpOptions);
  }

  insert(user: Tournament): Observable<Tournament> {
    return this.httpClient.post<Tournament>(this.BASE_URL, JSON.stringify(user), this.httpOptions);
  }

  delete(id: number): Observable<Tournament> {
    return this.httpClient.delete<Tournament>(this.BASE_URL + id, this.httpOptions);
  }

  update(user: Tournament): Observable<Tournament> {
    return this.httpClient.put<Tournament>(this.BASE_URL + user.id, JSON.stringify(user), this.httpOptions);
  }
}
