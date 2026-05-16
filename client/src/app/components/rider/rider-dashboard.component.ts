import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RiderService } from '../../services/rider.service';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rider-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rider-dashboard.component.html',
  styleUrls: ['./rider-dashboard.component.css']
})
export class RiderDashboardComponent implements OnInit {
  riderProfile: any = null;
  assignedOrder: any = null;
  cities: any[] = [];
  selectedCity = '';
  isReady = false;
  assignmentTimer: any;
  assignmentTimeLeft = 60;
  assignmentInterval: any;
  activeTab = 'requests';

  constructor(
    private riderService: RiderService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadProfile();
    this.loadCities();
    this.startAssignmentPolling();
  }

  ngOnDestroy() {
    if (this.assignmentInterval) clearInterval(this.assignmentInterval);
  }

  loadProfile() {
    this.riderService.getRiderProfile().subscribe({
      next: (data) => {
        this.riderProfile = data;
        this.isReady = data.isReady;
        this.selectedCity = data.city;
      },
      error: (err) => console.error('Error loading profile', err)
    });
  }

  loadCities() {
    this.riderService.getAvailableCities().subscribe({
      next: (data) => this.cities = data,
      error: (err) => console.error('Error loading cities', err)
    });
  }

  toggleReady() {
    if (!this.selectedCity) {
      alert('Please select a city first');
      return;
    }
    this.isReady = !this.isReady;
    this.riderService.updateStatus(this.isReady, this.selectedCity).subscribe({
      next: (data) => {
        this.riderProfile = data;
        alert(this.isReady ? 'You are now ready for rides!' : 'You are now offline');
      },
      error: (err) => {
        this.isReady = !this.isReady;
        alert('Error updating status');
      }
    });
  }

  startAssignmentPolling() {
    // Check for new assignments every 10 seconds
    this.assignmentInterval = setInterval(() => {
      this.checkAssignment();
    }, 10000);
    this.checkAssignment();
  }

  checkAssignment() {
    this.riderService.getAssignment().subscribe({
      next: (order) => {
        if (order) {
          this.assignedOrder = order;
          if (['ready', 'preparing'].includes(order.status) && !order.riderId) {
            this.startTimer();
          } else {
            this.stopTimer();
          }
        } else {
          this.assignedOrder = null;
          this.stopTimer();
        }
      },
      error: (err) => console.error('Error checking assignment', err)
    });
  }

  startTimer() {
    if (this.assignmentTimer) return;
    this.assignmentTimeLeft = 60;
    this.assignmentTimer = setInterval(() => {
      this.assignmentTimeLeft--;
      if (this.assignmentTimeLeft <= 0) {
        this.stopTimer();
        this.rejectOrder(true);
      }
    }, 1000);
  }

  stopTimer() {
    if (this.assignmentTimer) {
      clearInterval(this.assignmentTimer);
      this.assignmentTimer = null;
    }
  }

  acceptOrder() {
    if (!this.assignedOrder) return;
    this.riderService.acceptAssignment(this.assignedOrder._id).subscribe({
      next: () => {
        alert('Order accepted!');
        this.stopTimer();
        this.checkAssignment();
      },
      error: (err) => alert(err.error?.error || 'Error accepting order')
    });
  }

  rejectOrder(isAuto = false) {
    if (!this.assignedOrder) return;
    this.riderService.rejectAssignment(this.assignedOrder._id).subscribe({
      next: () => {
        if (!isAuto) {
          alert('Order rejected and passed to next rider.');
        }
        this.assignedOrder = null;
        this.stopTimer();
        this.checkAssignment();
      },
      error: (err) => alert(err.error?.error || 'Error rejecting order')
    });
  }

  updateStatus(status: string) {
    if (!this.assignedOrder) return;
    this.riderService.updateOrderStatus(this.assignedOrder._id, status).subscribe({
      next: () => {
        alert(`Status updated to ${status}`);
        this.checkAssignment();
        this.loadProfile();
      },
      error: (err) => alert('Error updating status')
    });
  }

  logout() {
    this.authService.logout('rider');
    this.router.navigate(['/login/rider']);
  }
}
