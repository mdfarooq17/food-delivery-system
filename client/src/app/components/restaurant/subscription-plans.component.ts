import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RestaurantService } from '../../services/restaurant.service';

@Component({
  selector: 'app-subscription-plans',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './subscription-plans.component.html',
  styleUrls: ['./subscription-plans.component.css']
})
export class SubscriptionPlansComponent implements OnInit {
  plans: any[] = [];
  filteredPlans: any[] = [];
  selectedPlan: any = null;
  showPlanModal = false;
  showMenuModal = false;
  menus: any[] = [];
  isLoading = false;
  errorMessage = '';

  newPlan = {
    title: '',
    description: '',
    planType: 'weekly', // weekly or monthly
    mealType: 'lunch', // breakfast, lunch, dinner, all-day
    totalPrice: 0,
    discountedPrice: 0,
    numberOfMeals: 7,
    deliveryTimings: '12:30 PM - 01:30 PM',
    deliveryZones: [],
    tags: [],
    maxSubscribers: 50,
    includedServices: []
  };

  mealDays: number[] = [];

  constructor(private restaurantService: RestaurantService, private router: Router) {}

  ngOnInit() {
    this.loadPlans();
  }

  loadPlans() {
    this.isLoading = true;
    this.restaurantService.getSubscriptionPlans().subscribe({
      next: (data) => {
        const plans = Array.isArray(data) ? data : data?.plans || [];
        this.plans = plans;
        this.filteredPlans = plans;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error loading plans', err);
        this.errorMessage = 'Failed to load subscription plans';
        this.isLoading = false;
      }
    });
  }

  openPlanModal() {
    this.selectedPlan = null;
    this.newPlan = {
      title: '',
      description: '',
      planType: 'weekly',
      mealType: 'lunch',
      totalPrice: 0,
      discountedPrice: 0,
      numberOfMeals: 7,
      deliveryTimings: '12:30 PM - 01:30 PM',
      deliveryZones: [],
      tags: [],
      maxSubscribers: 50,
      includedServices: []
    };
    this.showPlanModal = true;
  }

  closePlanModal() {
    this.showPlanModal = false;
  }

  savePlan() {
    if (!this.newPlan.title || !this.newPlan.totalPrice || !this.newPlan.discountedPrice) {
      this.errorMessage = 'Title, Total Price, and Discounted Price are required';
      return;
    }

    this.isLoading = true;
    this.restaurantService.createSubscriptionPlan(this.newPlan).subscribe({
      next: (data) => {
        this.plans.push(data.plan);
        this.filteredPlans = this.plans;
        this.showPlanModal = false;
        this.isLoading = false;
        alert('Plan created successfully!');
      },
      error: (err) => {
        this.errorMessage = err?.error?.error || 'Failed to create plan';
        this.isLoading = false;
      }
    });
  }

  editPlan(plan: any) {
    this.selectedPlan = { ...plan };
    this.newPlan = { ...plan };
    this.showPlanModal = true;
  }

  formatDeliverySummary(plan: any): string {
    if (plan?.deliveryTimings) return plan.deliveryTimings;
    if (Array.isArray(plan?.mealTimings) && plan.mealTimings.length > 0) {
      return plan.mealTimings
        .map((mt: any) => `${mt.mealType.charAt(0).toUpperCase() + mt.mealType.slice(1)} ${mt.deliveryTime}`)
        .join(', ');
    }
    return 'Not specified';
  }

  updatePlan() {
    if (!this.selectedPlan) return;

    this.isLoading = true;
    this.restaurantService.updateSubscriptionPlan(this.selectedPlan._id, this.newPlan).subscribe({
      next: (data) => {
        const index = this.plans.findIndex(p => p._id === this.selectedPlan._id);
        if (index !== -1) {
          this.plans[index] = data.plan;
          this.filteredPlans = this.plans;
        }
        this.showPlanModal = false;
        this.isLoading = false;
        alert('Plan updated successfully!');
      },
      error: (err) => {
        this.errorMessage = err?.error?.error || 'Failed to update plan';
        this.isLoading = false;
      }
    });
  }

  deletePlan(id: string) {
    if (!confirm('Are you sure you want to delete this plan?')) return;

    this.restaurantService.deleteSubscriptionPlan(id).subscribe({
      next: () => {
        this.plans = this.plans.filter(p => p._id !== id);
        this.filteredPlans = this.plans;
        alert('Plan deleted successfully!');
      },
      error: (err) => alert('Error deleting plan')
    });
  }

  togglePlanActive(plan: any) {
    plan.isActive = !plan.isActive;
    this.restaurantService.updateSubscriptionPlan(plan._id, { isActive: plan.isActive }).subscribe({
      next: () => alert(`Plan ${plan.isActive ? 'activated' : 'deactivated'}`),
      error: (err) => alert('Error updating plan status')
    });
  }

  openMenuModal(plan: any) {
    this.selectedPlan = plan;
    this.mealDays = Array.from({ length: plan.numberOfMeals }, (_, i) => i + 1);
    this.loadMenus(plan._id);
    this.showMenuModal = true;
  }

  closeMenuModal() {
    this.showMenuModal = false;
    this.selectedPlan = null;
    this.menus = [];
  }

  loadMenus(planId: string) {
    this.restaurantService.getSubscriptionMenus(planId).subscribe({
      next: (data) => {
        this.menus = data;
      },
      error: (err) => console.error('Error loading menus', err)
    });
  }

  addMenuDay() {
    if (!this.selectedPlan) return;
    const nextDay = this.menus.length + 1;
    this.menus.push({
      dayNumber: nextDay,
      dayName: `Day ${nextDay}`,
      mealTiming: this.selectedPlan.mealType,
      name: '',
      description: '',
      image: '',
      calories: 0,
      ingredients: [],
      quantity: '1 portion',
      allergens: [],
      customNotes: '',
      servingTime: this.selectedPlan.deliveryTimings,
      portionSize: 'Regular',
      isVegetarian: false,
      spiceLevel: 'medium'
    });
  }

  deleteMenuDay(index: number) {
    this.menus.splice(index, 1);
  }

  saveMenus() {
    if (!this.selectedPlan) return;

    this.isLoading = true;
    this.restaurantService.saveSubscriptionMenus(this.selectedPlan._id, this.menus).subscribe({
      next: () => {
        this.showMenuModal = false;
        this.isLoading = false;
        alert('Menu saved successfully!');
      },
      error: (err) => {
        this.errorMessage = err?.error?.error || 'Failed to save menu';
        this.isLoading = false;
      }
    });
  }
}
