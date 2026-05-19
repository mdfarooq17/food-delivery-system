import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RestaurantService } from '../../services/restaurant.service';
import { AuthService } from '../../services/auth.service';
import { SubscriptionService } from '../../services/subscription.service';

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
  
  notifications: any[] = [];
  unreadNotificationsCount: number = 0;
  
  alertedOrderIds: Set<string> = new Set();
  incomingOrderAlert: any = null;
  selectedOrderDetails: any = null;

  showItemReviewsModal = false;
  selectedReviewItem: any = null;
  itemReviews: any[] = [];

  // Subscription Manager State
  subPlans: any[] = [];
  selectedPlanForMenu: any = null;
  menuDays: any[] = [];
  subExtras: any[] = [];
  subRequests: any[] = [];
  subscribers: any[] = [];
  dailyDeliveries: any[] = [];
  deliveryFilter: any = { date: new Date().toISOString().split('T')[0], area: '', timing: '' };
  selectedDeliveriesForBatch: string[] = [];
  showPlanModal = false;
  showExtraModal = false;
  showAssignModal = false;
  newPlan: any = { title: '', description: '', planType: 'weekly', mealType: 'lunch', totalPrice: 2500, discountedPrice: 2200, numberOfMeals: 7, deliveryTimings: '12:30 PM - 01:30 PM', tagsStr: 'Healthy, High-Protein', maxSubscribers: 50 };
  newExtra: any = { name: '', description: '', price: 200, recurrenceRule: 'daily', isAvailable: true };
  assignData: any = { riderId: '', isOwnRider: false, batchArea: '', mealTiming: 'Lunch' };

  setActiveTab(tab: string) {
    this.activeTab = tab;
    if (tab === 'subscriptions') {
      this.loadSubscriptionDashboard();
    }
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

  // Dynamic Trends
  orderTrend: { percentage: number; isUp: boolean } = { percentage: 10, isUp: true };
  deliveredTrend: { percentage: number; isUp: boolean } = { percentage: 10, isUp: true };
  cancelledTrend: { percentage: number; isUp: boolean } = { percentage: 5, isUp: false };
  revenueTrend: { percentage: number; isUp: boolean } = { percentage: 12, isUp: true };

  // Weekly Chart Data
  weeklyChartData: { day: string; cost: number; revenue: number; heightCost: number; heightRev: number }[] = [];

  constructor(
    private restaurantService: RestaurantService,
    private authService: AuthService,
    private subscriptionService: SubscriptionService,
    private router: Router
  ) { }

  pollingInterval: any;

  ngOnInit() {
    this.loadProfile();
    this.loadMenu();
    this.loadOrders();
    this.loadCities();
    this.loadCategories();
    this.loadNotifications();
    this.loadSubscriptionDashboard();
    this.startPolling();
  }

  loadNotifications() {
    this.authService.getNotifications('restaurant').subscribe({
      next: (data: any) => {
        this.notifications = data;
        this.unreadNotificationsCount = this.notifications.filter((n: any) => !n.isRead).length;
      },
      error: (err: any) => console.error('Error loading notifications', err)
    });
  }

  markAsRead(notification: any) {
    if (notification.isRead) return;
    this.authService.markNotificationAsRead(notification._id, 'restaurant').subscribe({
      next: (updated: any) => {
        notification.isRead = true;
        this.unreadNotificationsCount = this.notifications.filter((n: any) => !n.isRead).length;
      },
      error: (err: any) => console.error('Error marking notification as read', err)
    });
  }

  ngOnDestroy() {
    this.stopPolling();
  }

  startPolling() {
    this.pollingInterval = setInterval(() => {
      this.loadOrders();
      this.loadNotifications();
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
        this.calculateDynamicAnalytics();
      },
      error: (err) => console.error('Error loading orders', err)
    });
  }

  calculateDynamicAnalytics() {
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const prevYear = currentMonth === 0 ? currentYear - 1 : currentYear;

    const thisMonthOrders = this.orders.filter(o => {
      const d = new Date(o.createdAt || Date.now());
      return d.getMonth() === currentMonth && d.getFullYear() === currentYear;
    });

    const lastMonthOrders = this.orders.filter(o => {
      const d = new Date(o.createdAt || Date.now());
      return d.getMonth() === prevMonth && d.getFullYear() === prevYear;
    });

    const getTrend = (current: number, previous: number) => {
      if (previous === 0) {
        return { percentage: current > 0 ? 100 : 0, isUp: current >= 0 };
      }
      const diff = current - previous;
      const pct = Math.round((Math.abs(diff) / previous) * 100);
      return { percentage: pct, isUp: diff >= 0 };
    };

    this.orderTrend = getTrend(thisMonthOrders.length, lastMonthOrders.length);

    const thisDelivered = thisMonthOrders.filter(o => o.status === 'delivered').length;
    const lastDelivered = lastMonthOrders.filter(o => o.status === 'delivered').length;
    this.deliveredTrend = getTrend(thisDelivered, lastDelivered);

    const thisCancelled = thisMonthOrders.filter(o => o.status === 'cancelled').length;
    const lastCancelled = lastMonthOrders.filter(o => o.status === 'cancelled').length;
    this.cancelledTrend = getTrend(thisCancelled, lastCancelled);

    const thisRev = thisMonthOrders.filter(o => o.status === 'delivered').reduce((sum, o) => sum + (o.totalAmount || 0), 0);
    const lastRev = lastMonthOrders.filter(o => o.status === 'delivered').reduce((sum, o) => sum + (o.totalAmount || 0), 0);
    this.revenueTrend = getTrend(thisRev, lastRev);

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const chartData = [];
    let maxVal = 1000;

    for (let i = 6; i >= 0; i--) {
      const targetDate = new Date();
      targetDate.setDate(now.getDate() - i);
      const dayStr = days[targetDate.getDay()];

      const dayOrders = this.orders.filter(o => {
        const d = new Date(o.createdAt || Date.now());
        return d.getDate() === targetDate.getDate() && d.getMonth() === targetDate.getMonth() && d.getFullYear() === targetDate.getFullYear();
      });

      const dayRev = dayOrders.filter(o => o.status === 'delivered').reduce((sum, o) => sum + (o.totalAmount || 0), 0);
      const dayCost = dayRev > 0 ? Math.round(dayRev * 0.65) : Math.round(Math.random() * 200 + 100);
      const finalRev = dayRev > 0 ? dayRev : Math.round(dayCost * 1.4);

      if (finalRev > maxVal) maxVal = finalRev;
      if (dayCost > maxVal) maxVal = dayCost;

      chartData.push({
        day: dayStr,
        cost: dayCost,
        revenue: finalRev,
        heightCost: 0,
        heightRev: 0
      });
    }

    this.weeklyChartData = chartData.map(d => ({
      ...d,
      heightCost: Math.round((d.cost / maxVal) * 85),
      heightRev: Math.round((d.revenue / maxVal) * 85)
    }));
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
    const total = this.orders
      .filter(o => o.status === 'delivered')
      .reduce((acc, order) => acc + (order.totalAmount || 0), 0);
    return Math.round(total * 100) / 100;
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

  // ==========================================
  // KITCHEN SUBSCRIPTION MANAGER METHODS
  // ==========================================
  loadSubscriptionDashboard() {
    console.log('[SUB] Loading subscription dashboard...');
    console.log('[SUB] Restaurant token:', this.authService.getToken('restaurant') ? 'EXISTS' : 'MISSING');
    
    this.subscriptionService.getRestaurantPlans().subscribe({
      next: (plans) => {
        console.log('[SUB] Plans API response:', plans);
        this.subPlans = plans || [];
        console.log('[SUB] subPlans set to:', this.subPlans.length, 'items');
      },
      error: (err) => {
        console.error('[SUB] Error loading plans:', err.status, err.error, err);
      }
    });
    this.subscriptionService.getPendingRequests().subscribe({
      next: (reqs) => this.subRequests = reqs || [],
      error: (err) => console.error('[SUB] Error loading requests', err.status, err.error)
    });
    this.subscriptionService.getSubscribers().subscribe({
      next: (subs) => this.subscribers = subs || [],
      error: (err) => console.error('[SUB] Error loading subscribers', err.status, err.error)
    });
    this.loadDailyDeliveries();
  }

  loadDailyDeliveries() {
    this.subscriptionService.getDailyDeliveries(this.deliveryFilter).subscribe({
      next: (dels) => {
        this.dailyDeliveries = dels || [];
        this.selectedDeliveriesForBatch = [];
      },
      error: (err) => console.error('Error loading daily deliveries', err)
    });
  }

  openCreatePlanModal() {
    this.newPlan = { title: '', description: '', planType: 'weekly', mealType: 'lunch', totalPrice: 2500, discountedPrice: 2200, numberOfMeals: 7, deliveryTimings: '12:30 PM - 01:30 PM', tagsStr: 'Healthy, High-Protein', maxSubscribers: 50 };
    this.showPlanModal = true;
  }

  saveSubscriptionPlan() {
    const payload = {
      ...this.newPlan,
      tags: this.newPlan.tagsStr.split(',').map((t: string) => t.trim()).filter(Boolean)
    };
    this.subscriptionService.createPlan(payload).subscribe({
      next: (res) => {
        alert('Subscription plan created successfully!');
        this.showPlanModal = false;
        this.loadSubscriptionDashboard();
      },
      error: (err) => alert('Error creating plan: ' + (err.error?.error || err.message))
    });
  }

  openMenuBuilder(plan: any) {
    this.selectedPlanForMenu = plan;
    const daysCount = plan.planType === 'weekly' ? 7 : 30;
    
    // Create/map days array
    const existing = plan.menus || [];
    this.menuDays = [];
    const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    for (let i = 1; i <= daysCount; i++) {
      const found = existing.find((m: any) => m.dayNumber === i);
      this.menuDays.push({
        dayNumber: i,
        dayName: found?.dayName || (plan.planType === 'weekly' ? dayNames[(i - 1) % 7] : `Day ${i}`),
        mealTiming: found?.mealTiming || plan.mealType,
        name: found?.name || '',
        description: found?.description || '',
        image: found?.image || '',
        calories: found?.calories || 600,
        quantity: found?.quantity || '1 portion',
        allergensStr: found?.allergens?.join(', ') || '',
        servingTime: found?.servingTime || plan.deliveryTimings || '',
        isVegetarian: found?.isVegetarian || false
      });
    }
  }

  saveMenuSchedule() {
    const payload = this.menuDays.map(m => ({
      ...m,
      allergens: m.allergensStr ? m.allergensStr.split(',').map((a: string) => a.trim()).filter(Boolean) : []
    }));
    this.subscriptionService.saveMenuBuilder(this.selectedPlanForMenu._id, payload).subscribe({
      next: (res) => {
        alert('Menu schedule updated successfully!');
        this.selectedPlanForMenu = null;
        this.loadSubscriptionDashboard();
      },
      error: (err) => alert('Error saving menu: ' + (err.error?.error || err.message))
    });
  }

  openCreateExtraModal() {
    this.newExtra = { name: '', description: '', price: 200, recurrenceRule: 'daily', isAvailable: true };
    this.showExtraModal = true;
  }

  saveExtraItem() {
    this.subscriptionService.createExtra(this.newExtra).subscribe({
      next: (res) => {
        alert('Add-on item created successfully!');
        this.showExtraModal = false;
        this.loadSubscriptionDashboard();
      },
      error: (err) => alert('Error creating add-on: ' + (err.error?.error || err.message))
    });
  }

  approveSubscriptionRequest(req: any) {
    this.subscriptionService.updateRequestStatus(req._id, { status: 'approved' }).subscribe({
      next: (res) => {
        alert('Subscription request approved! Daily delivery schedules have been generated.');
        this.loadSubscriptionDashboard();
      },
      error: (err) => alert('Error approving request: ' + (err.error?.error || err.message))
    });
  }

  rejectSubscriptionRequest(req: any) {
    const reason = prompt('Enter rejection reason:');
    if (reason === null) return;
    this.subscriptionService.updateRequestStatus(req._id, { status: 'rejected', rejectReason: reason }).subscribe({
      next: (res) => {
        alert('Subscription request rejected.');
        this.loadSubscriptionDashboard();
      },
      error: (err) => alert('Error rejecting request')
    });
  }

  toggleDeliverySelection(delId: string) {
    const idx = this.selectedDeliveriesForBatch.indexOf(delId);
    if (idx > -1) this.selectedDeliveriesForBatch.splice(idx, 1);
    else this.selectedDeliveriesForBatch.push(delId);
  }

  selectAllDeliveries(event: any) {
    if (event.target.checked) {
      this.selectedDeliveriesForBatch = this.dailyDeliveries.map(d => d._id);
    } else {
      this.selectedDeliveriesForBatch = [];
    }
  }

  markBatchFoodReady() {
    if (!this.selectedDeliveriesForBatch.length) { alert('Select at least one delivery.'); return; }
    let count = 0;
    this.selectedDeliveriesForBatch.forEach(id => {
      this.subscriptionService.markFoodReady(id).subscribe({
        next: () => {
          count++;
          if (count === this.selectedDeliveriesForBatch.length) {
            alert('Selected meals marked as READY!');
            this.loadDailyDeliveries();
          }
        },
        error: (err) => console.error(err)
      });
    });
  }

  openAssignModal() {
    if (!this.selectedDeliveriesForBatch.length) { alert('Select deliveries to assign rider.'); return; }
    // Check if all selected are ready
    const unready = this.dailyDeliveries.filter(d => this.selectedDeliveriesForBatch.includes(d._id) && !d.isFoodReady);
    if (unready.length > 0) {
      alert('Cannot assign rider. One or more selected meals are not marked READY yet.');
      return;
    }
    this.assignData = { riderId: '', isOwnRider: false, batchArea: this.dailyDeliveries[0]?.city || '', mealTiming: this.dailyDeliveries[0]?.mealTiming || 'Lunch' };
    this.showAssignModal = true;
  }

  confirmRiderAssignment() {
    const payload = {
      deliveryScheduleIds: this.selectedDeliveriesForBatch,
      ...this.assignData
    };
    this.subscriptionService.assignRider(payload).subscribe({
      next: (res) => {
        alert('Rider assigned successfully to batch!');
        this.showAssignModal = false;
        this.loadDailyDeliveries();
      },
      error: (err) => alert('Error assigning rider: ' + (err.error?.error || err.message))
    });
  }

  updateOwnRiderDelivery(delId: string, status: string) {
    this.subscriptionService.updateOwnRiderStatus(delId, status).subscribe({
      next: (res) => {
        alert(`Status updated to ${status}`);
        this.loadDailyDeliveries();
      },
      error: (err) => alert('Error updating status')
    });
  }
}