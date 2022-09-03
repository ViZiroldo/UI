import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tournament } from 'src/app/shared';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  getAll(): Observable<Tournament[]> {
    const apiUrl = `${environment.apiUrl}/api/Tournament/`;
    return this.httpClient.get<Tournament[]>(apiUrl, this.httpOptions);
  }

  getById(id: number): Observable<Tournament> {
    const apiUrl = `${environment.apiUrl}/api/User/`;
    return this.httpClient.get<Tournament>(apiUrl + id, this.httpOptions);
  }

  insert(user: Tournament): Observable<Tournament> {
    const apiUrl = `${environment.apiUrl}/api/User/`;
    return this.httpClient.post<Tournament>(apiUrl, JSON.stringify(user), this.httpOptions);
  }

  delete(id: number): Observable<Tournament> {
    const apiUrl = `${environment.apiUrl}/api/User/`;
    return this.httpClient.delete<Tournament>(apiUrl + id, this.httpOptions);
  }

  update(user: Tournament): Observable<Tournament> {
    const apiUrl = `${environment.apiUrl}/api/User/`;
    return this.httpClient.put<Tournament>(apiUrl + user.id, JSON.stringify(user), this.httpOptions);
  }
}
