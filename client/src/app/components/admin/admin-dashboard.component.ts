import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  stats: any = {
    totalUsers: 0,
    totalRestaurants: 0,
    totalOrders: 0,
    totalRevenue: 0
  };
  
  users: any[] = [];
  restaurants: any[] = [];
  orders: any[] = [];
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
  }

  loadStats() {
    this.adminService.getDashboardStats().subscribe(
      (data: any) => {
        this.stats = data;
      },
      (error: any) => {
        console.error('Error loading stats', error);
      }
    );
  }

  loadUsers() {
    this.adminService.getAllUsers().subscribe(
      (data: any) => {
        this.users = data;
      },
      (error: any) => {
        console.error('Error loading users', error);
      }
    );
  }

  loadRestaurants() {
    this.adminService.getAllRestaurants().subscribe(
      (data: any) => {
        this.restaurants = data;
      },
      (error: any) => {
        console.error('Error loading restaurants', error);
      }
    );
  }

  loadOrders() {
    this.adminService.getAllOrders().subscribe(
      (data: any) => {
        this.orders = data;
      },
      (error: any) => {
        console.error('Error loading orders', error);
      }
    );
  }

  updateRestaurantStatus(restaurant: any, isActive: boolean) {
    this.adminService.updateRestaurantStatus(restaurant._id, isActive).subscribe(
      (response: any) => {
        restaurant.isActive = isActive;
        alert('Restaurant status updated!');
      },
      (error: any) => {
        alert('Error updating restaurant: ' + error.error.error);
      }
    );
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}