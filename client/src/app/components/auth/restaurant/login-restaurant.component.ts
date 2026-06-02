import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login-restaurant',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login-restaurant.component.html',
  styleUrls: ['../auth-shared.css']
})
export class LoginRestaurantComponent implements OnInit {
  email = '';
  password = '';
  isLoading = false;
  errorMessage = '';

  showForgotPassword = false;
  resetEmail = '';
  resetName = '';
  resetDob = '';
  resetSecurityQuestion = '';
  resetSecurityAnswer = '';
  resetPassword = '';
  resetConfirmPassword = '';
  resetMessage = '';
  resetError = '';
  isResetLoading = false;
  securityQuestions = [
    'What was the name of your first pet?',
    'What city were you born in?',
    "What is your mother's maiden name?",
    'What was the name of your first school?',
  ];

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

    this.authService.login(this.email, this.password).subscribe({
      next: (response: any) => {
        this.isLoading = false;
        if (response.user.role === 'restaurant') {
          this.router.navigate(['/restaurant']);
        } else {
          this.errorMessage = 'Access denied. Please use the correct login page for your role.';
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
    this.resetName = '';
    this.resetDob = '';
    this.resetSecurityQuestion = '';
    this.resetSecurityAnswer = '';
    this.resetPassword = '';
    this.resetConfirmPassword = '';
    if (this.showForgotPassword) {
      this.resetEmail = this.email || '';
    }
  }

  resetPassword() {
    if (
      !this.resetEmail ||
      !this.resetName ||
      !this.resetDob ||
      !this.resetSecurityQuestion ||
      !this.resetSecurityAnswer ||
      !this.resetPassword ||
      !this.resetConfirmPassword
    ) {
      this.resetError = 'All reset fields are required.';
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

    this.authService.resetPasswordWithSecurityInfo(
      this.resetEmail,
      this.resetName,
      this.resetDob,
      this.resetSecurityQuestion,
      this.resetSecurityAnswer,
      this.resetPassword,
    ).subscribe({
      next: (response: any) => {
        this.isResetLoading = false;
        this.resetMessage = response.message || 'Password reset successfully. Please log in with your new password.';
        this.resetError = '';
        this.showForgotPassword = false;
        this.resetEmail = '';
        this.resetName = '';
        this.resetDob = '';
        this.resetSecurityQuestion = '';
        this.resetSecurityAnswer = '';
        this.resetPassword = '';
        this.resetConfirmPassword = '';
      },
      error: (err: any) => {
        this.isResetLoading = false;
        this.resetError = err.error?.error || 'Could not reset password.';
        this.resetMessage = '';
      }
    });
  }
}
