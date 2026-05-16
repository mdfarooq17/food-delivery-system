import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RiderService {
  private apiUrl = 'http://localhost:5000/api/rider';

  constructor(private http: HttpClient, private authService: AuthService) { }

  private getHeaders() {
    const token = this.authService.getToken('rider');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  getRiderProfile(): Observable<any> {
    return this.http.get(`${this.apiUrl}/profile`, { headers: this.getHeaders() });
  }

  getAvailableCities(): Observable<any> {
    return this.http.get(`${this.apiUrl}/cities`, { headers: this.getHeaders() });
  }

  updateStatus(isReady: boolean, city: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/status`, { isReady, city }, { headers: this.getHeaders() });
  }

  getAssignment(): Observable<any> {
    return this.http.get(`${this.apiUrl}/assignment`, { headers: this.getHeaders() });
  }

  acceptAssignment(orderId: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/order/${orderId}/accept`, {}, { headers: this.getHeaders() });
  }

  updateOrderStatus(orderId: string, status: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/order/${orderId}/status`, { status }, { headers: this.getHeaders() });
  }
}
