import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RiderService {
  private apiUrl = 'http://localhost:5000/api/rider';

  constructor(private http: HttpClient) { }

  private getHeaders() {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  getAvailableOrders(): Observable<any> {
    return this.http.get(`${this.apiUrl}/orders/available`, { headers: this.getHeaders() });
  }

  getMyDeliveries(): Observable<any> {
    return this.http.get(`${this.apiUrl}/orders/my-deliveries`, { headers: this.getHeaders() });
  }

  acceptOrder(orderId: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/order/${orderId}/accept`, {}, { headers: this.getHeaders() });
  }

  updateOrderStatus(orderId: string, status: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/order/${orderId}/status`, { status }, { headers: this.getHeaders() });
  }
}
