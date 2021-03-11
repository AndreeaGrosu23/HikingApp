import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { from } from 'rxjs';

export interface User {
  name?: string;
  username?: string;
  email?: string;
  password?: string;
  passwordConfirm?: string;
}
export interface LoginForm {
  email: string;
  password: string;
};
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(loginForm: LoginForm) {

    return from(this.http.post<any>('/api/users/login', {email: loginForm.email, password: loginForm.password})).pipe(
      map((token) => {
        localStorage.setItem('jwt-token', token.access_token);
        return token;
      })
    )
  }

  register(user) {
    return this.http.post<any>('/api/users/', user).pipe(
      map(user => user)
    )
  }
}
