import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register-customer',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register-customer.component.html',
  styleUrls: ['../auth-shared.css']
})
export class RegisterCustomerComponent implements OnInit {
  name = '';
  email = '';
  password = '';
  confirmPassword = '';
  city = '';
  dateOfBirth = '';
  securityQuestion = '';
  securityAnswer = '';
  cities: any[] = [];
  securityQuestions = [
    'What was the name of your first pet?',
    'What city were you born in?',
    "What is your mother's maiden name?",
    'What was the name of your first school?',
  ];
  errorMessage = '';
  successMessage = '';
  isLoading = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.loadCities();
  }

  loadCities() {
    this.authService.getCities().subscribe({
      next: (data) => this.cities = data,
      error: (err) => console.error('Error loading cities', err)
    });
  }

  register() {
    if (
      !this.name ||
      !this.email ||
      !this.password ||
      !this.confirmPassword ||
      !this.city ||
      !this.dateOfBirth ||
      !this.securityQuestion ||
      !this.securityAnswer
    ) {
      this.errorMessage = 'All fields are required';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    this.authService
      .register(
        this.name,
        this.email,
        this.password,
        'customer',
        this.city,
        this.dateOfBirth,
        this.securityQuestion,
        this.securityAnswer,
      )
      .subscribe({
        next: (response: any) => {
          this.isLoading = false;
          this.successMessage = 'Account created successfully! Get ready to order.';
          setTimeout(() => this.router.navigate(['/login/customer']), 2000);
        },
        error: (err: any) => {
          this.isLoading = false;
          this.errorMessage = err?.error?.error || 'Registration failed';
        }
      });
  }
}
