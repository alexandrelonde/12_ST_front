import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { enviroment } from '../../enviroments/environment';
import { AuthResponse } from '../Interfaces/Auth-response';



@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient) { }

  authenticate(username: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(enviroment.apiUrl+'/usuario/login', { username, password });
  }

  setToken(tokenObj: AuthResponse): void {
    const token = tokenObj.access_token;
    localStorage.setItem('token', token);
  }
}
