import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl = 'http://localhost:5000/api/customer';

  constructor(private http: HttpClient, private authService: AuthService) { }

  search(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/search?query=${query}`);
  }

  private getHeaders() {
    const token = this.authService.getToken('customer');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  getRestaurants(): Observable<any> {
    return this.http.get(`${this.apiUrl}/restaurants`);
  }

  getRestaurantMenu(restaurantId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/restaurant/${restaurantId}/menu`);
  }

  getRandomMenuItems(): Observable<any> {
    return this.http.get(`${this.apiUrl}/menu-items/random`);
  }

  placeOrder(order: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/order`, order, { headers: this.getHeaders() });
  }

  getOrders(): Observable<any> {
    return this.http.get(`${this.apiUrl}/orders`, { headers: this.getHeaders() });
  }

  getOrderDetails(orderId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/order/${orderId}`, { headers: this.getHeaders() });
  }
}