import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';


  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    this.authService.authenticate(this.username, this.password).subscribe(
      (token) => {
        this.authService.setToken(token);
        this.router.navigate(['/buscar']);
      }
    );
  }

}
