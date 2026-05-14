import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login.component';
import { RegisterComponent } from './components/register.component';
import { CustomerDashboardComponent } from './components/customer/customer-dashboard.component';
import { RestaurantDashboardComponent } from './components/restaurant/restaurant-dashboard.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard.component';
import { LoginCustomerComponent } from './components/auth/login-customer.component';
import { RiderDashboardComponent } from './components/rider/rider-dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login/customer', component: LoginCustomerComponent },
  { path: 'customer', component: CustomerDashboardComponent, canActivate: [AuthGuard], data: { roles: ['customer'] } },
  { path: 'restaurant', component: RestaurantDashboardComponent, canActivate: [AuthGuard], data: { roles: ['restaurant'] } },
  { path: 'admin', component: AdminDashboardComponent, canActivate: [AuthGuard], data: { roles: ['admin'] } },
  { path: 'rider', component: RiderDashboardComponent, canActivate: [AuthGuard], data: { roles: ['rider'] } },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }