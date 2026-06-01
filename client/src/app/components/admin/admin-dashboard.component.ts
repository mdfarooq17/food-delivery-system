import { Component, OnInit, OnDestroy, HostListener } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";
import { AdminService } from "../../services/admin.service";
import { AuthService } from "../../services/auth.service";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-admin-dashboard",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./admin-dashboard.component.html",
  styleUrls: ["./admin-dashboard.component.css"],
})
export class AdminDashboardComponent implements OnInit, OnDestroy {
  private timeoutId: any;
  private readonly INACTIVITY_TIME = 10 * 60 * 1000; // 10 Minutes
  stats: any = {
    totalUsers: 0,
    totalRestaurants: 0,
    totalOrders: 0,
    totalRevenue: 0,
  };

  users: any[] = [];
  filteredUsers: any[] = [];
  userTabRole = "all";
  userSearchQuery = "";
  userFilterCity = "all";
  userSortBy = "newest";
  restaurants: any[] = [];
  orders: any[] = [];
  categories: any[] = [];
  newCategoryName = "";
  cities: any[] = [];
  newCityName = "";
  activeTab = "stats";

  // --- New Admin Feature State ---
  generalFeedbacks: any[] = [];
  orderReviews: any[] = [];
  notifications: any[] = [];
  sliders: any[] = [];
  passwordRequests: any[] = [];
  filteredPasswordRequests: any[] = [];
  passwordRequestSearch = "";
  passwordRequestStatusFilter = "all";
  securityLogs: any[] = [];
  filteredSecurityLogs: any[] = [];
  highSeverityCount: number = 0;
  unreadSecurityCount: number = 0;
  securitySearchQuery = "";
  securityFilterSeverity = "all";

  // User Activity & Audit State
  userLogs: any[] = [];
  filteredUserLogs: any[] = [];
  userAuditSummary: any[] = [];
  selectedAuditUser: any = null;
  showAuditUserModal = false;
  userLogSearch = "";
  userLogFilterAction = "all";
  totalUserRequestsCount = 0;
  totalUserLoginAttempts = 0;
  multiDeviceUsersCount = 0;

  // User Modals
  showAddUserModal = false;
  showEditUserModal = false;
  showUserDetailsModal = false;
  inspectionData: any = null;
  loadingUserDetails = false;
  selectedUser: any = null;
  newUser = {
    name: "",
    email: "",
    password: "",
    role: "customer",
    phone: "",
    city: "",
  };

  // Password Request Modal
  selectedPasswordRequest: any = null;
  showPasswordRequestModal = false;
  newAdminMessage = "";

  // Restaurant Modals
  showEditResModal = false;
  selectedRestaurant: any = null;

  // Notification Form
  newNotification = {
    recipientId: "",
    title: "",
    message: "",
    type: "info",
    targetRole: "all",
  };

  // Slider Modals
  showAddSliderModal = false;
  showEditSliderModal = false;
  selectedSlider: any = null;
  newSlider = {
    badge: "FEATURED",
    title1: "",
    title2: "",
    description: "",
    price: "",
    image: "",
    thumb: "",
    isActive: true,
    order: 0,
  };

  constructor(
    private adminService: AdminService,
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.loadStats();
    this.loadUsers();
    this.loadRestaurants();
    this.loadOrders();
    this.loadCities();
    this.loadCategories();
    this.loadFeedbacks();
    this.loadNotifications();
    this.loadSliders();
    this.loadPasswordResetRequests();
    this.loadSecurityLogs();
    this.loadUserAuditData();
    this.resetTimer();
  }

  loadSecurityLogs() {
    this.adminService.getSecurityLogs().subscribe({
      next: (data) => {
        data.forEach((l: any) => {
          l.isNewlyUnread = !l.isRead;
        });
        this.securityLogs = data;
        this.filteredSecurityLogs = data;
        this.highSeverityCount = data.filter(
          (l: any) => l.severity === "high",
        ).length;
        this.unreadSecurityCount = data.filter((l: any) => !l.isRead).length;
      },
      error: (err) => console.error("Error loading security logs", err),
    });
  }

