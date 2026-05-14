import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RiderService } from '../../services/rider.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-rider-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rider-dashboard.component.html',
  styleUrls: ['./rider-dashboard.component.css']
})
export class RiderDashboardComponent implements OnInit {
  availableOrders: any[] = [];
  myDeliveries: any[] = [];
  activeTab = 'available';

  constructor(
    private riderService: RiderService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadAvailableOrders();
    this.loadMyDeliveries();
  }

  loadAvailableOrders() {
    this.riderService.getAvailableOrders().subscribe(
      (data: any) => { this.availableOrders = data; },
      (error: any) => console.error('Error loading available orders', error)
    );
  }

  loadMyDeliveries() {
    this.riderService.getMyDeliveries().subscribe(
      (data: any) => { this.myDeliveries = data; },
      (error: any) => console.error('Error loading my deliveries', error)
    );
  }

  acceptOrder(order: any) {
    this.riderService.acceptOrder(order._id).subscribe(
      (response: any) => {
        alert('Order accepted! It has been moved to your deliveries.');
        this.loadAvailableOrders();
        this.loadMyDeliveries();
      },
      (error: any) => alert('Error accepting order: ' + error.error.error)
    );
  }

  updateOrderStatus(order: any, status: string) {
    this.riderService.updateOrderStatus(order._id, status).subscribe(
      (response: any) => {
        alert(`Order marked as ${status}!`);
        this.loadMyDeliveries();
      },
      (error: any) => alert('Error updating order: ' + error.error.error)
    );
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
    if (tab === 'available') this.loadAvailableOrders();
    if (tab === 'my-deliveries') this.loadMyDeliveries();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
