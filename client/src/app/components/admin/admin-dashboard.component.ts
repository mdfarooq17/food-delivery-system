import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit, OnDestroy {
  private timeoutId: any;
  private readonly INACTIVITY_TIME = 10 * 60 * 1000; // 10 Minutes
  stats: any = {
    totalUsers: 0,
    totalRestaurants: 0,
    totalOrders: 0,
    totalRevenue: 0
  };
  
  users: any[] = [];
  restaurants: any[] = [];
  orders: any[] = [];
  cities: any[] = [];
  newCityName = '';
  activeTab = 'stats';

  constructor(
    private adminService: AdminService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadStats();
    this.loadUsers();
    this.loadRestaurants();
    this.loadOrders();
    this.loadCities();
    this.resetTimer();
  }

  @HostListener('window:mousemove')
  @HostListener('window:mousedown')
  @HostListener('window:keypress')
  @HostListener('window:scroll')
  @HostListener('window:touchstart')
  resetTimer() {
    if (this.timeoutId) clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => {
      this.logoutOnTimeout();
    }, this.INACTIVITY_TIME);
  }

  logoutOnTimeout() {
    alert('Session expired due to 10 minutes of inactivity. Please login again.');
    this.logout();
  }

  ngOnDestroy() {
    if (this.timeoutId) clearTimeout(this.timeoutId);
  }

  loadStats() {
    this.adminService.getDashboardStats().subscribe({
      next: (data) => this.stats = data,
      error: (err) => console.error('Error loading stats', err)
    });
  }

  loadUsers() {
    this.adminService.getAllUsers().subscribe({
      next: (data) => this.users = data,
      error: (err) => console.error('Error loading users', err)
    });
  }

  loadRestaurants() {
    this.adminService.getAllRestaurants().subscribe({
      next: (data) => this.restaurants = data,
      error: (err) => console.error('Error loading restaurants', err)
    });
  }

  loadOrders() {
    this.adminService.getAllOrders().subscribe({
      next: (data) => this.orders = data,
      error: (err) => console.error('Error loading orders', err)
    });
  }

  loadCities() {
    this.adminService.getCities().subscribe({
      next: (data) => this.cities = data,
      error: (err) => console.error('Error loading cities', err)
    });
  }

  addCity() {
    if (!this.newCityName) return;
    this.adminService.addCity(this.newCityName).subscribe({
      next: (city) => {
        this.cities.push(city);
        this.newCityName = '';
        alert('City added!');
      },
      error: (err) => alert('Error adding city')
    });
  }

  toggleCityStatus(city: any) {
    this.adminService.updateCityStatus(city._id, !city.isActive).subscribe({
      next: (updated) => city.isActive = updated.isActive,
      error: (err) => alert('Error updating city')
    });
  }

  deleteCity(id: string) {
    if (confirm('Are you sure?')) {
      this.adminService.deleteCity(id).subscribe({
        next: () => this.cities = this.cities.filter(c => c._id !== id),
        error: (err) => alert('Error deleting city')
      });
    }
  }

  updateRestaurantStatus(restaurant: any, isActive: boolean) {
    this.adminService.updateRestaurantStatus(restaurant._id, isActive).subscribe({
      next: () => restaurant.isActive = isActive,
      error: (err) => alert('Error updating restaurant')
    });
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  logout() {
    this.authService.logout('admin');
    this.router.navigate(['/login/admin']);
  }
}