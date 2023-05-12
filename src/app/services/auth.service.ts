import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { enviroment } from '../../enviroments/environment';
import { AuthResponse } from '../Interfaces/Auth-response';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { of, from } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(this.hasToken());
  isLoggedIn$ = this._isLoggedIn$.asObservable();


  constructor(private http: HttpClient) { }

  authenticate(username: string, password: string): Observable<AuthResponse | string> {
    return this.http.post<AuthResponse>(enviroment.apiUrl+'/usuario/login', { username, password })
      .pipe(
        catchError(error => {
          if (error.status === 401) {
            return of('Usuário ou senha incorretos.');
          }
          return of(error.message);
        })
      );
  }

  setToken(tokenObj: AuthResponse): void {
    const token = tokenObj.access_token;
    localStorage.setItem('token', token);
    this.setLoggedIn(true);
  }

  setLoggedIn(loggedIn: boolean): void {
    this._isLoggedIn$.next(loggedIn);
  }

  logout(): void {
    localStorage.removeItem('token');
    this.setLoggedIn(false);
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }

}
