import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login.component';
import { RegisterComponent } from './components/register.component';
import { CustomerDashboardComponent } from './components/customer/customer-dashboard.component';
import { RestaurantDashboardComponent } from './components/restaurant/restaurant-dashboard.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard.component';
import { LoginCustomerComponent } from './components/auth/login-customer/login-customer.component';

const routes: Routes = [
  { path: '', redirectTo: '/customer', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login/customer', component: LoginCustomerComponent },
  { path: 'customer', component: CustomerDashboardComponent },
  { path: 'restaurant', component: RestaurantDashboardComponent },
  { path: 'admin', component: AdminDashboardComponent },
  { path: '**', redirectTo: '/customer' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }