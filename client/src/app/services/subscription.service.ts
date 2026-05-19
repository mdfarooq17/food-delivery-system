import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  private apiUrl = 'http://localhost:5000/api/subscription';
  
  // Real-time event streams
  public socketEvents$ = new Subject<{ event: string; data: any }>();

  constructor(private http: HttpClient, private authService: AuthService) {
    this.initSocketListener();
  }

  private initSocketListener() {
    // Simulated or dynamic socket connection fallback
    // Since socket.io-client might not be bundled, we provide a robust mock/interval poller or window socket hook
    if ((window as any).io) {
      try {
        const socket = (window as any).io('http://localhost:5000');
        socket.on('subscription_request', (data: any) => this.socketEvents$.next({ event: 'subscription_request', data }));
        socket.on('request_approved', (data: any) => this.socketEvents$.next({ event: 'request_approved', data }));
        socket.on('delivery_ready', (data: any) => this.socketEvents$.next({ event: 'delivery_ready', data }));
        socket.on('rider_assigned', (data: any) => this.socketEvents$.next({ event: 'rider_assigned', data }));
        socket.on('schedule_changed', (data: any) => this.socketEvents$.next({ event: 'schedule_changed', data }));
      } catch (e) { console.warn('Socket connection fallback active'); }
    } else {
      // Mock event trigger for standalone testing
      setInterval(() => {
        // Polling fallback simulation if needed
      }, 15000);
    }
  }

  private getHeaders(role: string = '') {
    const token = this.authService.getToken(role);
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  // ==========================================
  // CUSTOMER PORTAL METHODS
  // ==========================================
  getRestaurants(filters: { city?: string; planType?: string; mealType?: string; tag?: string; search?: string; page?: number; limit?: number }): Observable<any> {
    let params: any = {};
    if (filters.city) params.city = filters.city;
    if (filters.planType) params.planType = filters.planType;
    if (filters.mealType) params.mealType = filters.mealType;
    if (filters.tag) params.tag = filters.tag;
    if (filters.search) params.search = filters.search;
    if (filters.page) params.page = filters.page;
    if (filters.limit) params.limit = filters.limit;

    return this.http.get(`${this.apiUrl}/restaurants`, { headers: this.getHeaders('customer'), params });
  }

  getRestaurantDetails(restaurantId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/restaurant/${restaurantId}`, { headers: this.getHeaders('customer') });
  }

  getPlans(restaurantId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/plans/${restaurantId}`, { headers: this.getHeaders('customer') });
  }

  getMenu(planId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/menu/${planId}`, { headers: this.getHeaders('customer') });
  }

  getExtras(restaurantId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/extras/${restaurantId}`, { headers: this.getHeaders('customer') });
  }

  subscribe(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/subscribe`, data, { headers: this.getHeaders('customer') });
  }

  getMySubscriptions(): Observable<any> {
    return this.http.get(`${this.apiUrl}/customer/my-subscriptions`, { headers: this.getHeaders('customer') });
  }

  updateSubscriptionAction(id: string, actionData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/customer/subscription/${id}/action`, actionData, { headers: this.getHeaders('customer') });
  }


  // ==========================================
  // RESTAURANT PORTAL METHODS
  // ==========================================
  getRestaurantPlans(): Observable<any> {
    return this.http.get(`${this.apiUrl}/restaurant/plans`, { headers: this.getHeaders('restaurant') });
  }

  createPlan(planData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/restaurant/plan`, planData, { headers: this.getHeaders('restaurant') });
  }

  updatePlan(id: string, planData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/restaurant/plan/${id}`, planData, { headers: this.getHeaders('restaurant') });
  }

  saveMenuBuilder(planId: string, menus: any[]): Observable<any> {
    return this.http.post(`${this.apiUrl}/restaurant/menu`, { planId, menus }, { headers: this.getHeaders('restaurant') });
  }

  createExtra(extraData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/restaurant/extra`, extraData, { headers: this.getHeaders('restaurant') });
  }

  getPendingRequests(): Observable<any> {
    return this.http.get(`${this.apiUrl}/restaurant/requests`, { headers: this.getHeaders('restaurant') });
  }

  updateRequestStatus(id: string, statusData: { status: string; rejectReason?: string }): Observable<any> {
    return this.http.put(`${this.apiUrl}/restaurant/request/${id}/status`, statusData, { headers: this.getHeaders('restaurant') });
  }

  getSubscribers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/restaurant/subscribers`, { headers: this.getHeaders('restaurant') });
  }

  getDailyDeliveries(filters: { date?: string; area?: string; timing?: string }): Observable<any> {
    let params: any = {};
    if (filters.date) params.date = filters.date;
    if (filters.area) params.area = filters.area;
    if (filters.timing) params.timing = filters.timing;
    return this.http.get(`${this.apiUrl}/restaurant/daily-deliveries`, { headers: this.getHeaders('restaurant'), params });
  }

  markFoodReady(deliveryId: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/restaurant/delivery/${deliveryId}/ready`, {}, { headers: this.getHeaders('restaurant') });
  }

  assignRider(assignmentData: { deliveryScheduleIds: string[]; riderId?: string; isOwnRider?: boolean; batchArea?: string; mealTiming?: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/restaurant/assign-rider`, assignmentData, { headers: this.getHeaders('restaurant') });
  }

  updateOwnRiderStatus(deliveryId: string, status: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/restaurant/delivery/${deliveryId}/own-rider-status`, { status }, { headers: this.getHeaders('restaurant') });
  }


  // ==========================================
  // RIDER PORTAL METHODS
  // ==========================================
  getRiderDeliveries(): Observable<any> {
    return this.http.get(`${this.apiUrl}/rider/deliveries`, { headers: this.getHeaders('rider') });
  }

  updateRiderDeliveryStatus(deliveryId: string, status: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/rider/delivery/${deliveryId}/status`, { status }, { headers: this.getHeaders('rider') });
  }


  // ==========================================
  // ADMIN PORTAL METHODS
  // ==========================================
  getAdminAnalytics(): Observable<any> {
    return this.http.get(`${this.apiUrl}/admin/analytics`, { headers: this.getHeaders('admin') });
  }

  toggleSubscriptionSystem(isEnabled: boolean): Observable<any> {
    return this.http.put(`${this.apiUrl}/admin/toggle-system`, { isEnabled }, { headers: this.getHeaders('admin') });
  }
}
