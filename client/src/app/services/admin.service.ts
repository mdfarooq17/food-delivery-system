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
    const token = localStorage.getItem('token');
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
}