  filterSecurityLogs() {
    this.filteredSecurityLogs = this.securityLogs.filter((log) => {
      const matchQuery =
        !this.securitySearchQuery ||
        log.eventType
          ?.toLowerCase()
          .includes(this.securitySearchQuery.toLowerCase()) ||
        log.ipAddress
          ?.toLowerCase()
          .includes(this.securitySearchQuery.toLowerCase()) ||
        log.attemptedCredentials?.email
          ?.toLowerCase()
          .includes(this.securitySearchQuery.toLowerCase());

      const matchSeverity =
        this.securityFilterSeverity === "all" ||
        log.severity === this.securityFilterSeverity;

      return matchQuery && matchSeverity;
    });
  }

  loadCategories() {
    this.adminService.getCategories().subscribe({
      next: (data) => (this.categories = data),
      error: (err) => console.error("Error loading categories", err),
    });
  }

  addCategory() {
    if (!this.newCategoryName) return;
    this.adminService.addCategory(this.newCategoryName).subscribe({
      next: (cat) => {
        this.categories.push(cat);
        this.newCategoryName = "";
        alert("Category added!");
      },
      error: (err) => alert("Error adding category"),
    });
  }

  deleteCategory(id: string) {
    if (confirm("Are you sure?")) {
      this.adminService.deleteCategory(id).subscribe({
        next: () =>
          (this.categories = this.categories.filter((c) => c._id !== id)),
        error: (err) => alert("Error deleting category"),
      });
    }
  }

