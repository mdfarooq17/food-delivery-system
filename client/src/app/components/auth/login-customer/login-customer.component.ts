import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-customer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-customer.component.html',
  styleUrl: './login-customer.component.css'
})
export class LoginCustomerComponent {
  loginData = {
    email: '',
    password: ''
  };
  rememberMe = false;
  isLoading = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  onSubmit() {
    if (!this.loginData.email || !this.loginData.password) {
      alert('Please fill in all fields');
      return;
    }

    this.isLoading = true;

    this.authService.login(this.loginData.email, this.loginData.password).subscribe(
      (response: any) => {
        this.isLoading = false;
        if (response && response.token) {
          // TODO: Store token and user info
          this.router.navigate(['/customer']);
        }
      },
      (error: any) => {
        this.isLoading = false;
        alert('Login failed: ' + (error.error?.error || 'Unknown error'));
      }
    );
  }
}
