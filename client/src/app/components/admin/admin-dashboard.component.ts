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
  categories: any[] = [];
  newCategoryName = '';
  cities: any[] = [];
  newCityName = '';
  activeTab = 'stats';

  // --- New Admin Feature State ---
  generalFeedbacks: any[] = [];
  orderReviews: any[] = [];
  notifications: any[] = [];
  sliders: any[] = [];

  // User Modals
  showAddUserModal = false;
  showEditUserModal = false;
  selectedUser: any = null;
  newUser = { name: '', email: '', password: '', role: 'customer', phone: '', city: '' };

  // Restaurant Modals
  showEditResModal = false;
  selectedRestaurant: any = null;

  // Notification Form
  newNotification = { recipientId: '', title: '', message: '', type: 'info', targetRole: 'all' };

  // Slider Modals
  showAddSliderModal = false;
  showEditSliderModal = false;
  selectedSlider: any = null;
  newSlider = { badge: 'FEATURED', title1: '', title2: '', description: '', price: '', image: '', thumb: '', isActive: true, order: 0 };

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
    this.loadCategories();
    this.loadFeedbacks();
    this.loadNotifications();
    this.loadSliders();
    this.resetTimer();
  }

  loadCategories() {
    this.adminService.getCategories().subscribe({
      next: (data) => this.categories = data,
      error: (err) => console.error('Error loading categories', err)
    });
  }

  addCategory() {
    if (!this.newCategoryName) return;
    this.adminService.addCategory(this.newCategoryName).subscribe({
      next: (cat) => {
        this.categories.push(cat);
        this.newCategoryName = '';
        alert('Category added!');
      },
      error: (err) => alert('Error adding category')
    });
  }

  deleteCategory(id: string) {
    if (confirm('Are you sure?')) {
      this.adminService.deleteCategory(id).subscribe({
        next: () => this.categories = this.categories.filter(c => c._id !== id),
        error: (err) => alert('Error deleting category')
      });
    }
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

  // --- User Management Methods ---
  openAddUserModal() {
    this.newUser = { name: '', email: '', password: '', role: 'customer', phone: '', city: '' };
    this.showAddUserModal = true;
  }

  addUser() {
    if (!this.newUser.name || !this.newUser.email) {
      alert('Name and Email are required');
      return;
    }
    this.adminService.addUser(this.newUser).subscribe({
      next: (user) => {
        this.users.push(user);
        this.showAddUserModal = false;
        alert('User added successfully!');
      },
      error: (err) => alert('Error adding user: ' + err.error?.error)
    });
  }

  openEditUserModal(user: any) {
    this.selectedUser = { ...user };
    this.showEditUserModal = true;
  }

  saveUserEdit() {
    this.adminService.updateUser(this.selectedUser._id, this.selectedUser).subscribe({
      next: (updated) => {
        const index = this.users.findIndex(u => u._id === updated._id);
        if (index !== -1) this.users[index] = updated;
        this.showEditUserModal = false;
        alert('User updated successfully!');
      },
      error: (err) => alert('Error updating user')
    });
  }

  deleteUser(id: string) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.adminService.deleteUser(id).subscribe({
        next: () => {
          this.users = this.users.filter(u => u._id !== id);
          alert('User deleted');
        },
        error: (err) => alert('Error deleting user')
      });
    }
  }

  toggleUserActive(user: any) {
    const updatedUser = { ...user, isActive: !user.isActive };
    this.adminService.updateUser(user._id, updatedUser).subscribe({
      next: (res) => user.isActive = res.isActive,
      error: (err) => alert('Error updating user status')
    });
  }

  toggleUserBlocked(user: any) {
    const updatedUser = { ...user, isBlocked: !user.isBlocked };
    this.adminService.updateUser(user._id, updatedUser).subscribe({
      next: (res) => user.isBlocked = res.isBlocked,
      error: (err) => alert('Error updating user block status')
    });
  }

  // --- Restaurant Management Methods ---
  openEditResModal(res: any) {
    this.selectedRestaurant = { ...res };
    this.showEditResModal = true;
  }

  saveRestaurantEdit() {
    this.adminService.updateRestaurant(this.selectedRestaurant._id, this.selectedRestaurant).subscribe({
      next: (updated) => {
        const index = this.restaurants.findIndex(r => r._id === updated._id);
        if (index !== -1) this.restaurants[index] = updated;
        this.showEditResModal = false;
        alert('Restaurant updated successfully!');
      },
      error: (err) => alert('Error updating restaurant')
    });
  }

  deleteRestaurant(id: string) {
    if (confirm('Are you sure you want to delete this restaurant?')) {
      this.adminService.deleteRestaurant(id).subscribe({
        next: () => {
          this.restaurants = this.restaurants.filter(r => r._id !== id);
          alert('Restaurant deleted');
        },
        error: (err) => alert('Error deleting restaurant')
      });
    }
  }

  // --- Feedbacks Methods ---
  loadFeedbacks() {
    this.adminService.getFeedbacks().subscribe({
      next: (data) => {
        this.generalFeedbacks = data.generalFeedbacks;
        this.orderReviews = data.orderReviews;
      },
      error: (err) => console.error('Error loading feedbacks', err)
    });
  }

  updateFeedbackStatus(feedback: any, status: string) {
    this.adminService.updateFeedbackStatus(feedback._id, status).subscribe({
      next: (updated) => feedback.status = updated.status,
      error: (err) => alert('Error updating feedback status')
    });
  }

  // --- Notifications Methods ---
  loadNotifications() {
    this.adminService.getNotifications().subscribe({
      next: (data) => this.notifications = data,
      error: (err) => console.error('Error loading notifications', err)
    });
  }

  sendNotification() {
    if (!this.newNotification.title || !this.newNotification.message) {
      alert('Title and Message are required');
      return;
    }
    this.adminService.sendNotification(this.newNotification).subscribe({
      next: (notif) => {
        this.notifications.unshift(notif);
        this.newNotification = { recipientId: '', title: '', message: '', type: 'info', targetRole: 'all' };
        alert('Notification sent successfully!');
      },
      error: (err) => alert('Error sending notification')
    });
  }

  deleteNotification(id: string) {
    if (confirm('Delete this notification?')) {
      this.adminService.deleteNotification(id).subscribe({
        next: () => this.notifications = this.notifications.filter(n => n._id !== id),
        error: (err) => alert('Error deleting notification')
      });
    }
  }

  // --- Sliders Methods ---
  loadSliders() {
    this.adminService.getSliders().subscribe({
      next: (data) => this.sliders = data,
      error: (err) => console.error('Error loading sliders', err)
    });
  }

  openAddSliderModal() {
    this.newSlider = { badge: 'FEATURED', title1: '', title2: '', description: '', price: '', image: '', thumb: '', isActive: true, order: 0 };
    this.showAddSliderModal = true;
  }

  addSlider() {
    if (!this.newSlider.title1 || !this.newSlider.image) {
      alert('Title1 and Image URL are required');
      return;
    }
    this.adminService.addSlider(this.newSlider).subscribe({
      next: (slider) => {
        this.sliders.push(slider);
        this.showAddSliderModal = false;
        alert('Slider added successfully!');
      },
      error: (err) => alert('Error adding slider')
    });
  }

  openEditSliderModal(slider: any) {
    this.selectedSlider = { ...slider };
    this.showEditSliderModal = true;
  }

  saveSliderEdit() {
    this.adminService.updateSlider(this.selectedSlider._id, this.selectedSlider).subscribe({
      next: (updated) => {
        const index = this.sliders.findIndex(s => s._id === updated._id);
        if (index !== -1) this.sliders[index] = updated;
        this.showEditSliderModal = false;
        alert('Slider updated successfully!');
      },
      error: (err) => alert('Error updating slider')
    });
  }

  deleteSlider(id: string) {
    if (confirm('Delete this slider?')) {
      this.adminService.deleteSlider(id).subscribe({
        next: () => this.sliders = this.sliders.filter(s => s._id !== id),
        error: (err) => alert('Error deleting slider')
      });
    }
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  logout() {
    this.authService.logout('admin');
    this.router.navigate(['/login/admin']);
  }
}