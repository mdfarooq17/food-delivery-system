import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    if (!this.email || !this.password) {
      this.errorMessage = 'Email and password are required';
      return;
    }

    this.authService.login(this.email, this.password);
    
    setTimeout(() => {
      const user = this.authService.currentUserValue;
      if (user) {
        if (user.role === 'admin') {
          this.router.navigate(['/admin']);
        } else if (user.role === 'customer') {
          this.router.navigate(['/customer']);
        } else if (user.role === 'restaurant') {
          this.router.navigate(['/restaurant']);
        }
      }
    }, 500);
  }
}