import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Group } from 'src/app/shared';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  getAll(): Observable<Group[]> {
    const apiUrl = `${environment.apiUrl}/api/Group/`;
    return this.httpClient.get<Group[]>(apiUrl, this.httpOptions);
  }

  getById(id: number): Observable<Group> {
    const apiUrl = `${environment.apiUrl}/api/Group/`;
    return this.httpClient.get<Group>(apiUrl + id, this.httpOptions);
  }

  insert(group: Group): Observable<Group> {
    const apiUrl = `${environment.apiUrl}/api/Group/`;
    return this.httpClient.post<Group>(apiUrl, JSON.stringify(group), this.httpOptions);
  }

  delete(id: number): Observable<Group> {
    const apiUrl = `${environment.apiUrl}/api/Group/`;
    return this.httpClient.delete<Group>(apiUrl + id, this.httpOptions);
  }

  update(group: Group): Observable<Group> {
    const apiUrl = `${environment.apiUrl}/api/Group/`;
    return this.httpClient.put<Group>(apiUrl + group.id, JSON.stringify(group), this.httpOptions);
  }
}
