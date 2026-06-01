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
  resetPassword = '';
  resetConfirmPassword = '';
  resetMessage = '';
  resetError = '';
  isResetLoading = false;

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
    if (this.showForgotPassword) {
      this.resetEmail = this.loginData.email || '';
      if (this.resetEmail) {
        this.authService.getPasswordResetStatus(this.resetEmail).subscribe({
          next: (st: any) => {
            if (st && st.status && st.status !== 'none') {
              this.resetMessage = `Request status: ${st.status}`;
              if (st.adminMessages && st.adminMessages.length) {
                this.resetMessage += '\nAdmin notes: ' + st.adminMessages.map((m: any) => m.message).join(' | ');
              }
            } else {
              this.resetMessage = '';
            }
          }, error: () => {}
        });
      }
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
        error: (error: any) => {
          this.isResetLoading = false;
          this.resetError = error.error?.error || 'Could not submit reset request.';
          this.resetMessage = '';
        }
      });
  }
}