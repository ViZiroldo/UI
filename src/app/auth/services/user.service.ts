import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  getAll(): Observable<User[]> {
    const apiUrl = `${environment.apiUrl}/api/User/`;
    return this.httpClient.get<User[]>(apiUrl, this.httpOptions);
  }

  getById(id: number): Observable<User> {
    const apiUrl = `${environment.apiUrl}/api/User/`;
    return this.httpClient.get<User>(apiUrl+ id, this.httpOptions);
  }

  insert(user: User): Observable<User> {
    const apiUrl = `${environment.apiUrl}/api/User/`;
    return this.httpClient.post<User>(apiUrl, JSON.stringify(user), this.httpOptions);
  }

  delete(id: number): Observable<User> {
    const apiUrl = `${environment.apiUrl}/api/User/`;
    return this.httpClient.delete<User>(apiUrl + id, this.httpOptions);
  }

  update(user: User): Observable<User> {
    const apiUrl = `${environment.apiUrl}/api/User/`;
    return this.httpClient.put<User>(apiUrl + user.id, JSON.stringify(user), this.httpOptions);
  }
}
