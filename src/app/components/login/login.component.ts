import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { AuthResponse } from 'src/app/Interfaces/Auth-response';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements  OnInit{
  loginForm: FormGroup; // declaração da propriedade loginForm
  hide = true;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit() { }

  login(): void {
    const { username, password } = this.loginForm.value;
    this.authService.authenticate(username, password).subscribe(
      (response: AuthResponse) => {
        const token = response.access_token;
        this.authService.setToken(response);
        this.router.navigate(['/buscar']);
      }
    );
  }
}
