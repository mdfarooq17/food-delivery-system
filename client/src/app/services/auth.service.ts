import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api/auth';
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) {
    const savedUser = localStorage.getItem('currentUser');
    this.currentUserSubject = new BehaviorSubject<any>(savedUser ? JSON.parse(savedUser).user : null);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  register(name: string, email: string, password: string, role: string) {
    return this.http.post(`${this.apiUrl}/register`, { name, email, password, role });
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password }).pipe(
      tap(response => {
        if (response && response.token) {
          localStorage.setItem('currentUser', JSON.stringify(response));
          localStorage.setItem('token', response.token);
          this.currentUserSubject.next(response.user);
        }
      })
    );
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  me(): Observable<any> {
    const token = this.getToken();
    return this.http.get<any>(`${this.apiUrl}/me`, {
      headers: { Authorization: `Bearer ${token}` }
    });
  }

  updateProfile(userData: any): Observable<any> {
    const token = this.getToken();
    return this.http.put<any>(`${this.apiUrl}/update-profile`, userData, {
      headers: { Authorization: `Bearer ${token}` }
    }).pipe(
      tap(user => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
        currentUser.user = user;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        this.currentUserSubject.next(user);
      })
    );
  }

  changePassword(data: { currentPassword: string; newPassword: string }): Observable<any> {
    const token = this.getToken();
    return this.http.put<any>(`${this.apiUrl}/change-password`, data, {
      headers: { Authorization: `Bearer ${token}` }
    });
  }

  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    this.currentUserSubject.next(null);
  }
}