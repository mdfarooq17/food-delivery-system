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

  search(query: string, city?: string): Observable<any> {
    let url = `${this.apiUrl}/search?query=${encodeURIComponent(query)}`;
    if (city) {
      url += `&city=${encodeURIComponent(city)}`;
    }
    return this.http.get(url);
  }

  private getHeaders() {
    const token = this.authService.getToken('customer');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  getRestaurants(city?: string): Observable<any> {
    let url = `${this.apiUrl}/restaurants`;
    if (city) {
      url += `?city=${encodeURIComponent(city)}`;
    }
    return this.http.get(url);
  }

  getRestaurantMenu(restaurantId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/restaurant/${restaurantId}/menu`);
  }

  getRandomMenuItems(city?: string): Observable<any> {
    let url = `${this.apiUrl}/menu-items/random`;
    if (city) {
      url += `?city=${encodeURIComponent(city)}`;
    }
    return this.http.get(url);
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

  submitOrderReview(orderId: string, rating: number, comment: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/order/${orderId}/review`, { rating, comment }, { headers: this.getHeaders() });
  }

  getRestaurantReviews(restaurantId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/restaurant/${restaurantId}/reviews`);
  }

  getMenuItemReviews(menuItemId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/menu-item/${menuItemId}/reviews`);
  }
}