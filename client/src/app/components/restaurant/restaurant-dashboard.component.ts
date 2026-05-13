import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../services/restaurant.service';

@Component({
  selector: 'app-restaurant-dashboard',
  templateUrl: './restaurant-dashboard.component.html',
  styleUrls: ['./restaurant-dashboard.component.css']
})
export class RestaurantDashboardComponent implements OnInit {
  restaurant: any = null;
  menuItems: any[] = [];
  orders: any[] = [];
  showAddItemForm = false;
  showProfileForm = false;
  
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
    phone: '',
    image: ''
  };

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.loadProfile();
    this.loadMenu();
    this.loadOrders();
  }

  loadProfile() {
    this.restaurantService.getProfile().subscribe(
      (data: any) => {
        this.restaurant = data;
        this.profileData = { ...data };
      },
      (error: any) => {
        console.error('Error loading profile', error);
      }
    );
  }

  loadMenu() {
    this.restaurantService.getMenu().subscribe(
      (data: any) => {
        this.menuItems = data;
      },
      (error: any) => {
        console.error('Error loading menu', error);
      }
    );
  }

  loadOrders() {
    this.restaurantService.getOrders().subscribe(
      (data: any) => {
        this.orders = data;
      },
      (error: any) => {
        console.error('Error loading orders', error);
      }
    );
  }

  addMenuItem() {
    if (!this.newItem.name || !this.newItem.price || !this.newItem.category) {
      alert('Please fill all required fields');
      return;
    }

    this.restaurantService.addMenuItem(this.newItem).subscribe(
      (response: any) => {
        alert('Menu item added successfully!');
        this.menuItems.push(response);
        this.newItem = { name: '', description: '', price: 0, category: '', image: '' };
        this.showAddItemForm = false;
      },
      (error: any) => {
        alert('Error adding menu item: ' + error.error.error);
      }
    );
  }

  updateProfile() {
    this.restaurantService.updateProfile(this.profileData).subscribe(
      (response: any) => {
        alert('Profile updated successfully!');
        this.restaurant = response;
        this.showProfileForm = false;
      },
      (error: any) => {
        alert('Error updating profile: ' + error.error.error);
      }
    );
  }

  updateOrderStatus(order: any, event: Event) {
    const newStatus = (event.target as HTMLSelectElement).value;
    this.restaurantService.updateOrderStatus(order._id, newStatus).subscribe(
      (response: any) => {
        order.status = newStatus;
        alert('Order status updated!');
      },
      (error: any) => {
        alert('Error updating order: ' + error.error.error);
      }
    );
  }

  toggleItemAvailability(item: any) {
    const updatedItem = { ...item, isAvailable: !item.isAvailable };
    this.restaurantService.updateMenuItem(item._id, updatedItem).subscribe(
      (response: any) => {
        item.isAvailable = !item.isAvailable;
        alert('Menu item updated!');
      },
      (error: any) => {
        alert('Error updating item: ' + error.error.error);
      }
    );
  }
}