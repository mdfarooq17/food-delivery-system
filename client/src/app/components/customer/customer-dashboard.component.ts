import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { AuthService } from '../../services/auth.service';
import { ImageSliderComponent } from './image-slider.component';
import { TopBrandsComponent } from './top-brands.component';
import { CategoriesComponent } from './categories.component';
import { ProductCardsComponent } from './product-cards.component';

interface OrderItem {
  name: string;
  price: number;
  quantity: number;
  menuItemId?: string;
}

interface Order {
  _id: string;
  status: string;
  items: OrderItem[];
  totalAmount: number;
  createdAt: string;
  restaurantId?: { name: string };
}

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
export class CustomerDashboardComponent implements OnInit, OnDestroy {
  // Auth
  isLoggedIn = false;
  currentUser: any = null;

  // UI State
  selectedAddress = '42nd St, New York';
  isDarkTheme = false;
  showCartPanel = false;
  showOrdersPanel = false;
  showAddressModal = false;
  isUserDropdownOpen = false;
  isMobileMenuOpen = false;
  isEditingProfile = false;
  activeView: 'home' | 'restaurants' | 'menu' | 'profile' | 'item-detail' | 'checkout' | 'offers' | 'orders' | 'explore' | 'tracking' = 'home';
  trackingOrder: any = null;
  searchQuery = '';
  newAddress = '';
  
  profileForm = {
    name: '',
    phone: '',
    address: '',
    profileImage: ''
  };
  activeFilter = 'All';

  // Slider State
  activeSlideIndex = 0;
  sliderInterval: any;
  slides = [
    {
      badge: 'PREMIUM',
      title1: 'Special Sushi',
      title2: 'Platters',
      description: 'Handcrafted sushi rolls with the freshest seafood.',
      price: 'Rs. 2400',
      image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600',
      thumb: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=100'
    },
    {
      badge: 'POPULAR',
      title1: 'Juicy Beef',
      title2: 'Burgers',
      description: 'Double patty burgers with melted cheese and crispy fries.',
      price: 'Rs. 1850',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600',
      thumb: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=100'
    },
    {
      badge: 'NEW',
      title1: 'Authentic',
      title2: 'Pizzas',
      description: 'Wood-fired pizzas with imported Italian tomatoes and basil.',
      price: 'Rs. 2200',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600',
      thumb: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=100'
    }
  ];

  restaurants: any[] = [];
  filteredRestaurants: any[] = [];
  searchDishes: any[] = [];
  selectedRestaurant: any = null;
  selectedItem: any = null;
  itemQty: number = 1;
  menuItems: any[] = [];
  randomMenuItems: any[] = [];
  cart: any[] = [];
  cartTotal = 0;
  orders: Order[] = [];

  // Checkout
  deliveryAddress = '';
  phone = '';
  notes = '';
  paymentMethod = 'cod';
  isPlacingOrder = false;

  // Review System
  showReviewModal = false;
  reviewOrderId: string | null = null;
  reviewRating = 5;
  reviewComment = '';

  constructor(
    private customerService: CustomerService,
    private authService: AuthService,
    private router: Router
  ) { }

  pollingInterval: any;

  ngOnInit() {
    this.authService.currentUser.subscribe(user => {
      this.currentUser = user;
      this.isLoggedIn = !!user;
      if (user) {
        this.profileForm = {
          name: user.name || '',
          phone: user.phone || '',
          address: user.address || '',
          profileImage: user.profileImage || ''
        };
        // Also update local selectedAddress if user has one saved
        if (user.address) this.selectedAddress = user.address;
      }
    });
    this.loadRestaurants();
    this.loadRandomMenuItems();
    this.startAutoSlider();
    this.startPolling();
  }

  loadRandomMenuItems() {
    this.customerService.getRandomMenuItems().subscribe({
      next: (data: any) => { this.randomMenuItems = data; },
      error: (err: any) => console.error('Error loading random items', err)
    });
  }

  ngOnDestroy() {
    this.stopAutoSlider();
    this.stopPolling();
  }

