import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-subscription-browse',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './subscription-browse.component.html',
  styleUrls: ['./subscription-browse.component.css']
})
export class SubscriptionBrowseComponent implements OnInit {
  restaurants: any[] = [];
  selectedPlan: any = null;
  selectedRestaurant: any = null;
  showPlanDetails = false;
  showSubscribeModal = false;
  isLoading = false;
  errorMessage = '';

  subscribeForm = {
    startDate: '',
    endDate: '',
    deliveryAddress: '',
    city: '',
    phone: '',
    deliveryInstructions: '',
    totalAmount: 0
  };

  planType = 'all';
  mealType = 'all';
  searchQuery = '';

  constructor(
    private customerService: CustomerService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadSubscriptionRestaurants();
  }

  loadSubscriptionRestaurants() {
    this.isLoading = true;
    this.customerService.getSubscriptionRestaurants(this.planType, this.mealType, this.searchQuery).subscribe({
      next: (data) => {
        this.restaurants = data.restaurants;
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Failed to load subscription restaurants';
        this.isLoading = false;
      }
    });
  }

  viewRestaurantPlans(restaurant: any) {
    this.selectedRestaurant = restaurant;
    this.isLoading = true;
    this.customerService.getRestaurantSubscriptionDetails(restaurant._id).subscribe({
      next: (data) => {
        this.selectedRestaurant = { ...restaurant, ...data };
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Failed to load restaurant details';
        this.isLoading = false;
      }
    });
  }

  viewPlanDetails(plan: any) {
    this.selectedPlan = plan;
    this.showPlanDetails = true;
  }

  closePlanDetails() {
    this.showPlanDetails = false;
  }

  openSubscribeModal(plan: any) {
    this.selectedPlan = plan;
    const user = this.authService.getCurrentUser();
    this.subscribeForm = {
      startDate: '',
      endDate: '',
      deliveryAddress: user?.address || '',
      city: user?.city || '',
      phone: user?.phone || '',
      deliveryInstructions: '',
      totalAmount: plan.discountedPrice || plan.totalPrice
    };
    this.showSubscribeModal = true;
  }

  closeSubscribeModal() {
    this.showSubscribeModal = false;
  }

  subscribe() {
    if (!this.subscribeForm.startDate || !this.subscribeForm.endDate || !this.subscribeForm.deliveryAddress || !this.subscribeForm.phone) {
      this.errorMessage = 'All fields are required';
      return;
    }

    const payload = {
      restaurantId: this.selectedRestaurant._id,
      planId: this.selectedPlan._id,
      startDate: this.subscribeForm.startDate,
      endDate: this.subscribeForm.endDate,
      preferredMealTimings: this.selectedPlan.deliveryTimings,
      deliveryAddress: this.subscribeForm.deliveryAddress,
      city: this.subscribeForm.city,
      phone: this.subscribeForm.phone,
      deliveryInstructions: this.subscribeForm.deliveryInstructions,
      totalAmount: this.subscribeForm.totalAmount,
      extras: []
    };

    this.isLoading = true;
    this.customerService.subscribeToMealPlan(payload).subscribe({
      next: (data) => {
        this.isLoading = false;
        alert('Subscription request submitted! Waiting for restaurant approval.');
        this.showSubscribeModal = false;
        this.router.navigate(['/customer/my-subscriptions']);
      },
      error: (err) => {
        this.errorMessage = err?.error?.error || 'Failed to subscribe';
        this.isLoading = false;
      }
    });
  }

  goBack() {
    this.selectedRestaurant = null;
  }

  search() {
    this.loadSubscriptionRestaurants();
  }
}
