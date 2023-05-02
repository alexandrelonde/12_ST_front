import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { enviroment } from '../../enviroments/environment';



@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient) { }

  authenticate(username: string, password: string): Observable<string> {
    return this.http.post<string>(enviroment.apiUrl+'/usuario/login', { username, password });
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }
}
