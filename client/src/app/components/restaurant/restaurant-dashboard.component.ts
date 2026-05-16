import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RestaurantService } from '../../services/restaurant.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-restaurant-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './restaurant-dashboard.component.html',
  styleUrls: ['./restaurant-dashboard.component.css']
})
export class RestaurantDashboardComponent implements OnInit {
  restaurant: any = null;
  menuItems: any[] = [];
  orders: any[] = [];
  cities: any[] = [];
  showAddItemForm = false;
  showProfileForm = false;
  activeTab = 'orders';
  isEditing = false;
  editingItemId: string | null = null;
  
  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  newItem = {
    name: '',
    description: '',
    price: 0,
    category: '',
    image: ''
  };

  profileData = {
    name: '',
    description: '',
    address: '',
    city: '',
    phone: '',
    image: ''
  };

  constructor(
    private restaurantService: RestaurantService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadProfile();
    this.loadMenu();
    this.loadOrders();
    this.loadCities();
  }

  loadCities() {
    this.authService.getCities().subscribe({
      next: (data) => this.cities = data,
      error: (err) => console.error('Error loading cities', err)
    });
  }

  loadProfile() {
    this.restaurantService.getProfile().subscribe({
      next: (data) => {
        this.restaurant = data;
        this.profileData = { ...data };
      },
      error: (err) => console.error('Error loading profile', err)
    });
  }

  loadMenu() {
    this.restaurantService.getMenu().subscribe({
      next: (data) => this.menuItems = data,
      error: (err) => console.error('Error loading menu', err)
    });
  }

  loadOrders() {
    this.restaurantService.getOrders().subscribe({
      next: (data) => this.orders = data,
      error: (err) => console.error('Error loading orders', err)
    });
  }

  openAddItem() {
    this.isEditing = false;
    this.editingItemId = null;
    this.newItem = { name: '', description: '', price: 0, category: '', image: '' };
    this.showAddItemForm = true;
  }

  editMenuItem(item: any) {
    this.isEditing = true;
    this.editingItemId = item._id;
    this.newItem = { ...item };
    this.showAddItemForm = true;
  }

  saveMenuItem() {
    if (!this.newItem.name || !this.newItem.price || !this.newItem.category) {
      alert('Please fill all required fields');
      return;
    }

    if (this.isEditing && this.editingItemId) {
      this.restaurantService.updateMenuItem(this.editingItemId, this.newItem).subscribe({
        next: (response) => {
          const index = this.menuItems.findIndex(i => i._id === this.editingItemId);
          if (index !== -1) this.menuItems[index] = response;
          this.showAddItemForm = false;
          alert('Item updated successfully!');
        },
        error: (err) => alert('Error updating item')
      });
    } else {
      this.restaurantService.addMenuItem(this.newItem).subscribe({
        next: (response) => {
          this.menuItems.push(response);
          this.showAddItemForm = false;
          alert('Item added successfully!');
        },
        error: (err) => alert('Error adding item')
      });
    }
  }

  deleteMenuItem(id: string) {
    if (confirm('Are you sure you want to delete this item?')) {
      this.restaurantService.deleteMenuItem(id).subscribe({
        next: () => {
          this.menuItems = this.menuItems.filter(i => i._id !== id);
          alert('Item deleted!');
        },
        error: (err) => alert('Error deleting item')
      });
    }
  }

  updateProfile() {
    this.restaurantService.updateProfile(this.profileData).subscribe({
      next: (response) => {
        this.restaurant = response;
        this.showProfileForm = false;
        alert('Profile updated successfully!');
      },
      error: (err) => alert('Error updating profile')
    });
  }

  updateOrderStatus(order: any, event: any) {
    const newStatus = event.target.value;
    this.restaurantService.updateOrderStatus(order._id, newStatus).subscribe({
      next: () => {
        order.status = newStatus;
        alert('Status updated to ' + newStatus);
      },
      error: (err) => alert('Error updating status')
    });
  }

  calculateRevenue(): number {
    return this.orders.reduce((acc, order) => acc + (order.totalAmount || 0), 0);
  }

  logout() {
    this.authService.logout('restaurant');
    this.router.navigate(['/login/restaurant']);
  }
}