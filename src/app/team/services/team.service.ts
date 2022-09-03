import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from 'src/app/shared';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  getAll(): Observable<Team[]> {
    const apiUrl = `${environment.apiUrl}/api/Team/`;
    return this.httpClient.get<Team[]>(apiUrl, this.httpOptions);
  }

  getById(id: number): Observable<Team> {
    const apiUrl = `${environment.apiUrl}/api/Team/`;
    return this.httpClient.get<Team>(apiUrl+ id, this.httpOptions);
  }

  insert(team: Team): Observable<Team> {
    const apiUrl = `${environment.apiUrl}/api/Team/`;
    return this.httpClient.post<Team>(apiUrl, JSON.stringify(team), this.httpOptions);
  }

  delete(id: number): Observable<Team> {
    const apiUrl = `${environment.apiUrl}/api/Team/`;
    return this.httpClient.delete<Team>(apiUrl + id, this.httpOptions);
  }

  update(team: Team): Observable<Team> {
    const apiUrl = `${environment.apiUrl}/api/Team/`;
    return this.httpClient.put<Team>(apiUrl + team.id, JSON.stringify(team), this.httpOptions);
  }
}
