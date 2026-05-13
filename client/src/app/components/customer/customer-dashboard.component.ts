import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../../services/customer.service';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { TopBrandsComponent } from './top-brands/top-brands.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductCardsComponent } from './product-cards/product-cards.component';

@Component({
  selector: 'app-customer-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ImageSliderComponent,
    TopBrandsComponent,
    CategoriesComponent,
    ProductCardsComponent
  ],
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {
  isLoggedIn = false; // TODO: Get from auth service
  selectedAddress = 'Downtown, Karachi';
  cartCount = 0;
  isDarkTheme = false;

  restaurants: any[] = [];
  selectedRestaurant: any = null;
  menuItems: any[] = [];
  cart: any[] = [];
  cartTotal = 0;
  showCheckout = false;
  deliveryAddress = '';
  phone = '';
  notes = '';

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.loadRestaurants();
  }

  loadRestaurants() {
    this.customerService.getRestaurants().subscribe(
      (data: any) => {
        this.restaurants = data;
      },
      (error: any) => {
        console.error('Error loading restaurants', error);
      }
    );
  }

  selectRestaurant(restaurant: any) {
    this.selectedRestaurant = restaurant;
    this.loadMenuItems(restaurant._id);
  }

  loadMenuItems(restaurantId: string) {
    this.customerService.getRestaurantMenu(restaurantId).subscribe(
      (data: any) => {
        this.menuItems = data;
      },
      (error: any) => {
        console.error('Error loading menu items', error);
      }
    );
  }

  addToCart(item: any) {
    const cartItem = this.cart.find(c => c._id === item._id);
    if (cartItem) {
      cartItem.quantity++;
    } else {
      this.cart.push({ ...item, quantity: 1 });
    }
    this.updateCartTotal();
  }

  removeFromCart(item: any) {
    this.cart = this.cart.filter(c => c._id !== item._id);
    this.updateCartTotal();
  }

  updateCartTotal() {
    this.cartTotal = this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  placeOrder() {
    if (!this.deliveryAddress || !this.phone) {
      alert('Please enter delivery address and phone number');
      return;
    }

    const order = {
      restaurantId: this.selectedRestaurant._id,
      items: this.cart.map(item => ({
        menuItemId: item._id,
        name: item.name,
        price: item.price,
        quantity: item.quantity
      })),
      totalAmount: this.cartTotal,
      deliveryAddress: this.deliveryAddress,
      phone: this.phone,
      notes: this.notes
    };

    this.customerService.placeOrder(order).subscribe(
      (response: any) => {
        alert('Order placed successfully!');
        this.cart = [];
        this.showCheckout = false;
        this.deliveryAddress = '';
        this.phone = '';
        this.notes = '';
        this.selectedRestaurant = null;
      },
      (error: any) => {
        alert('Error placing order: ' + error.error.error);
      }
    );
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    // TODO: Implement theme switching
  }
}