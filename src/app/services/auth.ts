import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = false;

  private role = 'guest';

  login(role: string = 'customer') {

    this.loggedIn = true;

    this.role = role;

    localStorage.setItem(
      'loggedIn',
      'true'
    );

    localStorage.setItem(
      'role',
      role
    );
  }

  logout() {

    this.loggedIn = false;

    this.role = 'guest';

    localStorage.clear();
  }

  isLoggedIn(): boolean {

    return localStorage.getItem(
      'loggedIn'
    ) === 'true';
  }

  getUserRole(): string {

    return localStorage.getItem(
      'role'
    ) || 'guest';
  }
}