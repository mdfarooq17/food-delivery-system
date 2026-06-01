import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login-admin',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login-admin.component.html',
  styleUrls: ['../auth-shared.css']
})
export class LoginAdminComponent implements OnInit {
  email = '';
  password = '';
  isLoading = false;
  errorMessage = '';

  showForgotPassword = false;
  resetEmail = '';
  resetPassword = '';
  resetConfirmPassword = '';
  resetMessage = '';
  resetError = '';
  isResetLoading = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    const user = this.authService.currentUserValue;
    if (user) {
      if (user.role === 'admin') this.router.navigate(['/admin']);
      else if (user.role === 'restaurant') this.router.navigate(['/restaurant']);
      else if (user.role === 'rider') this.router.navigate(['/rider']);
      else this.router.navigate(['/customer']);
    }
  }

  login() {
    if (!this.email || !this.password) {
      this.errorMessage = 'Email and password are required';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    this.authService.login(this.email, this.password, 'admin').subscribe({
      next: (response: any) => {
        this.isLoading = false;
        if (response.user.role === 'admin') {
          this.router.navigate(['/admin']);
        } else {
          this.errorMessage = 'Access denied. Administrator login only.';
          this.authService.logout();
        }
      },
      error: (err: any) => {
        this.isLoading = false;
        this.errorMessage = err?.error?.error || 'Login failed';
      }
    });
  }

  toggleForgotPassword(event: Event) {
    event.preventDefault();
    this.showForgotPassword = !this.showForgotPassword;
    this.resetError = '';
    this.resetMessage = '';
    if (this.showForgotPassword) {
      this.resetEmail = this.email || '';
    }
  }

  requestPasswordReset() {
    if (!this.resetEmail || !this.resetPassword || !this.resetConfirmPassword) {
      this.resetError = 'Please fill in all fields for password reset.';
      this.resetMessage = '';
      return;
    }
    if (this.resetPassword !== this.resetConfirmPassword) {
      this.resetError = 'Passwords do not match.';
      this.resetMessage = '';
      return;
    }

    this.isResetLoading = true;
    this.resetError = '';
    this.resetMessage = '';

    this.authService
      .requestPasswordReset(this.resetEmail, this.resetPassword)
      .subscribe({
        next: (response: any) => {
          this.isResetLoading = false;
          this.resetMessage = response.message || 'Password reset request submitted.';
          this.resetError = '';
          this.resetEmail = '';
          this.resetPassword = '';
          this.resetConfirmPassword = '';
          this.showForgotPassword = false;
        },
        error: (err: any) => {
          this.isResetLoading = false;
          this.resetError = err.error?.error || 'Could not submit reset request.';
          this.resetMessage = '';
        }
      });
  }
}
