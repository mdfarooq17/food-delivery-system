import { Component, OnInit } from '@angular/core';
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
export class LoginCustomerComponent implements OnInit {
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

  ngOnInit() {
    const user = this.authService.currentUserValue;
    if (user) {
      this.redirectUser(user.role);
    }
  }

  private redirectUser(role: string) {
    if (role === 'admin') {
      this.router.navigate(['/admin']);
    } else if (role === 'restaurant') {
      this.router.navigate(['/restaurant']);
    } else if (role === 'rider') {
      this.router.navigate(['/rider']);
    } else {
      this.router.navigate(['/customer']);
    }
  }

  onSubmit() {
    if (!this.loginData.email || !this.loginData.password) {
      alert('Please fill in all fields');
      return;
    }

    this.isLoading = true;

    this.authService.login(this.loginData.email, this.loginData.password).subscribe(
      (response: any) => {
        this.isLoading = false;
        const role = response?.user?.role || response?.role;
        this.redirectUser(role);
      },
      (error: any) => {
        this.isLoading = false;
        alert('Login failed: ' + (error.error?.error || 'Unknown error'));
      }
    );
  }
}