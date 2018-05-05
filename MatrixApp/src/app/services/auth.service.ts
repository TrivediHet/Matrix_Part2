import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthUser } from '../models/authUser';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {

  baseUrl = environment.url + '/auth';

  constructor(private http: HttpClient, private jwtHelperService: JwtHelperService) { }

  login(user) {
    return this.http.post<AuthUser>(this.baseUrl + '/login', user)
      .map((result: AuthUser) => {
        if (result) {
          localStorage.setItem('token', result.tokenString);
          localStorage.setItem('user', JSON.stringify(result.user));
        }
        return result;
      });
  }

  logout() {
    localStorage.clear();
  }

  register(user) {
    const contentHeader = new HttpHeaders({ 'Content-type': 'application/json' });
    return this.http.post((this.baseUrl + '/register'), user, { headers: contentHeader });
  }
}
