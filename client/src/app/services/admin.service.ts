import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'http://localhost:5000/api/admin';

  constructor(private http: HttpClient) { }

  private getHeaders() {
    const token = localStorage.getItem('admin_token') || sessionStorage.getItem('admin_token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  getAllUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/users`, { headers: this.getHeaders() });
  }

  getAllRestaurants(): Observable<any> {
    return this.http.get(`${this.apiUrl}/restaurants`, { headers: this.getHeaders() });
  }

  updateRestaurantStatus(restaurantId: string, isActive: boolean): Observable<any> {
    return this.http.put(`${this.apiUrl}/restaurant/${restaurantId}/status`, { isActive }, { headers: this.getHeaders() });
  }

  getAllOrders(): Observable<any> {
    return this.http.get(`${this.apiUrl}/orders`, { headers: this.getHeaders() });
  }

  getDashboardStats(): Observable<any> {
    return this.http.get(`${this.apiUrl}/stats`, { headers: this.getHeaders() });
  }

  getCities(): Observable<any> {
    return this.http.get(`${this.apiUrl}/cities`, { headers: this.getHeaders() });
  }

  addCity(name: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/cities`, { name }, { headers: this.getHeaders() });
  }

  updateCityStatus(id: string, isActive: boolean): Observable<any> {
    return this.http.put(`${this.apiUrl}/cities/${id}`, { isActive }, { headers: this.getHeaders() });
  }

  deleteCity(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/cities/${id}`, { headers: this.getHeaders() });
  }

  getCategories(): Observable<any> {
    return this.http.get(`${this.apiUrl}/categories`, { headers: this.getHeaders() });
  }

  addCategory(name: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/categories`, { name }, { headers: this.getHeaders() });
  }

  deleteCategory(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/categories/${id}`, { headers: this.getHeaders() });
  }

  // --- Users ---
  addUser(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/users`, user, { headers: this.getHeaders() });
  }

  updateUser(id: string, user: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/users/${id}`, user, { headers: this.getHeaders() });
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/users/${id}`, { headers: this.getHeaders() });
  }

  // --- Restaurants ---
  updateRestaurant(id: string, restaurant: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/restaurants/${id}`, restaurant, { headers: this.getHeaders() });
  }

  deleteRestaurant(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/restaurants/${id}`, { headers: this.getHeaders() });
  }

  // --- Feedbacks ---
  getFeedbacks(): Observable<any> {
    return this.http.get(`${this.apiUrl}/feedbacks`, { headers: this.getHeaders() });
  }

  updateFeedbackStatus(id: string, status: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/feedbacks/${id}/status`, { status }, { headers: this.getHeaders() });
  }

  // --- Notifications ---
  getNotifications(): Observable<any> {
    return this.http.get(`${this.apiUrl}/notifications`, { headers: this.getHeaders() });
  }

  sendNotification(notif: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/notifications`, notif, { headers: this.getHeaders() });
  }

  deleteNotification(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/notifications/${id}`, { headers: this.getHeaders() });
  }

  // --- Sliders ---
  getSliders(): Observable<any> {
    return this.http.get(`${this.apiUrl}/sliders`, { headers: this.getHeaders() });
  }

  addSlider(slider: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/sliders`, slider, { headers: this.getHeaders() });
  }

  updateSlider(id: string, slider: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/sliders/${id}`, slider, { headers: this.getHeaders() });
  }

  deleteSlider(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/sliders/${id}`, { headers: this.getHeaders() });
  }

  // --- Security Logs ---
  getSecurityLogs(): Observable<any> {
    return this.http.get(`${this.apiUrl}/security-logs`, { headers: this.getHeaders() });
  }

  markSecurityLogsAsRead(): Observable<any> {
    return this.http.put(`${this.apiUrl}/security-logs/mark-read`, {}, { headers: this.getHeaders() });
  }

  blockSecurityIP(ipAddress: string, email?: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/security/block-ip`, { ipAddress, email }, { headers: this.getHeaders() });
  }

  forceLogoutUser(email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/security/force-logout`, { email }, { headers: this.getHeaders() });
  }

  deleteSecurityLog(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/security-logs/${id}`, { headers: this.getHeaders() });
  }

  // --- User Activity & Audit Logs ---
  getUserLogs(): Observable<any> {
    return this.http.get(`${this.apiUrl}/user-logs`, { headers: this.getHeaders() });
  }

  getUserAuditSummary(): Observable<any> {
    return this.http.get(`${this.apiUrl}/user-audit-summary`, { headers: this.getHeaders() });
  }

  deleteUserLog(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/user-logs/${id}`, { headers: this.getHeaders() });
  }

  clearUserLogs(): Observable<any> {
    return this.http.post(`${this.apiUrl}/user-logs/clear`, {}, { headers: this.getHeaders() });
  }

  resetUserAuditCounter(userId: string, type: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/user-audit/reset-attempts`, { userId, type }, { headers: this.getHeaders() });
  }

  getUserDetails(userId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/users/${userId}/details`, { headers: this.getHeaders() });
  }
}