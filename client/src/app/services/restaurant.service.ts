import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private apiUrl = 'http://localhost:5000/api/restaurant';

  constructor(private http: HttpClient, private authService: AuthService) { }

  private getHeaders() {
    const token = this.authService.getToken('restaurant');
    const headersConfig: { [key: string]: string } = {};
    if (token) {
      headersConfig['Authorization'] = `Bearer ${token}`;
    }
    return new HttpHeaders(headersConfig);
  }

  getProfile(): Observable<any> {
    return this.http.get(`${this.apiUrl}/profile`, { headers: this.getHeaders() });
  }

  updateProfile(profile: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/profile`, profile, { headers: this.getHeaders() });
  }

  addMenuItem(item: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/menu`, item, { headers: this.getHeaders() });
  }

  getMenu(): Observable<any> {
    return this.http.get(`${this.apiUrl}/menu`, { headers: this.getHeaders() });
  }

  updateMenuItem(itemId: string, item: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/menu/${itemId}`, item, { headers: this.getHeaders() });
  }

  getOrders(): Observable<any> {
    return this.http.get(`${this.apiUrl}/orders`, { headers: this.getHeaders() });
  }

  updateOrderStatus(orderId: string, status: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/order/${orderId}/status`, { status }, { headers: this.getHeaders() });
  }

  deleteMenuItem(itemId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/menu/${itemId}`, { headers: this.getHeaders() });
  }

  dispatchRider(orderId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/order/${orderId}/dispatch-rider`, {}, { headers: this.getHeaders() });
  }

  getItemReviews(menuItemId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/menu-item/${menuItemId}/reviews`, { headers: this.getHeaders() });
  }
}