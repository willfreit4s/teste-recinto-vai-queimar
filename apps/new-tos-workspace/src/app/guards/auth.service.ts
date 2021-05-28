import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}
  TOKEN_KEY: string = 'TOKEN';

  auth(user: string, pass: string): Observable<any> {
    return this.http.post<any>(environment.gateway.url, {
      module: 'LOGON',
      operation: 'LOGON',
      parameters: {
        username: user,
        password: pass,
        cod_gestao: 94522,
      },
    });
  }

  async isAuth() {
    return await this.http
      .post(
        environment.gateway.url,
        {
          module: 'M5000_ZUSUARIO',
          operation: 'getZus',
          parameters: {},
        },
        {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: `${this.getToken()}`,
          }),
        }
      )
      .toPromise();
  }

  setToken(token: string) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  getToken() {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  clearToken() {
    localStorage.setItem(this.TOKEN_KEY, '');
  }
}
