import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Match } from 'src/app/shared';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  getAll(): Observable<Match[]> {
    const apiUrl = `${environment.apiUrl}/api/Match/`;
    return this.httpClient.get<Match[]>(apiUrl, this.httpOptions);
  }

  getById(id: number): Observable<Match> {
    const apiUrl = `${environment.apiUrl}/api/Match/`;
    return this.httpClient.get<Match>(apiUrl + id, this.httpOptions);
  }

  insert(match: Match): Observable<Match> {
    const apiUrl = `${environment.apiUrl}/api/Match/`;
    return this.httpClient.post<Match>(apiUrl, JSON.stringify(match), this.httpOptions);
  }

  delete(id: number): Observable<Match> {
    const apiUrl = `${environment.apiUrl}/api/Match/`;
    return this.httpClient.delete<Match>(apiUrl + id, this.httpOptions);
  }

  update(match: Match): Observable<Match> {
    const apiUrl = `${environment.apiUrl}/api/Match/`;
    return this.httpClient.put<Match>(apiUrl + match.id, JSON.stringify(match), this.httpOptions);
  }
}
