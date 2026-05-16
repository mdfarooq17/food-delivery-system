import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api/auth';
  
  // Subjects for multi-role support
  private roleSubjects: { [key: string]: BehaviorSubject<any> } = {
    customer: new BehaviorSubject<any>(null),
    restaurant: new BehaviorSubject<any>(null),
    rider: new BehaviorSubject<any>(null),
    admin: new BehaviorSubject<any>(null)
  };

  public customer$ = this.roleSubjects['customer'].asObservable();
  public restaurant$ = this.roleSubjects['restaurant'].asObservable();
  public rider$ = this.roleSubjects['rider'].asObservable();
  public admin$ = this.roleSubjects['admin'].asObservable();

  // Primary stream for backward compatibility (defaults to customer)
  public currentUser = this.customer$;

  constructor(private http: HttpClient) {
    this.initSessions();
  }

  private initSessions() {
    ['customer', 'restaurant', 'rider', 'admin'].forEach(role => {
      const storage = role === 'admin' ? sessionStorage : localStorage;
      const saved = storage.getItem(`${role}_session`);
      if (saved) {
        this.roleSubjects[role].next(JSON.parse(saved).user);
      }
    });
  }

  // Compatibility getter for existing code
  public get currentUserValue(): any {
    // Return any active session, prioritizing customer
    return this.roleSubjects['customer'].value || 
           this.roleSubjects['restaurant'].value || 
           this.roleSubjects['rider'].value || 
           this.roleSubjects['admin'].value;
  }

  // Role-specific getters
  public getUserRoleValue(role: string): any {
    return this.roleSubjects[role]?.value;
  }

  register(name: string, email: string, password: string, role: string, city: string = '') {
    return this.http.post(`${this.apiUrl}/register`, { name, email, password, role, city });
  }

  getCities(): Observable<any> {
    return this.http.get(`${this.apiUrl}/cities`);
  }

  getCategories(): Observable<any> {
    return this.http.get(`${this.apiUrl}/categories`);
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password }).pipe(
      tap(response => {
        if (response && response.token) {
          const role = response.user.role;
          const storage = role === 'admin' ? sessionStorage : localStorage;
          
          storage.setItem(`${role}_session`, JSON.stringify(response));
          storage.setItem(`${role}_token`, response.token);
          this.roleSubjects[role].next(response.user);
        }
      })
    );
  }

  getToken(role: string = ''): string | null {
    if (role) {
      const storage = role === 'admin' ? sessionStorage : localStorage;
      return storage.getItem(`${role}_token`);
    }
    // Fallback for general calls
    return localStorage.getItem('customer_token') || 
           localStorage.getItem('restaurant_token') || 
           localStorage.getItem('rider_token') || 
           sessionStorage.getItem('admin_token');
  }

  me(role: string = 'customer'): Observable<any> {
    const token = this.getToken(role);
    return this.http.get<any>(`${this.apiUrl}/me`, {
      headers: { Authorization: `Bearer ${token}` }
    });
  }

  changePassword(data: { currentPassword: string; newPassword: string }, role: string = 'customer'): Observable<any> {
    const token = this.getToken(role);
    return this.http.put<any>(`${this.apiUrl}/change-password`, data, {
      headers: { Authorization: `Bearer ${token}` }
    });
  }

  logout(role: string = '') {
    if (role) {
      const storage = role === 'admin' ? sessionStorage : localStorage;
      storage.removeItem(`${role}_session`);
      storage.removeItem(`${role}_token`);
      this.roleSubjects[role].next(null);
    } else {
      // Logout all
      ['customer', 'restaurant', 'rider', 'admin'].forEach(r => this.logout(r));
    }
  }

  // Needed for profile updates
  updateProfile(userData: any, role: string = 'customer'): Observable<any> {
    const token = this.getToken(role);
    return this.http.put<any>(`${this.apiUrl}/update-profile`, userData, {
      headers: { Authorization: `Bearer ${token}` }
    }).pipe(
      tap(user => {
        const storage = role === 'admin' ? sessionStorage : localStorage;
        const saved = JSON.parse(storage.getItem(`${role}_session`) || '{}');
        saved.user = user;
        storage.setItem(`${role}_session`, JSON.stringify(saved));
        this.roleSubjects[role].next(user);
      })
    );
  }
}