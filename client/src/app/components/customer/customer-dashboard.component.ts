import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { AuthService } from '../../services/auth.service';
import { SubscriptionService } from '../../services/subscription.service';
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
  review?: {
    rating: number;
    comment?: string;
    createdAt?: string;
  };
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
  activeView: 'home' | 'restaurants' | 'menu' | 'profile' | 'item-detail' | 'checkout' | 'offers' | 'orders' | 'explore' | 'tracking' | 'notifications' | 'subscriptions' = 'home';
  trackingOrder: any = null;

  // Subscription Meal Service State
  subscriptionRestaurants: any[] = [];
  selectedSubRestaurant: any = null;
  selectedSubPlan: any = null;
  subPlans: any[] = [];
  subMenus: any[] = [];
  subExtras: any[] = [];
  mySubscriptions: any[] = [];
  subFilter: any = { planType: '', mealType: '', tag: '', search: '' };
  subCheckout: any = { startDate: '', endDate: '', preferredMealTimings: '12:30 PM - 01:30 PM', deliveryAddress: '', phone: '', deliveryInstructions: '', selectedExtras: [] };
  subModalOpen = false;
  subActionModalOpen = false;
  selectedSubscriptionForAction: any = null;
  subActionType: string = '';
  subActionData: any = { vacationDatesStr: '', newTiming: '', newAddress: '', note: '', modificationDate: '' };
  searchQuery = '';
  newAddress = '';
  selectedCity = '';
  previousCity = '';
  availableCities: any[] = [];
  
  notifications: any[] = [];
  unreadNotificationsCount: number = 0;
  
  profileForm: any = {
    name: '',
    phone: '',
    address: '',
    city: '',
    savedAddresses: [],
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
      title1: 'Artisan Woodfired',
      title2: 'Pizzas',
      description: 'Authentic Italian pizzas baked in a traditional woodfired oven.',
      price: 'Rs. 2100',
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

  restaurantReviews: any[] = [];
  productReviews: any[] = [];
  productAverageRating: number = 0;

  constructor(
    private customerService: CustomerService,
    private authService: AuthService,
    private subscriptionService: SubscriptionService,
    private router: Router
  ) { }

  pollingInterval: any;

  ngOnInit() {
    this.loadCities();
    this.authService.currentUser.subscribe(user => {
      this.currentUser = user;
      this.isLoggedIn = !!user;
      if (user) {
        this.profileForm = {
          name: user.name || '',
          phone: user.phone || '',
          address: user.address || '',
          city: user.city || '',
          savedAddresses: user.savedAddresses || [],
          profileImage: user.profileImage || ''
        };
        // Set local selectedAddress and selectedCity
        if (user.city) {
          this.selectedCity = user.city;
          this.previousCity = user.city;
        }
        if (user.address) this.selectedAddress = `${user.address}, ${user.city || ''}`.replace(/,\s*$/, '');
        else if (user.savedAddresses && user.savedAddresses.length > 0) {
          const first = user.savedAddresses[0];
          this.selectedCity = first.city;
          this.previousCity = first.city;
          this.selectedAddress = `${first.fullAddress}, ${first.city}`;
        }

        if (this.cart.length > 0) {
          this.authService.syncCart(this.cart).subscribe();
        } else if (user.cart && user.cart.length > 0) {
          this.cart = user.cart;
          this.cartTotal = this.cart.reduce((t, i) => t + i.price * i.quantity, 0);
        }

        this.loadNotifications();
      }
    });
    this.loadRestaurants();
    this.loadRandomMenuItems();
    this.loadSliders();
    this.startAutoSlider();
    this.startPolling();
  }

  loadNotifications() {
    if (!this.isLoggedIn) return;
    this.authService.getNotifications('customer').subscribe({
      next: (data: any) => {
        this.notifications = data;
        this.unreadNotificationsCount = this.notifications.filter((n: any) => !n.isRead).length;
      },
      error: (err: any) => console.error('Error loading notifications', err)
    });
  }

  markAsRead(notification: any) {
    if (notification.isRead) return;
    this.authService.markNotificationAsRead(notification._id, 'customer').subscribe({
      next: (updated: any) => {
        notification.isRead = true;
        this.unreadNotificationsCount = this.notifications.filter((n: any) => !n.isRead).length;
      },
      error: (err: any) => console.error('Error marking notification as read', err)
    });
  }

  openNotifications() {
    if (!this.isLoggedIn) {
      this.router.navigate(['/login/customer']);
      return;
    }
    this.loadNotifications();
    this.activeView = 'notifications';
    this.isUserDropdownOpen = false;
    this.isMobileMenuOpen = false;
  }

  loadSliders() {
    this.customerService.getSliders().subscribe({
      next: (data: any) => {
        if (data && data.length > 0) {
          this.slides = data;
        }
      },
      error: (err) => console.error('Error loading sliders', err)
    });
  }

  loadCities() {
    this.authService.getCities().subscribe({
      next: (data: any) => {
        this.availableCities = data;
        if (this.availableCities.length > 0 && !this.selectedCity) {
          this.selectedCity = this.availableCities[0].name;
          this.previousCity = this.selectedCity;
        }
      },
      error: (err: any) => console.error('Error loading cities', err)
    });
  }

  loadRandomMenuItems() {
    this.customerService.getRandomMenuItems(this.selectedCity).subscribe({
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
        this.loadNotifications();
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
    this.newAddress = '';
    this.showAddressModal = true;
  }

  updateAddress() {
    if (!this.selectedCity) {
      alert('Please select a city.');
      return;
    }
    if (this.newAddress.trim()) {
      const cityChanged = this.previousCity && this.previousCity !== this.selectedCity;
      this.previousCity = this.selectedCity;

      this.selectedAddress = `${this.newAddress}, ${this.selectedCity}`;
      this.showAddressModal = false;
      
      if (this.isLoggedIn) {
        this.profileForm.city = this.selectedCity;
        this.profileForm.address = this.newAddress;
        if (!this.profileForm.savedAddresses) this.profileForm.savedAddresses = [];
        
        // Add to saved addresses if not already there
        const exists = this.profileForm.savedAddresses.find((a: any) => a.city === this.selectedCity && a.fullAddress === this.newAddress);
        if (!exists) {
          this.profileForm.savedAddresses.push({
            city: this.selectedCity,
            fullAddress: this.newAddress,
            label: 'Saved Address'
          });
        }
        
        this.saveProfile(false); // Silent save
      }
      
      if (cityChanged) {
        this.restaurants = [];
        this.filteredRestaurants = [];
        this.menuItems = [];
        this.randomMenuItems = [];
        this.searchDishes = [];
        if (this.activeView === 'restaurants' || this.activeView === 'menu' || this.activeView === 'item-detail') {
          this.activeView = 'home';
        }
      }
      
      // Reload restaurants and menu for new city
      this.loadRestaurants();
      this.loadRandomMenuItems();
    } else {
      alert('Please enter a full delivery address.');
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
        city: this.currentUser.city || '',
        savedAddresses: this.currentUser.savedAddresses || [],
        profileImage: this.currentUser.profileImage || ''
      };
    }
  }

  removeSavedAddress(index: number) {
    if (!this.profileForm?.savedAddresses) return;
    this.profileForm.savedAddresses.splice(index, 1);
    if (this.isLoggedIn) {
      this.saveProfile(false);
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
    this.customerService.getRestaurants(this.selectedCity).subscribe({
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
    this.loadRestaurantReviews(restaurant._id);
  }

  loadMenuItems(restaurantId: string) {
    this.customerService.getRestaurantMenu(restaurantId).subscribe({
      next: (data: any) => { this.menuItems = data; },
      error: (err: any) => console.error('Error loading menu', err)
    });
  }

  loadRestaurantReviews(restaurantId: string) {
    this.customerService.getRestaurantReviews(restaurantId).subscribe({
      next: (data: any) => { this.restaurantReviews = data; },
      error: (err: any) => console.error('Error loading restaurant reviews', err)
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
    }
    
    // Find the full restaurant from our pre-loaded list if possible
    this.selectedRestaurant = this.restaurants.find(r => r._id === restId);
    if (!this.selectedRestaurant && typeof item.restaurantId === 'object') {
      this.selectedRestaurant = item.restaurantId;
    }

    if (restId) {
      this.loadMenuItems(restId);
    }

    this.loadProductReviews(item._id);
  }

  loadProductReviews(menuItemId: string) {
    this.customerService.getMenuItemReviews(menuItemId).subscribe({
      next: (data: any) => {
        this.productReviews = data;
        if (data.length > 0) {
          const sum = data.reduce((acc: number, curr: any) => acc + curr.review.rating, 0);
          this.productAverageRating = Number((sum / data.length).toFixed(1));
        } else {
          this.productAverageRating = 0;
        }
      },
      error: (err: any) => console.error('Error loading product reviews', err)
    });
  }

  scrollToReviews() {
    setTimeout(() => {
      const el = document.getElementById('restaurant-reviews-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
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

    this.customerService.search(this.searchQuery, this.selectedCity).subscribe({
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
      this.cart.push({ ...item, quantity: quantity, cityAddedFrom: this.selectedCity });
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
    if (this.isLoggedIn) {
      this.authService.syncCart(this.cart).subscribe();
    }
  }

  get hasInvalidCartItems(): boolean {
    return this.cart.some(item => item.cityAddedFrom && item.cityAddedFrom !== this.selectedCity);
  }

  get validSavedAddresses(): any[] {
    if (!this.profileForm?.savedAddresses) return [];
    return this.profileForm.savedAddresses.filter((addr: any) => addr.city === this.selectedCity);
  }

  clearCart() { this.cart = []; this.updateCartTotal(); }

  openCheckout() {
    if (!this.isLoggedIn) { 
      alert('Please login as a customer to proceed with your order.');
      this.router.navigate(['/login/customer']); 
      return; 
    }
    if (this.cart.length === 0) { alert('Your cart is empty'); return; }
    
    if (!this.phone && this.currentUser?.phone) {
      this.phone = this.currentUser.phone;
    }
    
    this.showCartPanel = false;
    this.activeView = 'checkout';
  }

  // --- Orders ---
  placeOrder() {
    const finalPhone = this.phone || this.currentUser?.phone;
    if (!this.deliveryAddress || !finalPhone) {
      alert('Please enter delivery address and a phone number');
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
      phone: finalPhone,
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
      'pickedup': 80,
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
      'pickedup': 3,
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

  // ==========================================
  // SUBSCRIPTION MEAL SERVICE METHODS
  // ==========================================
  openSubscriptionsTab() {
    this.activeView = 'subscriptions';
    this.selectedSubRestaurant = null;
    this.selectedSubPlan = null;
    this.loadSubscriptionRestaurants();
    if (this.isLoggedIn) {
      this.loadMySubscriptions();
    }
  }

  loadSubscriptionRestaurants() {
    this.subscriptionService.getRestaurants({ city: this.selectedCity, ...this.subFilter }).subscribe({
      next: (res) => {
        this.subscriptionRestaurants = res.restaurants || [];
      },
      error: (err) => console.error('Error loading subscription restaurants', err)
    });
  }

  filterSubscriptions() {
    this.loadSubscriptionRestaurants();
  }

  selectSubscriptionRestaurant(restaurant: any) {
    this.selectedSubRestaurant = restaurant;
    this.subscriptionService.getRestaurantDetails(restaurant._id).subscribe({
      next: (res) => {
        this.subPlans = res.plans || [];
        this.subExtras = res.extras || [];
      },
      error: (err) => console.error('Error loading restaurant subscription details', err)
    });
  }

  openSubPlanDetails(plan: any) {
    this.selectedSubPlan = plan;
    this.subscriptionService.getMenu(plan._id).subscribe({
      next: (menus) => {
        this.subMenus = menus || [];
      },
      error: (err) => console.error('Error loading subscription menu', err)
    });
  }

  openSubCheckoutModal(plan: any) {
    if (!this.isLoggedIn) {
      alert('Please login as a customer to subscribe to meal plans.');
      this.router.navigate(['/login/customer']);
      return;
    }
    this.selectedSubPlan = plan;
    const start = new Date();
    start.setDate(start.getDate() + 1); // Start tomorrow
    const end = new Date(start);
    end.setDate(end.getDate() + (plan.planType === 'weekly' ? 7 : 30));

    this.subCheckout = {
      startDate: start.toISOString().split('T')[0],
      endDate: end.toISOString().split('T')[0],
      preferredMealTimings: plan.deliveryTimings || '12:30 PM - 01:30 PM',
      deliveryAddress: this.selectedAddress || this.currentUser?.address || '',
      phone: this.currentUser?.phone || '',
      deliveryInstructions: '',
      selectedExtras: []
    };
    this.subModalOpen = true;
  }

  toggleSubExtra(extra: any) {
    const existingIndex = this.subCheckout.selectedExtras.findIndex((e: any) => e.extraItemId === extra._id);
    if (existingIndex > -1) {
      this.subCheckout.selectedExtras.splice(existingIndex, 1);
    } else {
      this.subCheckout.selectedExtras.push({
        extraItemId: extra._id,
        name: extra.name,
        price: extra.price,
        quantity: 1,
        repeatMode: 'daily'
      });
    }
  }

  isSubExtraSelected(extraId: string): boolean {
    return this.subCheckout.selectedExtras.some((e: any) => e.extraItemId === extraId);
  }

  calculateSubGrandTotal(): number {
    if (!this.selectedSubPlan) return 0;
    const base = this.selectedSubPlan.discountedPrice || this.selectedSubPlan.totalPrice || 0;
    const days = this.selectedSubPlan.planType === 'weekly' ? 7 : 30;
    const extrasTotal = this.subCheckout.selectedExtras.reduce((sum: number, e: any) => {
      const mult = e.repeatMode === 'daily' ? days : (e.repeatMode === 'weekly' ? Math.ceil(days / 7) : 1);
      return sum + (e.price * e.quantity * mult);
    }, 0);
    return base + extrasTotal;
  }

  submitSubscriptionRequest() {
    if (!this.subCheckout.deliveryAddress || !this.subCheckout.phone) {
      alert('Please enter delivery address and phone number.');
      return;
    }

    const payload = {
      restaurantId: this.selectedSubRestaurant._id,
      planId: this.selectedSubPlan._id,
      startDate: this.subCheckout.startDate,
      endDate: this.subCheckout.endDate,
      preferredMealTimings: this.subCheckout.preferredMealTimings,
      deliveryAddress: this.subCheckout.deliveryAddress,
      city: this.selectedCity,
      phone: this.subCheckout.phone,
      deliveryInstructions: this.subCheckout.deliveryInstructions,
      extras: this.subCheckout.selectedExtras,
      totalAmount: this.calculateSubGrandTotal()
    };

    this.subscriptionService.subscribe(payload).subscribe({
      next: (res) => {
        alert('🎉 Subscription request submitted successfully! Awaiting restaurant approval.');
        this.subModalOpen = false;
        this.loadMySubscriptions();
      },
      error: (err) => alert('Error submitting subscription: ' + (err.error?.error || err.message))
    });
  }

  loadMySubscriptions() {
    this.subscriptionService.getMySubscriptions().subscribe({
      next: (subs) => {
        this.mySubscriptions = subs || [];
      },
      error: (err) => console.error('Error loading my subscriptions', err)
    });
  }

  openSubActionModal(sub: any, actionType: string) {
    this.selectedSubscriptionForAction = sub;
    this.subActionType = actionType;
    this.subActionData = { vacationDatesStr: '', newTiming: sub.preferredMealTimings, newAddress: sub.deliveryAddress, note: '', modificationDate: new Date().toISOString().split('T')[0] };
    this.subActionModalOpen = true;
  }

  confirmSubAction() {
    let payload: any = { action: this.subActionType };
    if (this.subActionType === 'vacation') {
      const dates = this.subActionData.vacationDatesStr.split(',').map((d: string) => d.trim()).filter(Boolean);
      if (!dates.length) { alert('Please enter valid dates.'); return; }
      payload.vacationDates = dates;
    } else if (this.subActionType === 'modify_schedule') {
      payload.modificationDate = this.subActionData.modificationDate;
      payload.newTiming = this.subActionData.newTiming;
      payload.newAddress = this.subActionData.newAddress;
      payload.note = this.subActionData.note;
    }

    this.subscriptionService.updateSubscriptionAction(this.selectedSubscriptionForAction._id, payload).subscribe({
      next: (res) => {
        alert(`Subscription updated: ${res.message}`);
        this.subActionModalOpen = false;
        this.loadMySubscriptions();
      },
      error: (err) => alert('Error updating subscription: ' + (err.error?.error || err.message))
    });
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.user-profile-dropdown')) {
      this.isUserDropdownOpen = false;
    }
  }
}

