import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-customer',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login-customer.component.html',
  styleUrls: ['./login-customer.component.css']
})
export class LoginCustomerComponent implements OnInit {
  loginData = {
    email: '',
    password: ''
  };
  rememberMe = false;
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
      this.errorMessage = 'Please fill in all fields';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    this.authService.login(this.loginData.email, this.loginData.password).subscribe({
      next: (response: any) => {
        this.isLoading = false;
        const role = response?.user?.role || response?.role;
        this.redirectUser(role);
      },
      error: (error: any) => {
        this.isLoading = false;
        this.errorMessage = error.error?.error || 'Login failed. Please check your credentials.';
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
      this.resetEmail = this.loginData.email || '';
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

    this.authService
      .resetPasswordWithSecurityInfo(
        this.resetEmail,
        this.resetName,
        this.resetDob,
        this.resetSecurityQuestion,
        this.resetSecurityAnswer,
        this.resetPassword,
      )
      .subscribe({
        next: (response: any) => {
          this.isResetLoading = false;
          this.resetMessage =
            response.message ||
            'Password reset successfully. Please log in with your new password.';
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
        error: (error: any) => {
          this.isResetLoading = false;
          this.resetError = error.error?.error || 'Could not reset password.';
          this.resetMessage = '';
        },
      });
  }
}