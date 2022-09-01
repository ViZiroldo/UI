import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Login, User } from 'src/app/shared';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const LS_CHAVE: string = "userLogged"
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  BASE_URL = "http://localhost:3000/user/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private httpCliente: HttpClient
  ) { }

  public get userLogged(): User {
    let usu = localStorage[LS_CHAVE];
    return (usu ? JSON.parse(localStorage[LS_CHAVE]) : null)
  }

  public set userLogged(user: User) {
    localStorage[LS_CHAVE] = JSON.stringify(user);
  }

  logout() {
    delete localStorage[LS_CHAVE];
  }

  login(login: Login): Observable<User | null> {

    let usu = new User(1, "Vinicios-Func", login.login, login.senha, "FUNC");

    if (login.login == login.senha) {
      if (login.login == "Vinicios-Admin") {
        usu = new User(1, "Vinicios-Admin", login.login, login.senha, "ADMIN");
      }
      else if (login.login == "Vinicios-Gerente") {
        usu = new User(1, "Vinicios-Gerente", login.login, login.senha, "GERENTE");
      }

      return of(usu);
    }
    else {
      return of(null);
    }

    // return this.httpCliente.post<User>(this.BASE_URL, login, this.httpOptions);
  }
}
