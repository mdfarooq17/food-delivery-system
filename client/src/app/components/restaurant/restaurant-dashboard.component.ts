import { Component, OnInit, OnDestroy } from '@angular/core';
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
export class RestaurantDashboardComponent implements OnInit, OnDestroy {
  restaurant: any = null;
  menuItems: any[] = [];
  orders: any[] = [];
  cities: any[] = [];
  categories: any[] = [];
  showAddItemForm = false;
  showProfileForm = false;
  activeTab = 'dashboard';
  today = new Date();
  isEditing = false;
  editingItemId: string | null = null;
  
  alertedOrderIds: Set<string> = new Set();
  incomingOrderAlert: any = null;
  selectedOrderDetails: any = null;

  showItemReviewsModal = false;
  selectedReviewItem: any = null;
  itemReviews: any[] = [];

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

  pollingInterval: any;

  ngOnInit() {
    this.loadProfile();
    this.loadMenu();
    this.loadOrders();
    this.loadCities();
    this.loadCategories();
    this.startPolling();
  }

  ngOnDestroy() {
    this.stopPolling();
  }

  startPolling() {
    this.pollingInterval = setInterval(() => {
      this.loadOrders();
    }, 5000);
  }

  stopPolling() {
    if (this.pollingInterval) {
      clearInterval(this.pollingInterval);
    }
  }

  loadCities() {
    this.authService.getCities().subscribe({
      next: (data) => this.cities = data,
      error: (err) => console.error('Error loading cities', err)
    });
  }

  loadCategories() {
    this.authService.getCategories().subscribe({
      next: (data) => this.categories = data,
      error: (err) => console.error('Error loading categories', err)
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
      next: (data) => {
        this.orders = data;
        this.checkForNewOrders();
      },
      error: (err) => console.error('Error loading orders', err)
    });
  }

  checkForNewOrders() {
    const pendingOrders = this.orders.filter(o => o.status === 'pending');
    for (const order of pendingOrders) {
      if (!this.alertedOrderIds.has(order._id)) {
        this.incomingOrderAlert = order;
        this.alertedOrderIds.add(order._id);
        
        try {
          const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-500.wav');
          audio.volume = 0.5;
          audio.play();
        } catch (e) {
          console.log('Audio autoplay blocked or unsupported');
        }
        break;
      }
    }
  }

  acceptIncomingOrder() {
    if (!this.incomingOrderAlert) return;
    this.acceptAndPrepare(this.incomingOrderAlert);
    this.incomingOrderAlert = null;
  }

  rejectIncomingOrder() {
    if (!this.incomingOrderAlert) return;
    this.rejectOrder(this.incomingOrderAlert);
    this.incomingOrderAlert = null;
  }

  dismissIncomingAlert() {
    this.incomingOrderAlert = null;
  }

  viewOrderDetails(order: any) {
    this.selectedOrderDetails = order;
  }

  closeOrderDetails() {
    this.selectedOrderDetails = null;
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

  viewItemReviews(item: any) {
    this.selectedReviewItem = item;
    this.restaurantService.getItemReviews(item._id).subscribe({
      next: (reviews) => {
        this.itemReviews = reviews;
        this.showItemReviewsModal = true;
      },
      error: (err) => alert('Error loading reviews')
    });
  }

  closeItemReviews() {
    this.showItemReviewsModal = false;
    this.selectedReviewItem = null;
    this.itemReviews = [];
  }

  updateProfile() {
    this.restaurantService.updateProfile(this.profileData).subscribe({
      next: (response) => {
        this.restaurant = response;
        this.profileData = { ...response };
        this.showProfileForm = false;
        alert('Profile updated successfully!');
      },
      error: (err) => alert('Error updating profile')
    });
  }

  acceptAndPrepare(order: any) {
    this.restaurantService.updateOrderStatus(order._id, 'preparing').subscribe({
      next: () => {
        order.status = 'preparing';
        alert('Order accepted and preparing. Rider will be notified.');
      },
      error: (err) => alert('Error accepting order')
    });
  }

  rejectOrder(order: any) {
    const reason = prompt('Please enter a reason for rejecting this order:');
    if (reason === null) return;
    this.restaurantService.updateOrderStatus(order._id, 'cancelled').subscribe({
      next: () => {
        order.status = 'cancelled';
        alert('Order rejected.');
      },
      error: (err) => alert('Error rejecting order')
    });
  }

  markAsReady(order: any) {
    this.restaurantService.updateOrderStatus(order._id, 'ready').subscribe({
      next: () => {
        order.status = 'ready';
        alert('Order marked as ready for pickup.');
      },
      error: (err) => alert('Error marking order as ready')
    });
  }

  dispatchRiderManually(order: any) {
    this.restaurantService.dispatchRider(order._id).subscribe({
      next: (res: any) => {
        alert(res.message || 'Rider request sent successfully!');
        this.loadOrders();
      },
      error: (err) => alert(err.error?.error || 'Failed to dispatch rider')
    });
  }

  calculateRevenue(): number {
    return this.orders
      .filter(o => o.status === 'delivered')
      .reduce((acc, order) => acc + (order.totalAmount || 0), 0);
  }

  getDeliveredCount(): number {
    return this.orders.filter(o => o.status === 'delivered').length;
  }

  getCancelledCount(): number {
    return this.orders.filter(o => o.status === 'cancelled').length;
  }

  logout() {
    this.authService.logout('restaurant');
    this.router.navigate(['/login/restaurant']);
  }
}