import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  constructor() {}

  public setRoles(roles: []) {
    localStorage.setItem('roles', JSON.stringify(roles));
  }

  public getRoles(): any {
    const roles = localStorage.getItem('roles');
    return roles ? JSON.parse(roles) : null;
  }

  public setToken(jwtToken: string) {
    localStorage.setItem('jwtToken', jwtToken);
  }

  public getToken(): any {
    const token = localStorage.getItem('jwtToken');
    return token ? token : null; // return null if token is not found
  }

  public clear() {
    localStorage.clear();
  }

  public isUserLoggedIn(): boolean {
    const isUserLoggedIn = this.getToken() && this.getRoles();

    return isUserLoggedIn;
  }
}
