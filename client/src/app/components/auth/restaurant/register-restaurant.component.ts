import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register-restaurant',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register-restaurant.component.html',
  styleUrls: ['../auth-shared.css']
})
export class RegisterRestaurantComponent implements OnInit {
  name = '';
  email = '';
  password = '';
  confirmPassword = '';
  city = '';
  cities: any[] = [];
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
    if (!this.name || !this.email || !this.password || !this.confirmPassword || !this.city) {
      this.errorMessage = 'All fields are required';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    this.authService.register(this.name, this.email, this.password, 'restaurant', this.city).subscribe({
      next: (response: any) => {
        this.isLoading = false;
        this.successMessage = 'Partner registration successful! Welcome to the family.';
        setTimeout(() => this.router.navigate(['/login/restaurant']), 2000);
      },
      error: (err: any) => {
        this.isLoading = false;
        this.errorMessage = err?.error?.error || 'Registration failed';
      }
    });
  }
}
