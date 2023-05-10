import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '12_ST_front';

  isLoggedIn$: Observable<boolean>;
  authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
    this.isLoggedIn$ = authService.isLoggedIn$;
  }

}