  startPolling() {
    this.pollingInterval = setInterval(() => {
      if (this.isLoggedIn) {
        if (this.activeView === 'orders') {
          this.loadMyOrders();
        } else if (this.activeView === 'tracking' && this.trackingOrder) {
          this.pollTrackingOrder();
        }
      }
    }, 5000); // Poll every 5 seconds
  }

  stopPolling() {
    if (this.pollingInterval) {
      clearInterval(this.pollingInterval);
    }
  }

  pollTrackingOrder() {
    if (!this.trackingOrder?._id) return;
    this.customerService.getOrderDetails(this.trackingOrder._id).subscribe({
      next: (order) => {
        if (order) {
          this.trackingOrder = order;
          // also update this order in the orders list if it is there
          const idx = this.orders.findIndex(o => o._id === order._id);
          if (idx !== -1) {
            this.orders[idx] = order;
          }
        }
      },
      error: (err) => console.error('Error polling order tracking details', err)
    });
  }

  startAutoSlider() {
    this.sliderInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Change slide every 5 seconds
  }

  stopAutoSlider() {
    if (this.sliderInterval) {
      clearInterval(this.sliderInterval);
    }
  }

  setSlide(index: number) {
    this.activeSlideIndex = index;
    this.stopAutoSlider();
    this.startAutoSlider(); // Reset interval
  }

  nextSlide() {
    this.activeSlideIndex = (this.activeSlideIndex + 1) % this.slides.length;
  }

  get cartCount(): number {
    return this.cart.reduce((sum, item) => sum + item.quantity, 0);
  }

  get deliveryFee(): number {
    return this.cart.length > 0 ? 150.00 : 0; // Set flat delivery fee to 150 PKR
  }

  get taxAmount(): number {
    return this.cartTotal * 0.08; // 8% tax
  }

  get grandTotal(): number {
    return this.cartTotal + this.deliveryFee + this.taxAmount;
  }

  // --- Auth ---
  goToLogin() { this.router.navigate(['/login/customer']); }
  goToRegister() { this.router.navigate(['/register/customer']); }
  logout() {
    this.authService.logout('customer');
    this.cart = [];
    this.cartTotal = 0;
    this.isUserDropdownOpen = false;
    this.router.navigate(['/login/customer']);
  }

