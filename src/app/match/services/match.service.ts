import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Match } from 'src/app/shared';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  BASE_URL = "http://localhost:3000/user/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  getAll(): Observable<Match[]> {
    return this.httpClient.get<Match[]>(this.BASE_URL, this.httpOptions);
  }

  getById(id: number): Observable<Match> {
    return this.httpClient.get<Match>(this.BASE_URL + id, this.httpOptions);
  }

  insert(match: Match): Observable<Match> {
    return this.httpClient.post<Match>(this.BASE_URL, JSON.stringify(match), this.httpOptions);
  }

  delete(id: number): Observable<Match> {
    return this.httpClient.delete<Match>(this.BASE_URL + id, this.httpOptions);
  }

  update(match: Match): Observable<Match> {
    return this.httpClient.put<Match>(this.BASE_URL + match.id, JSON.stringify(match), this.httpOptions);
  }
}