  @HostListener("window:mousemove")
  @HostListener("window:mousedown")
  @HostListener("window:keypress")
  @HostListener("window:scroll")
  @HostListener("window:touchstart")
  resetTimer() {
    if (this.timeoutId) clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => {
      this.logoutOnTimeout();
    }, this.INACTIVITY_TIME);
  }

  logoutOnTimeout() {
    alert(
      "Session expired due to 10 minutes of inactivity. Please login again.",
    );
    this.logout();
  }

  ngOnDestroy() {
    if (this.timeoutId) clearTimeout(this.timeoutId);
  }

  loadStats() {
    this.adminService.getDashboardStats().subscribe({
      next: (data) => (this.stats = data),
      error: (err) => console.error("Error loading stats", err),
    });
  }

  loadUsers() {
    this.adminService.getAllUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.filterUsers();
      },
      error: (err) => console.error("Error loading users", err),
    });
  }

  filterUsers() {
    this.filteredUsers = this.users.filter((u) => {
      const matchRole =
        this.userTabRole === "all" || u.role === this.userTabRole;
      const matchCity =
        this.userFilterCity === "all" ||
        (u.city && u.city.toLowerCase() === this.userFilterCity.toLowerCase());
      const matchQuery =
        !this.userSearchQuery ||
        u.name?.toLowerCase().includes(this.userSearchQuery.toLowerCase()) ||
        u.email?.toLowerCase().includes(this.userSearchQuery.toLowerCase()) ||
        u.phone?.toLowerCase().includes(this.userSearchQuery.toLowerCase());
      return matchRole && matchCity && matchQuery;
    });

    if (this.userSortBy === "newest") {
      this.filteredUsers.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );
    } else if (this.userSortBy === "oldest") {
      this.filteredUsers.sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
      );
    } else if (this.userSortBy === "orders_high") {
      this.filteredUsers.sort(
        (a, b) => (b.ordersCount || 0) - (a.ordersCount || 0),
      );
    } else if (this.userSortBy === "orders_low") {
      this.filteredUsers.sort(
        (a, b) => (a.ordersCount || 0) - (b.ordersCount || 0),
      );
    }
  }

  loadRestaurants() {
    this.adminService.getAllRestaurants().subscribe({
      next: (data) => (this.restaurants = data),
      error: (err) => console.error("Error loading restaurants", err),
    });
  }

  loadOrders() {
    this.adminService.getAllOrders().subscribe({
      next: (data) => (this.orders = data),
      error: (err) => console.error("Error loading orders", err),
    });
  }

  loadCities() {
    this.adminService.getCities().subscribe({
      next: (data) => (this.cities = data),
      error: (err) => console.error("Error loading cities", err),
    });
  }

  addCity() {
    if (!this.newCityName) return;
    this.adminService.addCity(this.newCityName).subscribe({
      next: (city) => {
        this.cities.push(city);
        this.newCityName = "";
        alert("City added!");
      },
      error: (err) => alert("Error adding city"),
    });
  }

  toggleCityStatus(city: any) {
    this.adminService.updateCityStatus(city._id, !city.isActive).subscribe({
      next: (updated) => (city.isActive = updated.isActive),
      error: (err) => alert("Error updating city"),
    });
  }

  deleteCity(id: string) {
    if (confirm("Are you sure?")) {
      this.adminService.deleteCity(id).subscribe({
        next: () => (this.cities = this.cities.filter((c) => c._id !== id)),
        error: (err) => alert("Error deleting city"),
      });
    }
  }

  updateRestaurantStatus(restaurant: any, isActive: boolean) {
    this.adminService
      .updateRestaurantStatus(restaurant._id, isActive)
      .subscribe({
        next: () => (restaurant.isActive = isActive),
        error: (err) => alert("Error updating restaurant"),
      });
  }

  // --- User Management Methods ---
  openAddUserModal() {
    this.newUser = {
      name: "",
      email: "",
      password: "",
      role: "customer",
      phone: "",
      city: "",
    };
    this.showAddUserModal = true;
  }

  addUser() {
    if (!this.newUser.name || !this.newUser.email) {
      alert("Name and Email are required");
      return;
    }
    this.adminService.addUser(this.newUser).subscribe({
      next: (user) => {
        this.users.push(user);
        this.showAddUserModal = false;
        alert("User added successfully!");
      },
      error: (err) => alert("Error adding user: " + err.error?.error),
    });
  }

  openEditUserModal(user: any) {
    this.selectedUser = { ...user, password: "" };
    this.showEditUserModal = true;
  }

  saveUserEdit() {
    this.adminService
      .updateUser(this.selectedUser._id, this.selectedUser)
      .subscribe({
        next: (updated) => {
          const index = this.users.findIndex((u) => u._id === updated._id);
          if (index !== -1) this.users[index] = updated;
          this.showEditUserModal = false;
          alert("User updated successfully!");
        },
        error: (err) => alert("Error updating user"),
      });
  }

  deleteUser(id: string) {
    if (confirm("Are you sure you want to delete this user?")) {
      this.adminService.deleteUser(id).subscribe({
        next: () => {
          this.users = this.users.filter((u) => u._id !== id);
          alert("User deleted");
        },
        error: (err) => alert("Error deleting user"),
      });
    }
  }

  toggleUserActive(user: any) {
    const updatedUser = { ...user, isActive: !user.isActive };
    this.adminService.updateUser(user._id, updatedUser).subscribe({
      next: (res) => (user.isActive = res.isActive),
      error: (err) => alert("Error updating user status"),
    });
  }

  toggleUserBlocked(user: any) {
    const updatedUser = { ...user, isBlocked: !user.isBlocked };
    this.adminService.updateUser(user._id, updatedUser).subscribe({
      next: (res) => (user.isBlocked = res.isBlocked),
      error: (err) => alert("Error updating user block status"),
    });
  }

  // --- Restaurant Management Methods ---
  openEditResModal(res: any) {
    this.selectedRestaurant = { ...res };
    this.showEditResModal = true;
  }

  saveRestaurantEdit() {
    this.adminService
      .updateRestaurant(this.selectedRestaurant._id, this.selectedRestaurant)
      .subscribe({
        next: (updated) => {
          const index = this.restaurants.findIndex(
            (r) => r._id === updated._id,
          );
          if (index !== -1) this.restaurants[index] = updated;
          this.showEditResModal = false;
          alert("Restaurant updated successfully!");
        },
        error: (err) => alert("Error updating restaurant"),
      });
  }

  deleteRestaurant(id: string) {
    if (confirm("Are you sure you want to delete this restaurant?")) {
      this.adminService.deleteRestaurant(id).subscribe({
        next: () => {
          this.restaurants = this.restaurants.filter((r) => r._id !== id);
          alert("Restaurant deleted");
        },
        error: (err) => alert("Error deleting restaurant"),
      });
    }
  }

  // --- Feedbacks Methods ---
  loadFeedbacks() {
    this.adminService.getFeedbacks().subscribe({
      next: (data) => {
        this.generalFeedbacks = data.generalFeedbacks;
        this.orderReviews = data.orderReviews;
      },
      error: (err) => console.error("Error loading feedbacks", err),
    });
  }

  updateFeedbackStatus(feedback: any, status: string) {
    this.adminService.updateFeedbackStatus(feedback._id, status).subscribe({
      next: (updated) => (feedback.status = updated.status),
      error: (err) => alert("Error updating feedback status"),
    });
  }

  // --- Notifications Methods ---
  loadNotifications() {
    this.adminService.getNotifications().subscribe({
      next: (data) => (this.notifications = data),
      error: (err) => console.error("Error loading notifications", err),
    });
  }

  loadPasswordResetRequests() {
    this.adminService.getPasswordResetRequests().subscribe({
      next: (data) => {
        this.passwordRequests = data;
        this.filterPasswordRequests();
      },
      error: (err) => console.error("Error loading password reset requests", err),
    });
  }

  filterPasswordRequests() {
    this.filteredPasswordRequests = this.passwordRequests.filter((request) => {
      const matchQuery =
        !this.passwordRequestSearch ||
        request.email
          ?.toLowerCase()
          .includes(this.passwordRequestSearch.toLowerCase()) ||
        request.userId?.name
          ?.toLowerCase()
          .includes(this.passwordRequestSearch.toLowerCase());

      const matchStatus =
        this.passwordRequestStatusFilter === "all" ||
        request.status === this.passwordRequestStatusFilter;

      return matchQuery && matchStatus;
    });
  }

  approvePasswordResetRequest(request: any) {
    if (!confirm(`Approve password reset for ${request.email}?`)) {
      return;
    }
    this.adminService.approvePasswordResetRequest(request._id).subscribe({
      next: (updated) => {
        request.status = updated.status;
        this.filterPasswordRequests();
        alert("Password reset request approved successfully.");
      },
      error: (err) => {
        console.error("Error approving password reset request", err);
        alert(err.error?.error || "Could not approve request.");
      },
    });
  }

  denyPasswordResetRequest(request: any) {
    if (!confirm(`Deny password reset request for ${request.email}?`)) {
      return;
    }
    this.adminService.denyPasswordResetRequest(request._id).subscribe({
      next: (updated) => {
        request.status = updated.status;
        this.filterPasswordRequests();
        alert("Password reset request denied.");
      },
      error: (err) => {
        console.error("Error denying password reset request", err);
        alert(err.error?.error || "Could not deny request.");
      },
    });
  }

  openPasswordRequestModal(request: any) {
    this.selectedPasswordRequest = request;
    this.newAdminMessage = "";
    this.showPasswordRequestModal = true;
  }

  closePasswordRequestModal() {
    this.selectedPasswordRequest = null;
    this.showPasswordRequestModal = false;
  }

  sendMessageToRequest() {
    if (!this.selectedPasswordRequest) return;
    if (!this.newAdminMessage) return alert("Enter a message to send to the user");
    this.adminService
      .messagePasswordResetRequest(this.selectedPasswordRequest._id, this.newAdminMessage)
      .subscribe({
        next: (updated) => {
          this.selectedPasswordRequest.adminMessages = updated.adminMessages || [];
          this.selectedPasswordRequest.status = updated.status || this.selectedPasswordRequest.status;
          this.newAdminMessage = "";
          alert("Message sent to user and request marked for more info.");
        },
        error: (err) => alert("Error sending message to request"),
      });
  }

  sendNotification() {
    if (!this.newNotification.title || !this.newNotification.message) {
      alert("Title and Message are required");
      return;
    }
    this.adminService.sendNotification(this.newNotification).subscribe({
      next: (notif) => {
        this.notifications.unshift(notif);
        this.newNotification = {
          recipientId: "",
          title: "",
          message: "",
          type: "info",
          targetRole: "all",
        };
        alert("Notification sent successfully!");
      },
      error: (err) => alert("Error sending notification"),
    });
  }

  deleteNotification(id: string) {
    if (confirm("Delete this notification?")) {
      this.adminService.deleteNotification(id).subscribe({
        next: () =>
          (this.notifications = this.notifications.filter((n) => n._id !== id)),
        error: (err) => alert("Error deleting notification"),
      });
    }
  }

  // --- Sliders Methods ---
  loadSliders() {
    this.adminService.getSliders().subscribe({
      next: (data) => (this.sliders = data),
      error: (err) => console.error("Error loading sliders", err),
    });
  }

  openAddSliderModal() {
    this.newSlider = {
      badge: "FEATURED",
      title1: "",
      title2: "",
      description: "",
      price: "",
      image: "",
      thumb: "",
      isActive: true,
      order: 0,
    };
    this.showAddSliderModal = true;
  }

  addSlider() {
    if (!this.newSlider.title1 || !this.newSlider.image) {
      alert("Title1 and Image URL are required");
      return;
    }
    this.adminService.addSlider(this.newSlider).subscribe({
      next: (slider) => {
        this.sliders.push(slider);
        this.showAddSliderModal = false;
        alert("Slider added successfully!");
      },
      error: (err) => alert("Error adding slider"),
    });
  }

  openEditSliderModal(slider: any) {
    this.selectedSlider = { ...slider };
    this.showEditSliderModal = true;
  }

  saveSliderEdit() {
    this.adminService
      .updateSlider(this.selectedSlider._id, this.selectedSlider)
      .subscribe({
        next: (updated) => {
          const index = this.sliders.findIndex((s) => s._id === updated._id);
          if (index !== -1) this.sliders[index] = updated;
          this.showEditSliderModal = false;
          alert("Slider updated successfully!");
        },
        error: (err) => alert("Error updating slider"),
      });
  }

  deleteSlider(id: string) {
    if (confirm("Delete this slider?")) {
      this.adminService.deleteSlider(id).subscribe({
        next: () => (this.sliders = this.sliders.filter((s) => s._id !== id)),
        error: (err) => alert("Error deleting slider"),
      });
    }
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
    if (tab === "security" && this.unreadSecurityCount > 0) {
      this.adminService.markSecurityLogsAsRead().subscribe({
        next: () => {
          this.unreadSecurityCount = 0;
          this.securityLogs.forEach((l) => (l.isRead = true));
        },
        error: (err) => console.error("Error marking security logs read", err),
      });
    }
    if (tab === "password-requests") {
      this.loadPasswordResetRequests();
    }
  }

  blockSecurityIP(ipAddress: string, email?: string) {
    if (
      confirm(
        `Are you sure you want to permanently block IP ${ipAddress}${email ? ` and user ${email}` : ""}?`,
      )
    ) {
      this.adminService.blockSecurityIP(ipAddress, email).subscribe({
        next: () => {
          alert("IP and associated user blocked successfully.");
          this.loadSecurityLogs();
        },
        error: (err) => alert("Error blocking IP/user"),
      });
    }
  }

  forceLogoutUser(email: string) {
    if (
      confirm(
        `Are you sure you want to terminate the active session for ${email}?`,
      )
    ) {
      this.adminService.forceLogoutUser(email).subscribe({
        next: () => {
          alert("User session terminated successfully.");
          this.loadSecurityLogs();
        },
        error: (err) => alert("Error terminating user session"),
      });
    }
  }

  deleteSecurityLog(id: string) {
    if (confirm("Delete this security log entry?")) {
      this.adminService.deleteSecurityLog(id).subscribe({
        next: () => {
          this.securityLogs = this.securityLogs.filter((l) => l._id !== id);
          this.filterSecurityLogs();
        },
        error: (err) => alert("Error deleting security log"),
      });
    }
  }

  // --- User Activity & Audit Methods ---
  loadUserAuditData() {
    this.adminService.getUserLogs().subscribe({
      next: (logs) => {
        this.userLogs = logs;
        this.filteredUserLogs = logs;
      },
      error: (err) => console.error("Error loading user logs", err),
    });

    this.adminService.getUserAuditSummary().subscribe({
      next: (users) => {
        this.userAuditSummary = users;
        this.totalUserRequestsCount = users.reduce(
          (sum: number, u: any) => sum + (u.apiRequestsCount || 0),
          0,
        );
        this.totalUserLoginAttempts = users.reduce(
          (sum: number, u: any) => sum + (u.loginAttempts || 0),
          0,
        );
        this.multiDeviceUsersCount = users.filter(
          (u: any) => u.loginDevices?.length > 1,
        ).length;
      },
      error: (err) => console.error("Error loading user audit summary", err),
    });
  }

  filterUserLogs() {
    this.filteredUserLogs = this.userLogs.filter((log) => {
      const matchSearch =
        !this.userLogSearch ||
        log.email?.toLowerCase().includes(this.userLogSearch.toLowerCase()) ||
        log.action?.toLowerCase().includes(this.userLogSearch.toLowerCase()) ||
        log.ipAddress
          ?.toLowerCase()
          .includes(this.userLogSearch.toLowerCase()) ||
        log.userId?.name
          ?.toLowerCase()
          .includes(this.userLogSearch.toLowerCase());

      const matchAction =
        this.userLogFilterAction === "all" ||
        log.action === this.userLogFilterAction;
      return matchSearch && matchAction;
    });
  }

  openUserAuditDetails(user: any) {
    this.selectedAuditUser = user;
    this.showAuditUserModal = true;
  }

  deleteUserLog(id: string) {
    if (confirm("Delete this user activity log?")) {
      this.adminService.deleteUserLog(id).subscribe({
        next: () => {
          this.userLogs = this.userLogs.filter((l) => l._id !== id);
          this.filterUserLogs();
        },
        error: (err) => alert("Error deleting user log"),
      });
    }
  }

  clearAllUserLogs() {
    if (
      confirm(
        "Are you sure you want to clear all user activity logs? This cannot be undone.",
      )
    ) {
      this.adminService.clearUserLogs().subscribe({
        next: () => {
          this.userLogs = [];
          this.filteredUserLogs = [];
          alert("All user logs cleared.");
        },
        error: (err) => alert("Error clearing user logs"),
      });
    }
  }

  resetUserAuditCounter(userId: string, type: string) {
    if (confirm(`Reset ${type} counter for this user?`)) {
      this.adminService.resetUserAuditCounter(userId, type).subscribe({
        next: () => {
          alert("Counter reset successfully.");
          this.loadUserAuditData();
          if (this.selectedAuditUser) {
            const updated = this.userAuditSummary.find((u) => u._id === userId);
            if (updated) this.selectedAuditUser = updated;
          }
        },
        error: (err) => alert("Error resetting counter"),
      });
    }
  }

  openUserDetailsModal(user: any) {
    this.loadingUserDetails = true;
    this.showUserDetailsModal = true;
    this.inspectionData = null;
    this.adminService.getUserDetails(user._id).subscribe({
      next: (data) => {
        this.inspectionData = data;
        this.loadingUserDetails = false;
      },
      error: (err) => {
        alert("Error loading user details");
        this.loadingUserDetails = false;
        this.showUserDetailsModal = false;
      },
    });
  }

  logout() {
    this.authService.logout("admin");
    this.router.navigate(["/login/admin"]);
  }
}
