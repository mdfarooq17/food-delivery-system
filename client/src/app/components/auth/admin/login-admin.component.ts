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
}
