import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private apiUrl = 'http://localhost:5000/api/restaurant';

  constructor(private http: HttpClient) { }

  private getHeaders() {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
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
}