  toggleUserDropdown() {
    this.isUserDropdownOpen = !this.isUserDropdownOpen;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  openAddressModal() {
    this.newAddress = this.selectedAddress;
    this.showAddressModal = true;
  }

  updateAddress() {
    if (this.newAddress.trim()) {
      this.selectedAddress = this.newAddress;
      this.showAddressModal = false;
      
      // If logged in, update profile address too
      if (this.isLoggedIn) {
        this.profileForm.address = this.selectedAddress;
        this.saveProfile(false); // Silent save
      }
    }
  }

  startEditingProfile() {
    this.isEditingProfile = true;
  }

  cancelEditProfile() {
    this.isEditingProfile = false;
    // Reset form
    if (this.currentUser) {
      this.profileForm = {
        name: this.currentUser.name || '',
        phone: this.currentUser.phone || '',
        address: this.currentUser.address || '',
        profileImage: this.currentUser.profileImage || ''
      };
    }
  }

  saveProfile(showAlert = true) {
    this.authService.updateProfile(this.profileForm).subscribe({
      next: (user) => {
        this.isEditingProfile = false;
        if (showAlert) alert('Profile updated successfully!');
      },
      error: (err) => {
        console.error('Error updating profile', err);
        if (showAlert) alert('Failed to update profile');
      }
    });
  }

  // --- Restaurants ---
  loadRestaurants() {
    this.customerService.getRestaurants().subscribe({
      next: (data: any) => {
        this.restaurants = data;
        this.filteredRestaurants = data;
      },
      error: (err: any) => console.error('Error loading restaurants', err)
    });
  }

  browseRestaurants() {
    this.activeView = 'restaurants';
    this.selectedRestaurant = null;
    this.menuItems = [];
  }

  selectRestaurant(restaurant: any) {
    this.selectedRestaurant = restaurant;
    this.activeView = 'menu';
    this.loadMenuItems(restaurant._id);
  }

  loadMenuItems(restaurantId: string) {
    this.customerService.getRestaurantMenu(restaurantId).subscribe({
      next: (data: any) => { this.menuItems = data; },
      error: (err: any) => console.error('Error loading menu', err)
    });
  }

  viewItemDetail(item: any) {
    this.selectedItem = item;
    this.itemQty = 1;
    this.activeView = 'item-detail';
    
    // Ensure we load the menu items for this item's restaurant to show "More from this restaurant"
    let restId = item.restaurantId;
    if (typeof restId === 'object' && restId !== null && restId._id) {
      restId = restId._id;
      this.selectedRestaurant = item.restaurantId;
    } else {
      // Find the restaurant from our pre-loaded list if possible
      this.selectedRestaurant = this.restaurants.find(r => r._id === restId);
    }

    if (restId) {
      this.loadMenuItems(restId);
    }
  }

  goBack() {
    if (this.activeView === 'menu') {
      this.activeView = 'restaurants';
      this.selectedRestaurant = null;
    } else if (this.activeView === 'item-detail') {
      this.activeView = 'home';
      this.selectedItem = null;
    } else {
      this.activeView = 'home';
    }
  }

  goHome() {
    this.activeView = 'home';
  }

  applyFilter(filter: string) {
    this.activeFilter = filter;
    if (filter === 'All') {
      this.filteredRestaurants = this.restaurants;
    } else if (filter === 'Rating 4.0+') {
      this.filteredRestaurants = this.restaurants.filter(r => r.rating >= 4.0);
    } else {
      this.filteredRestaurants = this.restaurants;
    }
  }

  searchRestaurants() {
    if (!this.searchQuery.trim()) {
      this.filteredRestaurants = [...this.restaurants];
      this.searchDishes = [];
      return;
    }

    this.customerService.search(this.searchQuery).subscribe({
      next: (results) => {
        this.filteredRestaurants = results.restaurants;
        this.searchDishes = results.dishes;
        this.activeView = 'explore';
        window.scrollTo(0, 0);
      },
      error: (err) => {
        console.error('Search error', err);
        // Fallback to client-side filtering of restaurants only
        this.filteredRestaurants = this.restaurants.filter(r =>
          r.name?.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
        this.activeView = 'explore';
      }
    });
  }

  // --- Cart ---
  addToCart(item: any, quantity: number = 1) {
    // Customers can add to cart even if not logged in (Guest Mode)
    const existing = this.cart.find(c => c._id === item._id);
    if (existing) {
      existing.quantity += quantity;
    } else {
      this.cart.push({ ...item, quantity: quantity });
    }
    this.updateCartTotal();
    this.showCartPanel = true;
  }

  removeFromCart(item: any) {
    this.cart = this.cart.filter(c => c._id !== item._id);
    this.updateCartTotal();
  }

  decreaseQty(item: any) {
    const existing = this.cart.find(c => c._id === item._id);
    if (existing) {
      existing.quantity--;
      if (existing.quantity <= 0) this.removeFromCart(item);
    }
    this.updateCartTotal();
  }

  getCartQty(item: any): number {
    const found = this.cart.find(c => c._id === item._id);
    return found ? found.quantity : 0;
  }

  updateCartTotal() {
    this.cartTotal = this.cart.reduce((t, i) => t + i.price * i.quantity, 0);
  }

  clearCart() { this.cart = []; this.cartTotal = 0; }

  openCheckout() {
    if (!this.isLoggedIn) { 
      alert('Please login as a customer to proceed with your order.');
      this.router.navigate(['/login/customer']); 
      return; 
    }
    if (this.cart.length === 0) { alert('Your cart is empty'); return; }
    this.showCartPanel = false;
    this.activeView = 'checkout';
  }

  // --- Orders ---
  placeOrder() {
    if (!this.deliveryAddress || !this.phone) {
      alert('Please enter delivery address and phone number');
      return;
    }
    
    // In a real app we might validate payment info here if not COD
    
    this.isPlacingOrder = true;
    const order = {
      // Assuming all cart items are from the same restaurant for simplicity
      // Or picking the first item's restaurantId if selectedRestaurant isn't set
      restaurantId: this.selectedRestaurant?._id || this.cart[0]?.restaurantId?._id || this.cart[0]?.restaurantId,
      items: this.cart.map(item => ({
        menuItemId: item._id,
        name: item.name,
        price: item.price,
        quantity: item.quantity
      })),
      totalAmount: this.grandTotal,
      deliveryFee: this.deliveryFee,
      deliveryAddress: this.deliveryAddress,
      phone: this.phone,
      notes: this.notes,
      paymentMethod: this.paymentMethod
    };
    this.customerService.placeOrder(order).subscribe({
      next: () => {
        this.isPlacingOrder = false;
        this.clearCart();
        this.activeView = 'home';
        this.deliveryAddress = '';
        this.phone = '';
        this.notes = '';
        alert('🎉 Order placed successfully!');
        this.openMyOrders();
      },
      error: (err: any) => {
        this.isPlacingOrder = false;
        alert('Error placing order: ' + (err.error?.error || 'Unknown error'));
      }
    });
  }

  loadMyOrders() {
    this.customerService.getOrders().subscribe({
      next: (data: any) => { this.orders = data; },
      error: (err: any) => console.error('Error loading orders', err)
    });
  }

  openMyOrders() {
    if (!this.isLoggedIn) { 
      this.router.navigate(['/login/customer']); 
      return; 
    }
    this.loadMyOrders();
    this.activeView = 'orders';
    this.showOrdersPanel = false;
  }

  trackOrder(order: any) {
    this.trackingOrder = order;
    this.activeView = 'tracking';
    window.scrollTo(0, 0);
  }

  getOrderProgress(status: string): number {
    const phases: any = {
      'pending': 15,
      'accepted': 35,
      'preparing': 55,
      'ready': 75,
      'delivered': 100,
      'out-for-delivery': 85,
      'cancelled': 0
    };
    return phases[status.toLowerCase()] || 0;
  }

  getPhaseTime(status: string, phase: string): string {
    const s = status.toLowerCase();
    if (s === 'delivered') return 'Done';
    if (s === 'cancelled') return '--';
    
    const times: any = {
      'confirmed': { val: '2 min', level: 1 },
      'preparing': { val: '10 min', level: 2 },
      'delivery': { val: '20 min', level: 3 }
    };

    const currentLevel = {
      'pending': 0,
      'accepted': 1,
      'preparing': 2,
      'ready': 2,
      'out-for-delivery': 3
    }[s] || 0;

    if (times[phase].level <= currentLevel) return 'Done';
    return times[phase].val;
  }

  // --- Theme ---
  // --- Rating & Review System ---
  openReviewModal(order: any) {
    this.reviewOrderId = order._id;
    this.reviewRating = 5;
    this.reviewComment = '';
    this.showReviewModal = true;
  }

  closeReviewModal() {
    this.showReviewModal = false;
    this.reviewOrderId = null;
  }

  submitReview() {
    if (!this.reviewOrderId) return;
    this.customerService.submitOrderReview(this.reviewOrderId, this.reviewRating, this.reviewComment).subscribe({
      next: (response: any) => {
        alert('Thank you! Your rating and review was submitted successfully.');
        this.loadMyOrders();
        this.closeReviewModal();
        if (this.trackingOrder && this.trackingOrder._id === this.reviewOrderId) {
          this.trackingOrder = response.order;
        }
      },
      error: (err: any) => {
        alert('Error submitting review: ' + (err.error?.error || 'Unknown error'));
      }
    });
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    document.body.classList.toggle('dark-theme', this.isDarkTheme);
  }

  getStatusColor(status: string): string {
    const map: any = {
      pending: '#f59e0b',
      accepted: '#3b82f6',
      preparing: '#8b5cf6',
      ready: '#10b981',
      delivered: '#22c55e',
      cancelled: '#ef4444'
    };
    return map[status] || '#6b7280';
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.user-profile-dropdown')) {
      this.isUserDropdownOpen = false;
    }
  }
}
