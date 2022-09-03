import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Function } from 'src/app/shared';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FunctionService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  getAll(): Observable<Function[]> {
    const apiUrl = `${environment.apiUrl}/api/Function/`;
    return this.httpClient.get<Function[]>(apiUrl, this.httpOptions);
  }

  getById(id: number): Observable<Function> {
    const apiUrl = `${environment.apiUrl}/api/Function/`;
    return this.httpClient.get<Function>(apiUrl + id, this.httpOptions);
  }

  insert(func: Function): Observable<Function> {
    const apiUrl = `${environment.apiUrl}/api/Function/`;
    return this.httpClient.post<Function>(apiUrl, JSON.stringify(func), this.httpOptions);
  }

  delete(id: number): Observable<Function> {
    const apiUrl = `${environment.apiUrl}/api/Function/`;
    return this.httpClient.delete<Function>(apiUrl + id, this.httpOptions);
  }

  update(func: Function): Observable<Function> {
    const apiUrl = `${environment.apiUrl}/api/Function/`;
    return this.httpClient.put<Function>(apiUrl + func.id, JSON.stringify(func), this.httpOptions);
  }
}
