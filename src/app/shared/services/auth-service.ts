import { Injectable } from '@angular/core';
import * as constants from '../../../assets/json/constants.json';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private userToken = constants['USER_TOKEN'];

  constructor() { }

  login(userName: string, password: string): boolean {
    if (userName && password) {
      localStorage.setItem(this.userToken, Math.random().toString());
      this.isAuthenticated = true;
      return true;
    } else {
      return false;
    }
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  logout(): void {
    this.isAuthenticated = false;
    localStorage.removeItem(this.userToken);
  }
}
