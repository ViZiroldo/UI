import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './auth/services/login.service';
import { User } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tournament Manager';

  constructor(
    private router: Router,
    private loginServie: LoginService
  ) {}

  get userLogged(): User | null {
    return this.loginServie.userLogged;
  }

  logout() {
    this.loginServie.logout();
    this.router.navigate(['/login']);
  }
}
