"use strict";
(self["webpackChunkfood_delivery_client"] = self["webpackChunkfood_delivery_client"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule),
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _components_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/login.component */ 4175);
/* harmony import */ var _components_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/register.component */ 5507);
/* harmony import */ var _components_customer_customer_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/customer/customer-dashboard.component */ 5234);
/* harmony import */ var _components_restaurant_restaurant_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/restaurant/restaurant-dashboard.component */ 4048);
/* harmony import */ var _components_admin_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/admin/admin-dashboard.component */ 7968);
/* harmony import */ var _components_auth_login_customer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/auth/login-customer.component */ 3561);
/* harmony import */ var _components_rider_rider_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/rider/rider-dashboard.component */ 8768);
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/profile/profile.component */ 1245);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guards/auth.guard */ 1620);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7580);












const routes = [{
  path: '',
  redirectTo: '/login',
  pathMatch: 'full'
}, {
  path: 'login',
  component: _components_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
}, {
  path: 'register',
  component: _components_register_component__WEBPACK_IMPORTED_MODULE_1__.RegisterComponent
}, {
  path: 'login/customer',
  component: _components_auth_login_customer_component__WEBPACK_IMPORTED_MODULE_5__.LoginCustomerComponent
}, {
  path: 'customer',
  component: _components_customer_customer_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.CustomerDashboardComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__.AuthGuard],
  data: {
    roles: ['customer']
  }
}, {
  path: 'restaurant',
  component: _components_restaurant_restaurant_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.RestaurantDashboardComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__.AuthGuard],
  data: {
    roles: ['restaurant']
  }
}, {
  path: 'admin',
  component: _components_admin_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_4__.AdminDashboardComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__.AuthGuard],
  data: {
    roles: ['admin']
  }
}, {
  path: 'rider',
  component: _components_rider_rider_dashboard_component__WEBPACK_IMPORTED_MODULE_6__.RiderDashboardComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__.AuthGuard],
  data: {
    roles: ['rider']
  }
}, {
  path: 'profile',
  component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__.ProfileComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__.AuthGuard]
}, {
  path: '**',
  redirectTo: '/login'
}];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(t) {
      return new (t || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header/header.component */ 385);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth.service */ 4796);





class AppComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
    this.title = 'Food Delivery Portal';
    this.isLoggedIn = false;
    this.currentUser = null;
  }
  ngOnInit() {
    this.authService.currentUser.subscribe(user => {
      this.isLoggedIn = !!user;
      this.currentUser = user;
    });
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 4,
      vars: 0,
      consts: [[1, "app-container"], [1, "main-content"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "main", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        }
      },
      dependencies: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet],
      styles: [".app-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background-color: #f5f5f5;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  padding: 15px 30px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n\n.nav-brand[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 24px;\n  font-weight: 600;\n}\n\n.nav-menu[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n\n.user-info[_ngcontent-%COMP%] {\n  font-size: 14px;\n  opacity: 0.9;\n}\n\n.btn-logout[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.2);\n  color: white;\n  border: 1px solid white;\n  padding: 8px 16px;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 14px;\n  transition: all 0.3s ease;\n}\n\n.btn-logout[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.3);\n}\n\n.main-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSw2REFBNkQ7RUFDN0QsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDBDQUEwQztFQUMxQyxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWU7RUFDZix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsYUFBYTtBQUNmIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG59XHJcblxyXG4ubmF2YmFyIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNXB4IDMwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLm5hdi1icmFuZCBoMiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4ubmF2LW1lbnUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDIwcHg7XHJcbn1cclxuXHJcbi51c2VyLWluZm8ge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBvcGFjaXR5OiAwLjk7XHJcbn1cclxuXHJcbi5idG4tbG9nb3V0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5idG4tbG9nb3V0OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbn1cclxuXHJcbi5tYWluLWNvbnRlbnQge1xyXG4gIGZsZXg6IDE7XHJcbiAgcGFkZGluZzogMjBweDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 7968:
/*!***************************************************************!*\
  !*** ./src/app/components/admin/admin-dashboard.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminDashboardComponent: () => (/* binding */ AdminDashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/admin.service */ 7945);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ 4796);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);






const _c0 = (a0, a1, a2, a3) => ({
  "badge-primary": a0,
  "badge-info": a1,
  "badge-warning": a2,
  "badge-success": a3
});
function AdminDashboardComponent_ng_container_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "System Overview");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
function AdminDashboardComponent_ng_container_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "User Management");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
function AdminDashboardComponent_ng_container_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Restaurant Approvals");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
function AdminDashboardComponent_ng_container_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Global Orders");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
function AdminDashboardComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20)(1, "div", 21)(2, "div", 22)(3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 24)(6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Total Users");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 26)(11, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 24)(14, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Restaurants");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 28)(19, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 24)(22, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Total Orders");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 30)(27, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 24)(30, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Total Revenue");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.stats.totalUsers);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.stats.totalRestaurants);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.stats.totalOrders);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Rs. ", ctx_r0.stats.totalRevenue, "");
  }
}
function AdminDashboardComponent_div_41_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td")(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td")(7, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "td")(11, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const user_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](user_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](user_r2.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction4"](6, _c0, user_r2.role === "admin", user_r2.role === "customer", user_r2.role === "restaurant", user_r2.role === "rider"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 4, user_r2.role), " ");
  }
}
function AdminDashboardComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20)(1, "div", 33)(2, "div", 34)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Registered Users");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 35)(6, "table", 36)(7, "thead")(8, "tr")(9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, AdminDashboardComponent_div_41_tr_18_Template, 13, 11, "tr", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.users);
  }
}
function AdminDashboardComponent_div_42_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td")(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td")(10, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "td")(13, "label", 43)(14, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function AdminDashboardComponent_div_42_tr_18_Template_input_change_14_listener() {
      const restaurant_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.updateRestaurantStatus(restaurant_r4, !restaurant_r4.isActive));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const restaurant_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](restaurant_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](restaurant_r4.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", restaurant_r4.phone, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", restaurant_r4.isActive ? "badge-success" : "badge-danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", restaurant_r4.isActive ? "Active" : "Inactive", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", restaurant_r4.isActive);
  }
}
function AdminDashboardComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20)(1, "div", 33)(2, "div", 34)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Partner Restaurants");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 35)(6, "table", 36)(7, "thead")(8, "tr")(9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Restaurant Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, AdminDashboardComponent_div_42_tr_18_Template, 16, 6, "tr", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.restaurants);
  }
}
function AdminDashboardComponent_div_43_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "td")(13, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const order_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("#", order_r5._id.slice(-6).toUpperCase(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((order_r5.customerId == null ? null : order_r5.customerId.name) || "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((order_r5.restaurantId == null ? null : order_r5.restaurantId.name) || "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Rs. ", order_r5.totalAmount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](11, 7, order_r5.createdAt, "mediumDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", "status-" + order_r5.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 10, order_r5.status));
  }
}
function AdminDashboardComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20)(1, "div", 33)(2, "div", 34)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "All Platform Orders");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 35)(6, "table", 36)(7, "thead")(8, "tr")(9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Order ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Restaurant");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, AdminDashboardComponent_div_43_tr_22_Template, 16, 12, "tr", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.orders);
  }
}
class AdminDashboardComponent {
  constructor(adminService, authService, router) {
    this.adminService = adminService;
    this.authService = authService;
    this.router = router;
    this.stats = {
      totalUsers: 0,
      totalRestaurants: 0,
      totalOrders: 0,
      totalRevenue: 0
    };
    this.users = [];
    this.restaurants = [];
    this.orders = [];
    this.activeTab = 'stats';
  }
  ngOnInit() {
    this.loadStats();
    this.loadUsers();
    this.loadRestaurants();
    this.loadOrders();
  }
  loadStats() {
    this.adminService.getDashboardStats().subscribe(data => {
      this.stats = data;
    }, error => {
      console.error('Error loading stats', error);
    });
  }
  loadUsers() {
    this.adminService.getAllUsers().subscribe(data => {
      this.users = data;
    }, error => {
      console.error('Error loading users', error);
    });
  }
  loadRestaurants() {
    this.adminService.getAllRestaurants().subscribe(data => {
      this.restaurants = data;
    }, error => {
      console.error('Error loading restaurants', error);
    });
  }
  loadOrders() {
    this.adminService.getAllOrders().subscribe(data => {
      this.orders = data;
    }, error => {
      console.error('Error loading orders', error);
    });
  }
  updateRestaurantStatus(restaurant, isActive) {
    this.adminService.updateRestaurantStatus(restaurant._id, isActive).subscribe(response => {
      restaurant.isActive = isActive;
      alert('Restaurant status updated!');
    }, error => {
      alert('Error updating restaurant: ' + error.error.error);
    });
  }
  setActiveTab(tab) {
    this.activeTab = tab;
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  static {
    this.ɵfac = function AdminDashboardComponent_Factory(t) {
      return new (t || AdminDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_admin_service__WEBPACK_IMPORTED_MODULE_0__.AdminService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: AdminDashboardComponent,
      selectors: [["app-admin-dashboard"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 44,
      vars: 16,
      consts: [[1, "dashboard-container"], [1, "sidebar"], [1, "sidebar-header"], [1, "logo"], [1, "fas", "fa-shield-alt"], [1, "nav-links"], [3, "click"], [1, "fas", "fa-chart-pie"], ["routerLink", "/profile"], [1, "fas", "fa-user-cog"], [1, "fas", "fa-users"], [1, "fas", "fa-store"], [1, "fas", "fa-shopping-bag"], [1, "logout-link", 3, "click"], [1, "fas", "fa-sign-out-alt"], [1, "main-content"], [1, "top-header"], [4, "ngIf"], [1, "content-body"], ["class", "fade-in", 4, "ngIf"], [1, "fade-in"], [1, "stats-grid"], [1, "stat-card", "bg-primary-light"], [1, "stat-icon", "text-primary"], [1, "stat-info"], [1, "stat-value"], [1, "stat-card", "bg-success-light"], [1, "stat-icon", "text-success"], [1, "stat-card", "bg-warning-light"], [1, "stat-icon", "text-warning"], [1, "stat-card", "bg-info-light"], [1, "stat-icon", "text-info"], [1, "fas", "fa-chart-line"], [1, "card"], [1, "card-header"], [1, "table-responsive"], [1, "data-table"], [4, "ngFor", "ngForOf"], [1, "text-muted"], [1, "badge", 3, "ngClass"], [1, "badge", "badge-success"], [1, "text-small", "text-muted"], [1, "fas", "fa-phone", "text-muted", "text-small"], [1, "switch"], ["type", "checkbox", 3, "change", "checked"], [1, "slider", "round"], [1, "text-monospace", "text-small"], [1, "text-bold"]],
      template: function AdminDashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "aside", 1)(2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Admin Portal");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ul", 5)(8, "li", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_li_click_8_listener() {
            return ctx.setActiveTab("stats");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "li", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "My Profile");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "li", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_li_click_16_listener() {
            return ctx.setActiveTab("users");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Users");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "li", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_li_click_20_listener() {
            return ctx.setActiveTab("restaurants");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Restaurants");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "li", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_li_click_24_listener() {
            return ctx.setActiveTab("orders");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Orders");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "li", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_li_click_28_listener() {
            return ctx.logout();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "i", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Logout");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "main", 15)(33, "header", 16)(34, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, AdminDashboardComponent_ng_container_35_Template, 2, 0, "ng-container", 17)(36, AdminDashboardComponent_ng_container_36_Template, 2, 0, "ng-container", 17)(37, AdminDashboardComponent_ng_container_37_Template, 2, 0, "ng-container", 17)(38, AdminDashboardComponent_ng_container_38_Template, 2, 0, "ng-container", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, AdminDashboardComponent_div_40_Template, 34, 4, "div", 19)(41, AdminDashboardComponent_div_41_Template, 19, 1, "div", 19)(42, AdminDashboardComponent_div_42_Template, 19, 1, "div", 19)(43, AdminDashboardComponent_div_43_Template, 23, 1, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.activeTab === "stats");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.activeTab === "users");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.activeTab === "restaurants");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.activeTab === "orders");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.activeTab === "stats");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.activeTab === "users");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.activeTab === "restaurants");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.activeTab === "orders");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.activeTab === "stats");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.activeTab === "users");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.activeTab === "restaurants");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.activeTab === "orders");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
      styles: ["\n\n.dashboard-container[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  background-color: #f8f9fa;\n  font-family: 'Poppins', sans-serif;\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  width: 260px;\n  background: #2f3640;\n  color: white;\n  display: flex;\n  flex-direction: column;\n}\n\n.sidebar-header[_ngcontent-%COMP%] {\n  padding: 2rem;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n\n.logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #fbc531;\n}\n\n.nav-links[_ngcontent-%COMP%] { list-style: none; padding: 0; margin: 0; flex: 1; }\n.nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 1.2rem 2rem;\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  cursor: pointer;\n  transition: all 0.3s;\n  border-left: 4px solid transparent;\n  font-weight: 500;\n}\n\n.nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover { background: rgba(255, 255, 255, 0.05); }\n.nav-links[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  background: rgba(251, 197, 49, 0.1);\n  border-left-color: #fbc531;\n  color: #fbc531;\n}\n\n.logout-link[_ngcontent-%COMP%] { margin-top: auto; border-top: 1px solid rgba(255, 255, 255, 0.1); color: #e84118; }\n.logout-link[_ngcontent-%COMP%]:hover { background: rgba(232, 65, 24, 0.1); }\n\n.main-content[_ngcontent-%COMP%] { flex: 1; display: flex; flex-direction: column; overflow: hidden; }\n.top-header[_ngcontent-%COMP%] { background: white; padding: 1.5rem 2.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.05); }\n.top-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { margin: 0; color: #2f3640; font-size: 1.5rem; font-weight: 600; }\n.content-body[_ngcontent-%COMP%] { padding: 2.5rem; flex: 1; overflow-y: auto; }\n\n\n\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n\n.stat-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 1.5rem;\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  box-shadow: 0 4px 15px rgba(0,0,0,0.05);\n  transition: transform 0.2s;\n}\n.stat-card[_ngcontent-%COMP%]:hover { transform: translateY(-3px); }\n\n.stat-icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.8rem;\n  background: white;\n}\n\n.stat-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { margin: 0 0 0.2rem; color: #718093; font-size: 0.9rem; font-weight: 600; text-transform: uppercase; }\n.stat-value[_ngcontent-%COMP%] { margin: 0; color: #2f3640; font-size: 1.8rem; font-weight: 700; }\n\n\n\n.bg-primary-light[_ngcontent-%COMP%] { background: #f1f8ff; border-left: 4px solid #0097e6; }\n.text-primary[_ngcontent-%COMP%] { color: #0097e6; }\n.bg-success-light[_ngcontent-%COMP%] { background: #f1fdf6; border-left: 4px solid #44bd32; }\n.text-success[_ngcontent-%COMP%] { color: #44bd32; }\n.bg-warning-light[_ngcontent-%COMP%] { background: #fffcf0; border-left: 4px solid #e1b12c; }\n.text-warning[_ngcontent-%COMP%] { color: #e1b12c; }\n.bg-info-light[_ngcontent-%COMP%] { background: #fdf2f8; border-left: 4px solid #9c88ff; }\n.text-info[_ngcontent-%COMP%] { color: #9c88ff; }\n\n\n\n.card[_ngcontent-%COMP%] { background: white; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.05); overflow: hidden; margin-bottom: 1.5rem; }\n.card-header[_ngcontent-%COMP%] { padding: 1.5rem 2rem; border-bottom: 1px solid #f1f2f6; background: #fdfdfd; }\n.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { margin: 0; color: #2f3640; font-size: 1.2rem; }\n\n\n\n.table-responsive[_ngcontent-%COMP%] { overflow-x: auto; }\n.data-table[_ngcontent-%COMP%] { width: 100%; border-collapse: collapse; }\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] { padding: 1rem 2rem; text-align: left; border-bottom: 1px solid #f1f2f6; }\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] { background: #fdfdfd; color: #718093; font-weight: 600; font-size: 0.9rem; text-transform: uppercase; }\n.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover { background: #fafafa; }\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { margin: 0; }\n\n\n\n.text-small[_ngcontent-%COMP%] { font-size: 0.85rem; }\n.text-muted[_ngcontent-%COMP%] { color: #718093 !important; }\n.text-bold[_ngcontent-%COMP%] { font-weight: 600; }\n.text-monospace[_ngcontent-%COMP%] { font-family: monospace; font-size: 1.1rem; }\n\n\n\n.badge[_ngcontent-%COMP%] { padding: 0.4rem 0.8rem; border-radius: 20px; font-size: 0.8rem; font-weight: 600; display: inline-block; }\n.badge-primary[_ngcontent-%COMP%] { background: rgba(0, 151, 230, 0.1); color: #0097e6; }\n.badge-info[_ngcontent-%COMP%] { background: rgba(156, 136, 255, 0.1); color: #9c88ff; }\n.badge-warning[_ngcontent-%COMP%] { background: rgba(225, 177, 44, 0.1); color: #e1b12c; }\n.badge-success[_ngcontent-%COMP%] { background: rgba(68, 189, 50, 0.1); color: #44bd32; }\n.badge-danger[_ngcontent-%COMP%] { background: rgba(232, 65, 24, 0.1); color: #e84118; }\n\n\n\n.status-pending[_ngcontent-%COMP%] { background: rgba(253, 203, 110, 0.2); color: #e1b12c; }\n.status-accepted[_ngcontent-%COMP%] { background: rgba(116, 185, 255, 0.2); color: #0984e3; }\n.status-preparing[_ngcontent-%COMP%] { background: rgba(162, 155, 254, 0.2); color: #6c5ce7; }\n.status-ready[_ngcontent-%COMP%] { background: rgba(0, 206, 201, 0.2); color: #00cec9; }\n.status-delivered[_ngcontent-%COMP%] { background: rgba(46, 213, 115, 0.2); color: #2ed573; }\n.status-cancelled[_ngcontent-%COMP%] { background: rgba(232, 65, 24, 0.2); color: #e84118; }\n\n\n\n.switch[_ngcontent-%COMP%] { position: relative; display: inline-block; width: 50px; height: 26px; }\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] { opacity: 0; width: 0; height: 0; }\n.slider[_ngcontent-%COMP%] { position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: #ccc; transition: .4s; }\n.slider[_ngcontent-%COMP%]:before { position: absolute; content: \"\"; height: 18px; width: 18px; left: 4px; bottom: 4px; background-color: white; transition: .4s; }\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] { background-color: #44bd32; }\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before { transform: translateX(24px); }\n.slider.round[_ngcontent-%COMP%] { border-radius: 34px; }\n.slider.round[_ngcontent-%COMP%]:before { border-radius: 50%; }\n\n.fade-in[_ngcontent-%COMP%] { animation: _ngcontent-%COMP%_fadeIn 0.4s ease; }\n@keyframes _ngcontent-%COMP%_fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbi1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxREFBcUQ7QUFDckQ7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQSxhQUFhLGdCQUFnQixFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFO0FBQy9EO0VBQ0Usb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsa0NBQWtDO0VBQ2xDLGdCQUFnQjtBQUNsQjs7QUFFQSxzQkFBc0IscUNBQXFDLEVBQUU7QUFDN0Q7RUFDRSxtQ0FBbUM7RUFDbkMsMEJBQTBCO0VBQzFCLGNBQWM7QUFDaEI7O0FBRUEsZUFBZSxnQkFBZ0IsRUFBRSw4Q0FBOEMsRUFBRSxjQUFjLEVBQUU7QUFDakcscUJBQXFCLGtDQUFrQyxFQUFFOztBQUV6RCxnQkFBZ0IsT0FBTyxFQUFFLGFBQWEsRUFBRSxzQkFBc0IsRUFBRSxnQkFBZ0IsRUFBRTtBQUNsRixjQUFjLGlCQUFpQixFQUFFLHNCQUFzQixFQUFFLHVDQUF1QyxFQUFFO0FBQ2xHLGlCQUFpQixTQUFTLEVBQUUsY0FBYyxFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixFQUFFO0FBQ2pGLGdCQUFnQixlQUFlLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFOztBQUU1RCxrQ0FBa0M7QUFDbEM7RUFDRSxhQUFhO0VBQ2IsMkRBQTJEO0VBQzNELFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCx1Q0FBdUM7RUFDdkMsMEJBQTBCO0FBQzVCO0FBQ0EsbUJBQW1CLDJCQUEyQixFQUFFOztBQUVoRDtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUEsZ0JBQWdCLGtCQUFrQixFQUFFLGNBQWMsRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBRSx5QkFBeUIsRUFBRTtBQUNwSCxjQUFjLFNBQVMsRUFBRSxjQUFjLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUU7O0FBRTlFLHFCQUFxQjtBQUNyQixvQkFBb0IsbUJBQW1CLEVBQUUsOEJBQThCLEVBQUU7QUFDekUsZ0JBQWdCLGNBQWMsRUFBRTtBQUNoQyxvQkFBb0IsbUJBQW1CLEVBQUUsOEJBQThCLEVBQUU7QUFDekUsZ0JBQWdCLGNBQWMsRUFBRTtBQUNoQyxvQkFBb0IsbUJBQW1CLEVBQUUsOEJBQThCLEVBQUU7QUFDekUsZ0JBQWdCLGNBQWMsRUFBRTtBQUNoQyxpQkFBaUIsbUJBQW1CLEVBQUUsOEJBQThCLEVBQUU7QUFDdEUsYUFBYSxjQUFjLEVBQUU7O0FBRTdCLG1CQUFtQjtBQUNuQixRQUFRLGlCQUFpQixFQUFFLG1CQUFtQixFQUFFLHVDQUF1QyxFQUFFLGdCQUFnQixFQUFFLHFCQUFxQixFQUFFO0FBQ2xJLGVBQWUsb0JBQW9CLEVBQUUsZ0NBQWdDLEVBQUUsbUJBQW1CLEVBQUU7QUFDNUYsa0JBQWtCLFNBQVMsRUFBRSxjQUFjLEVBQUUsaUJBQWlCLEVBQUU7O0FBRWhFLFdBQVc7QUFDWCxvQkFBb0IsZ0JBQWdCLEVBQUU7QUFDdEMsY0FBYyxXQUFXLEVBQUUseUJBQXlCLEVBQUU7QUFDdEQsaUNBQWlDLGtCQUFrQixFQUFFLGdCQUFnQixFQUFFLGdDQUFnQyxFQUFFO0FBQ3pHLGlCQUFpQixtQkFBbUIsRUFBRSxjQUFjLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUseUJBQXlCLEVBQUU7QUFDdEgsdUJBQXVCLG1CQUFtQixFQUFFO0FBQzVDLG1CQUFtQixTQUFTLEVBQUU7O0FBRTlCLGNBQWM7QUFDZCxjQUFjLGtCQUFrQixFQUFFO0FBQ2xDLGNBQWMseUJBQXlCLEVBQUU7QUFDekMsYUFBYSxnQkFBZ0IsRUFBRTtBQUMvQixrQkFBa0Isc0JBQXNCLEVBQUUsaUJBQWlCLEVBQUU7O0FBRTdELFdBQVc7QUFDWCxTQUFTLHNCQUFzQixFQUFFLG1CQUFtQixFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixFQUFFLHFCQUFxQixFQUFFO0FBQ2xILGlCQUFpQixrQ0FBa0MsRUFBRSxjQUFjLEVBQUU7QUFDckUsY0FBYyxvQ0FBb0MsRUFBRSxjQUFjLEVBQUU7QUFDcEUsaUJBQWlCLG1DQUFtQyxFQUFFLGNBQWMsRUFBRTtBQUN0RSxpQkFBaUIsa0NBQWtDLEVBQUUsY0FBYyxFQUFFO0FBQ3JFLGdCQUFnQixrQ0FBa0MsRUFBRSxjQUFjLEVBQUU7O0FBRXBFLDJCQUEyQjtBQUMzQixrQkFBa0Isb0NBQW9DLEVBQUUsY0FBYyxFQUFFO0FBQ3hFLG1CQUFtQixvQ0FBb0MsRUFBRSxjQUFjLEVBQUU7QUFDekUsb0JBQW9CLG9DQUFvQyxFQUFFLGNBQWMsRUFBRTtBQUMxRSxnQkFBZ0Isa0NBQWtDLEVBQUUsY0FBYyxFQUFFO0FBQ3BFLG9CQUFvQixtQ0FBbUMsRUFBRSxjQUFjLEVBQUU7QUFDekUsb0JBQW9CLGtDQUFrQyxFQUFFLGNBQWMsRUFBRTs7QUFFeEUsa0JBQWtCO0FBQ2xCLFVBQVUsa0JBQWtCLEVBQUUscUJBQXFCLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRTtBQUNoRixnQkFBZ0IsVUFBVSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUU7QUFDakQsVUFBVSxrQkFBa0IsRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLHNCQUFzQixFQUFFLGVBQWUsRUFBRTtBQUM5SCxpQkFBaUIsa0JBQWtCLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSx1QkFBdUIsRUFBRSxlQUFlLEVBQUU7QUFDL0ksMEJBQTBCLHlCQUF5QixFQUFFO0FBQ3JELGlDQUFpQywyQkFBMkIsRUFBRTtBQUM5RCxnQkFBZ0IsbUJBQW1CLEVBQUU7QUFDckMsdUJBQXVCLGtCQUFrQixFQUFFOztBQUUzQyxXQUFXLDJCQUEyQixFQUFFO0FBQ3hDLG9CQUFvQixPQUFPLFVBQVUsRUFBRSwyQkFBMkIsRUFBRSxFQUFFLEtBQUssVUFBVSxFQUFFLHdCQUF3QixFQUFFLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBJbmhlcml0IGNvcmUgc3RydWN0dXJlIGZyb20gUmVzdGF1cmFudCBEYXNoYm9hcmQgKi9cclxuLmRhc2hib2FyZC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uc2lkZWJhciB7XHJcbiAgd2lkdGg6IDI2MHB4O1xyXG4gIGJhY2tncm91bmQ6ICMyZjM2NDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnNpZGViYXItaGVhZGVyIHtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6ICNmYmM1MzE7XHJcbn1cclxuXHJcbi5uYXYtbGlua3MgeyBsaXN0LXN0eWxlOiBub25lOyBwYWRkaW5nOiAwOyBtYXJnaW46IDA7IGZsZXg6IDE7IH1cclxuLm5hdi1saW5rcyBsaSB7XHJcbiAgcGFkZGluZzogMS4ycmVtIDJyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4ubmF2LWxpbmtzIGxpOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTsgfVxyXG4ubmF2LWxpbmtzIGxpLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTEsIDE5NywgNDksIDAuMSk7XHJcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICNmYmM1MzE7XHJcbiAgY29sb3I6ICNmYmM1MzE7XHJcbn1cclxuXHJcbi5sb2dvdXQtbGluayB7IG1hcmdpbi10b3A6IGF1dG87IGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7IGNvbG9yOiAjZTg0MTE4OyB9XHJcbi5sb2dvdXQtbGluazpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoMjMyLCA2NSwgMjQsIDAuMSk7IH1cclxuXHJcbi5tYWluLWNvbnRlbnQgeyBmbGV4OiAxOyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBvdmVyZmxvdzogaGlkZGVuOyB9XHJcbi50b3AtaGVhZGVyIHsgYmFja2dyb3VuZDogd2hpdGU7IHBhZGRpbmc6IDEuNXJlbSAyLjVyZW07IGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLDAsMCwwLjA1KTsgfVxyXG4udG9wLWhlYWRlciBoMiB7IG1hcmdpbjogMDsgY29sb3I6ICMyZjM2NDA7IGZvbnQtc2l6ZTogMS41cmVtOyBmb250LXdlaWdodDogNjAwOyB9XHJcbi5jb250ZW50LWJvZHkgeyBwYWRkaW5nOiAyLjVyZW07IGZsZXg6IDE7IG92ZXJmbG93LXk6IGF1dG87IH1cclxuXHJcbi8qIFN0YXRzIEdyaWQgU3BlY2lmaWMgZm9yIEFkbWluICovXHJcbi5zdGF0cy1ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjQwcHgsIDFmcikpO1xyXG4gIGdhcDogMS41cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuXHJcbi5zdGF0LWNhcmQge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgcGFkZGluZzogMS41cmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEuNXJlbTtcclxuICBib3gtc2hhZG93OiAwIDRweCAxNXB4IHJnYmEoMCwwLDAsMC4wNSk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XHJcbn1cclxuLnN0YXQtY2FyZDpob3ZlciB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTsgfVxyXG5cclxuLnN0YXQtaWNvbiB7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG4uc3RhdC1pbmZvIGgzIHsgbWFyZ2luOiAwIDAgMC4ycmVtOyBjb2xvcjogIzcxODA5MzsgZm9udC1zaXplOiAwLjlyZW07IGZvbnQtd2VpZ2h0OiA2MDA7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cclxuLnN0YXQtdmFsdWUgeyBtYXJnaW46IDA7IGNvbG9yOiAjMmYzNjQwOyBmb250LXNpemU6IDEuOHJlbTsgZm9udC13ZWlnaHQ6IDcwMDsgfVxyXG5cclxuLyogQ29sb3JzIGZvciBTdGF0cyAqL1xyXG4uYmctcHJpbWFyeS1saWdodCB7IGJhY2tncm91bmQ6ICNmMWY4ZmY7IGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzAwOTdlNjsgfVxyXG4udGV4dC1wcmltYXJ5IHsgY29sb3I6ICMwMDk3ZTY7IH1cclxuLmJnLXN1Y2Nlc3MtbGlnaHQgeyBiYWNrZ3JvdW5kOiAjZjFmZGY2OyBib3JkZXItbGVmdDogNHB4IHNvbGlkICM0NGJkMzI7IH1cclxuLnRleHQtc3VjY2VzcyB7IGNvbG9yOiAjNDRiZDMyOyB9XHJcbi5iZy13YXJuaW5nLWxpZ2h0IHsgYmFja2dyb3VuZDogI2ZmZmNmMDsgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjZTFiMTJjOyB9XHJcbi50ZXh0LXdhcm5pbmcgeyBjb2xvcjogI2UxYjEyYzsgfVxyXG4uYmctaW5mby1saWdodCB7IGJhY2tncm91bmQ6ICNmZGYyZjg7IGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzljODhmZjsgfVxyXG4udGV4dC1pbmZvIHsgY29sb3I6ICM5Yzg4ZmY7IH1cclxuXHJcbi8qIENhcmRzICYgTGF5b3V0ICovXHJcbi5jYXJkIHsgYmFja2dyb3VuZDogd2hpdGU7IGJvcmRlci1yYWRpdXM6IDEycHg7IGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLDAsMCwwLjA1KTsgb3ZlcmZsb3c6IGhpZGRlbjsgbWFyZ2luLWJvdHRvbTogMS41cmVtOyB9XHJcbi5jYXJkLWhlYWRlciB7IHBhZGRpbmc6IDEuNXJlbSAycmVtOyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjJmNjsgYmFja2dyb3VuZDogI2ZkZmRmZDsgfVxyXG4uY2FyZC1oZWFkZXIgaDMgeyBtYXJnaW46IDA7IGNvbG9yOiAjMmYzNjQwOyBmb250LXNpemU6IDEuMnJlbTsgfVxyXG5cclxuLyogVGFibGVzICovXHJcbi50YWJsZS1yZXNwb25zaXZlIHsgb3ZlcmZsb3cteDogYXV0bzsgfVxyXG4uZGF0YS10YWJsZSB7IHdpZHRoOiAxMDAlOyBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyB9XHJcbi5kYXRhLXRhYmxlIHRoLCAuZGF0YS10YWJsZSB0ZCB7IHBhZGRpbmc6IDFyZW0gMnJlbTsgdGV4dC1hbGlnbjogbGVmdDsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWYyZjY7IH1cclxuLmRhdGEtdGFibGUgdGggeyBiYWNrZ3JvdW5kOiAjZmRmZGZkOyBjb2xvcjogIzcxODA5MzsgZm9udC13ZWlnaHQ6IDYwMDsgZm9udC1zaXplOiAwLjlyZW07IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cclxuLmRhdGEtdGFibGUgdHI6aG92ZXIgeyBiYWNrZ3JvdW5kOiAjZmFmYWZhOyB9XHJcbi5kYXRhLXRhYmxlIHRkIHAgeyBtYXJnaW46IDA7IH1cclxuXHJcbi8qIFV0aWxpdGllcyAqL1xyXG4udGV4dC1zbWFsbCB7IGZvbnQtc2l6ZTogMC44NXJlbTsgfVxyXG4udGV4dC1tdXRlZCB7IGNvbG9yOiAjNzE4MDkzICFpbXBvcnRhbnQ7IH1cclxuLnRleHQtYm9sZCB7IGZvbnQtd2VpZ2h0OiA2MDA7IH1cclxuLnRleHQtbW9ub3NwYWNlIHsgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTsgZm9udC1zaXplOiAxLjFyZW07IH1cclxuXHJcbi8qIEJhZGdlcyAqL1xyXG4uYmFkZ2UgeyBwYWRkaW5nOiAwLjRyZW0gMC44cmVtOyBib3JkZXItcmFkaXVzOiAyMHB4OyBmb250LXNpemU6IDAuOHJlbTsgZm9udC13ZWlnaHQ6IDYwMDsgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XHJcbi5iYWRnZS1wcmltYXJ5IHsgYmFja2dyb3VuZDogcmdiYSgwLCAxNTEsIDIzMCwgMC4xKTsgY29sb3I6ICMwMDk3ZTY7IH1cclxuLmJhZGdlLWluZm8geyBiYWNrZ3JvdW5kOiByZ2JhKDE1NiwgMTM2LCAyNTUsIDAuMSk7IGNvbG9yOiAjOWM4OGZmOyB9XHJcbi5iYWRnZS13YXJuaW5nIHsgYmFja2dyb3VuZDogcmdiYSgyMjUsIDE3NywgNDQsIDAuMSk7IGNvbG9yOiAjZTFiMTJjOyB9XHJcbi5iYWRnZS1zdWNjZXNzIHsgYmFja2dyb3VuZDogcmdiYSg2OCwgMTg5LCA1MCwgMC4xKTsgY29sb3I6ICM0NGJkMzI7IH1cclxuLmJhZGdlLWRhbmdlciB7IGJhY2tncm91bmQ6IHJnYmEoMjMyLCA2NSwgMjQsIDAuMSk7IGNvbG9yOiAjZTg0MTE4OyB9XHJcblxyXG4vKiBTdGF0dXMgQ29sb3JzIChvcmRlcnMpICovXHJcbi5zdGF0dXMtcGVuZGluZyB7IGJhY2tncm91bmQ6IHJnYmEoMjUzLCAyMDMsIDExMCwgMC4yKTsgY29sb3I6ICNlMWIxMmM7IH1cclxuLnN0YXR1cy1hY2NlcHRlZCB7IGJhY2tncm91bmQ6IHJnYmEoMTE2LCAxODUsIDI1NSwgMC4yKTsgY29sb3I6ICMwOTg0ZTM7IH1cclxuLnN0YXR1cy1wcmVwYXJpbmcgeyBiYWNrZ3JvdW5kOiByZ2JhKDE2MiwgMTU1LCAyNTQsIDAuMik7IGNvbG9yOiAjNmM1Y2U3OyB9XHJcbi5zdGF0dXMtcmVhZHkgeyBiYWNrZ3JvdW5kOiByZ2JhKDAsIDIwNiwgMjAxLCAwLjIpOyBjb2xvcjogIzAwY2VjOTsgfVxyXG4uc3RhdHVzLWRlbGl2ZXJlZCB7IGJhY2tncm91bmQ6IHJnYmEoNDYsIDIxMywgMTE1LCAwLjIpOyBjb2xvcjogIzJlZDU3MzsgfVxyXG4uc3RhdHVzLWNhbmNlbGxlZCB7IGJhY2tncm91bmQ6IHJnYmEoMjMyLCA2NSwgMjQsIDAuMik7IGNvbG9yOiAjZTg0MTE4OyB9XHJcblxyXG4vKiBUb2dnbGUgU3dpdGNoICovXHJcbi5zd2l0Y2ggeyBwb3NpdGlvbjogcmVsYXRpdmU7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgd2lkdGg6IDUwcHg7IGhlaWdodDogMjZweDsgfVxyXG4uc3dpdGNoIGlucHV0IHsgb3BhY2l0eTogMDsgd2lkdGg6IDA7IGhlaWdodDogMDsgfVxyXG4uc2xpZGVyIHsgcG9zaXRpb246IGFic29sdXRlOyBjdXJzb3I6IHBvaW50ZXI7IHRvcDogMDsgbGVmdDogMDsgcmlnaHQ6IDA7IGJvdHRvbTogMDsgYmFja2dyb3VuZC1jb2xvcjogI2NjYzsgdHJhbnNpdGlvbjogLjRzOyB9XHJcbi5zbGlkZXI6YmVmb3JlIHsgcG9zaXRpb246IGFic29sdXRlOyBjb250ZW50OiBcIlwiOyBoZWlnaHQ6IDE4cHg7IHdpZHRoOiAxOHB4OyBsZWZ0OiA0cHg7IGJvdHRvbTogNHB4OyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgdHJhbnNpdGlvbjogLjRzOyB9XHJcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHsgYmFja2dyb3VuZC1jb2xvcjogIzQ0YmQzMjsgfVxyXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjRweCk7IH1cclxuLnNsaWRlci5yb3VuZCB7IGJvcmRlci1yYWRpdXM6IDM0cHg7IH1cclxuLnNsaWRlci5yb3VuZDpiZWZvcmUgeyBib3JkZXItcmFkaXVzOiA1MCU7IH1cclxuXHJcbi5mYWRlLWluIHsgYW5pbWF0aW9uOiBmYWRlSW4gMC40cyBlYXNlOyB9XHJcbkBrZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTsgfSB0byB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfSB9Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 3561:
/*!*************************************************************!*\
  !*** ./src/app/components/auth/login-customer.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginCustomerComponent: () => (/* binding */ LoginCustomerComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth.service */ 4796);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);







function LoginCustomerComponent_span_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Signing In...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginCustomerComponent_span_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Sign In");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class LoginCustomerComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
    this.loginData = {
      email: '',
      password: ''
    };
    this.rememberMe = false;
    this.isLoading = false;
  }
  onSubmit() {
    if (!this.loginData.email || !this.loginData.password) {
      alert('Please fill in all fields');
      return;
    }
    this.isLoading = true;
    this.authService.login(this.loginData.email, this.loginData.password).subscribe(response => {
      this.isLoading = false;
      const role = response?.user?.role || response?.role;
      if (role === 'admin') {
        this.router.navigate(['/admin']);
      } else if (role === 'restaurant') {
        this.router.navigate(['/restaurant']);
      } else if (role === 'rider') {
        this.router.navigate(['/rider']);
      } else {
        this.router.navigate(['/customer']);
      }
    }, error => {
      this.isLoading = false;
      alert('Login failed: ' + (error.error?.error || 'Unknown error'));
    });
  }
  static {
    this.ɵfac = function LoginCustomerComponent_Factory(t) {
      return new (t || LoginCustomerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LoginCustomerComponent,
      selectors: [["app-login-customer"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 41,
      vars: 6,
      consts: [[1, "login-container"], [1, "login-card"], [1, "login-header"], [1, "login-form", 3, "ngSubmit"], [1, "form-group"], ["for", "email"], ["type", "email", "id", "email", "name", "email", "required", "", "placeholder", "Enter your email", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "password"], ["type", "password", "id", "password", "name", "password", "required", "", "placeholder", "Enter your password", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "form-options"], [1, "checkbox-label"], ["type", "checkbox", "name", "rememberMe", 3, "ngModelChange", "ngModel"], ["href", "#", 1, "forgot-password"], ["type", "submit", 1, "login-btn", 3, "disabled"], [4, "ngIf"], [1, "login-footer"], ["href", "/register/customer", 1, "register-link"], [1, "other-logins"], ["href", "/login/restaurant", 1, "other-login-link"], ["href", "/login/admin", 1, "other-login-link"], ["href", "/login/rider", 1, "other-login-link"]],
      template: function LoginCustomerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Customer Login");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Welcome back! Please sign in to your account.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginCustomerComponent_Template_form_ngSubmit_7_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4)(9, "label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Email Address");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function LoginCustomerComponent_Template_input_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.loginData.email, $event) || (ctx.loginData.email = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 4)(13, "label", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function LoginCustomerComponent_Template_input_ngModelChange_15_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.loginData.password, $event) || (ctx.loginData.password = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9)(17, "label", 10)(18, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function LoginCustomerComponent_Template_input_ngModelChange_18_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.rememberMe, $event) || (ctx.rememberMe = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Remember me ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Forgot Password?");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, LoginCustomerComponent_span_23_Template, 2, 0, "span", 14)(24, LoginCustomerComponent_span_24_Template, 2, 0, "span", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 15)(26, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Don't have an account? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Register here");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 17)(31, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Login as:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "a", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Restaurant");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " | ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Admin");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, " | ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "a", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Rider");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.loginData.email);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.loginData.password);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.rememberMe);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
      styles: [".login-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  padding: 2rem;\n}\n\n.login-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 15px;\n  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);\n  padding: 3rem;\n  width: 100%;\n  max-width: 400px;\n}\n\n.login-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n\n.login-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #2d3436;\n  margin-bottom: 0.5rem;\n  font-size: 2rem;\n}\n\n.login-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #636e72;\n  margin: 0;\n}\n\n.login-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  color: #2d3436;\n  font-weight: 500;\n}\n\n.form-input[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border: 1px solid #e9ecef;\n  border-radius: 8px;\n  font-size: 1rem;\n  transition: border-color 0.3s, box-shadow 0.3s;\n}\n\n.form-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n\n.form-options[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 1rem 0;\n}\n\n.checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #636e72;\n  cursor: pointer;\n}\n\n.forgot-password[_ngcontent-%COMP%] {\n  color: #667eea;\n  text-decoration: none;\n  font-size: 0.9rem;\n}\n\n.forgot-password[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.login-btn[_ngcontent-%COMP%] {\n  background: #667eea;\n  color: white;\n  border: none;\n  padding: 1rem;\n  border-radius: 8px;\n  font-size: 1.1rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.3s, transform 0.2s;\n}\n\n.login-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #5a67d8;\n  transform: translateY(-2px);\n}\n\n.login-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n\n.login-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 2rem;\n  padding-top: 2rem;\n  border-top: 1px solid #e9ecef;\n}\n\n.register-link[_ngcontent-%COMP%] {\n  color: #667eea;\n  text-decoration: none;\n  font-weight: 600;\n}\n\n.register-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.other-logins[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n\n.other-logins[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem 0;\n  color: #636e72;\n  font-size: 0.9rem;\n}\n\n.other-login-link[_ngcontent-%COMP%] {\n  color: #667eea;\n  text-decoration: none;\n  font-weight: 500;\n}\n\n.other-login-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n@media (max-width: 480px) {\n  .login-card[_ngcontent-%COMP%] {\n    padding: 2rem;\n  }\n\n  .form-options[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: flex-start;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hdXRoL2xvZ2luLWN1c3RvbWVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsNkRBQTZEO0VBQzdELGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsMENBQTBDO0VBQzFDLGFBQWE7RUFDYixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZiw4Q0FBOEM7QUFDaEQ7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLDhDQUE4QztBQUNoRDs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZiwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCx1QkFBdUI7RUFDekI7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1jb250YWluZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbn1cclxuXHJcbi5sb2dpbi1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMTVweCAzNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBwYWRkaW5nOiAzcmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbn1cclxuXHJcbi5sb2dpbi1oZWFkZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcblxyXG4ubG9naW4taGVhZGVyIGgyIHtcclxuICBjb2xvcjogIzJkMzQzNjtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcblxyXG4ubG9naW4taGVhZGVyIHAge1xyXG4gIGNvbG9yOiAjNjM2ZTcyO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmxvZ2luLWZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDEuNXJlbTtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAgbGFiZWwge1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICBjb2xvcjogIzJkMzQzNjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uZm9ybS1pbnB1dCB7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTllY2VmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3MsIGJveC1zaGFkb3cgMC4zcztcclxufVxyXG5cclxuLmZvcm0taW5wdXQ6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNjY3ZWVhO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuMSk7XHJcbn1cclxuXHJcbi5mb3JtLW9wdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAxcmVtIDA7XHJcbn1cclxuXHJcbi5jaGVja2JveC1sYWJlbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC41cmVtO1xyXG4gIGNvbG9yOiAjNjM2ZTcyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmZvcmdvdC1wYXNzd29yZCB7XHJcbiAgY29sb3I6ICM2NjdlZWE7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcblxyXG4uZm9yZ290LXBhc3N3b3JkOmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLmxvZ2luLWJ0biB7XHJcbiAgYmFja2dyb3VuZDogIzY2N2VlYTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcywgdHJhbnNmb3JtIDAuMnM7XHJcbn1cclxuXHJcbi5sb2dpbi1idG46aG92ZXI6bm90KDpkaXNhYmxlZCkge1xyXG4gIGJhY2tncm91bmQ6ICM1YTY3ZDg7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG59XHJcblxyXG4ubG9naW4tYnRuOmRpc2FibGVkIHtcclxuICBvcGFjaXR5OiAwLjc7XHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxufVxyXG5cclxuLmxvZ2luLWZvb3RlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgcGFkZGluZy10b3A6IDJyZW07XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlOWVjZWY7XHJcbn1cclxuXHJcbi5yZWdpc3Rlci1saW5rIHtcclxuICBjb2xvcjogIzY2N2VlYTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnJlZ2lzdGVyLWxpbms6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4ub3RoZXItbG9naW5zIHtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG4ub3RoZXItbG9naW5zIHAge1xyXG4gIG1hcmdpbjogMCAwIDAuNXJlbSAwO1xyXG4gIGNvbG9yOiAjNjM2ZTcyO1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcblxyXG4ub3RoZXItbG9naW4tbGluayB7XHJcbiAgY29sb3I6ICM2NjdlZWE7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5vdGhlci1sb2dpbi1saW5rOmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgLmxvZ2luLWNhcmQge1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuICB9XHJcblxyXG4gIC5mb3JtLW9wdGlvbnMge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMXJlbTtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 5234:
/*!*********************************************************************!*\
  !*** ./src/app/components/customer/customer-dashboard.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerDashboardComponent: () => (/* binding */ CustomerDashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/customer.service */ 8898);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ 4796);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);








const _c0 = () => ["Burger", "Pizza", "Sushi", "Dessert", "Drinks", "Healthy"];
function CustomerDashboardComponent_a_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CustomerDashboardComponent_a_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "JOIN AS RESTAURANT");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CustomerDashboardComponent_a_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "BECOME A RIDER");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CustomerDashboardComponent_a_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "LOGIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CustomerDashboardComponent_span_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "WELCOME, USER");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CustomerDashboardComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerDashboardComponent_div_29_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CustomerDashboardComponent_section_42_ng_container_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 62)(1, "div", 63)(2, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h2", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 68)(12, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerDashboardComponent_section_42_ng_container_4_div_1_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.browseRestaurants());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Order Now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 72)(18, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "img", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const slide_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](slide_r4.badge);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", slide_r4.title1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](slide_r4.title2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](slide_r4.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](slide_r4.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", slide_r4.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function CustomerDashboardComponent_section_42_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CustomerDashboardComponent_section_42_ng_container_4_div_1_Template, 20, 6, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const i_r5 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r5 === ctx_r1.activeSlideIndex);
  }
}
function CustomerDashboardComponent_section_42_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerDashboardComponent_section_42_div_6_Template_div_click_0_listener() {
      const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.setSlide(i_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const slide_r8 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", i_r7 === ctx_r1.activeSlideIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", slide_r8.thumb, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function CustomerDashboardComponent_section_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 54)(1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 56)(3, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, CustomerDashboardComponent_section_42_ng_container_4_Template, 2, 1, "ng-container", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, CustomerDashboardComponent_section_42_div_6_Template, 2, 3, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.slides);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.slides);
  }
}
function CustomerDashboardComponent_section_43_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 82)(1, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerDashboardComponent_section_43_div_7_Template_div_click_1_listener() {
      const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.viewItemDetail(item_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 86)(6, "h4", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerDashboardComponent_section_43_div_7_Template_h4_click_6_listener() {
      const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.viewItemDetail(item_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 91)(14, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerDashboardComponent_section_43_div_7_Template_button_click_16_listener() {
      const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.addToCart(item_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "i", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r11.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (item_r11.restaurantId == null ? null : item_r11.restaurantId.name) || "Local Kitchen", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r11.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Rs. ", item_r11.price, "");
  }
}
function CustomerDashboardComponent_section_43_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 94)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "No dishes available right now.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function CustomerDashboardComponent_section_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 77)(1, "div", 78)(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Recommended Dishes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerDashboardComponent_section_43_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.browseRestaurants());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Explore All");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, CustomerDashboardComponent_section_43_div_7_Template, 19, 5, "div", 81)(8, CustomerDashboardComponent_section_43_div_8_Template, 3, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.randomMenuItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.randomMenuItems.length === 0);
  }
}
function CustomerDashboardComponent_section_44_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerDashboardComponent_section_44_div_7_Template_div_click_0_listener() {
      const cat_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      ctx_r1.searchQuery = cat_r13;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.searchRestaurants());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const cat_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](cat_r13);
  }
}
function CustomerDashboardComponent_section_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 95)(1, "div", 78)(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Top Categories");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "View All");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, CustomerDashboardComponent_section_44_div_7_Template, 5, 1, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c0));
  }
}
function CustomerDashboardComponent_section_45_div_7_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const r_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](3, 1, r_r16.rating, "1.1-1"), "");
  }
}
function CustomerDashboardComponent_section_45_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerDashboardComponent_section_45_div_7_Template_div_click_0_listener() {
      const r_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.selectRestaurant(r_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 109)(6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, CustomerDashboardComponent_section_45_div_7_span_11_Template, 4, 4, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const r_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", r_r16.image || "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", r_r16.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("open", r_r16.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](r_r16.isActive ? "Open" : "Closed");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](r_r16.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](r_r16.description || "Delicious food delivered to your door");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", r_r16.rating);
  }
}
function CustomerDashboardComponent_section_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 102)(1, "div", 78)(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Trending Restaurants");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerDashboardComponent_section_45_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.browseRestaurants());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "See All");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, CustomerDashboardComponent_section_45_div_7_Template, 12, 8, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.restaurants.slice(0, 3));
  }
}
function CustomerDashboardComponent_section_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 115)(1, "div", 116)(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "How It Works");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Your favorite food, delivered fast and fresh.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 117)(7, "div", 118)(8, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "1. Choose Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Find the best restaurants and shops near your current location.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 118)(15, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "i", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "2. Pick Your Food");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Browse hundreds of menus to find the food you like.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 118)(22, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "i", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "3. Fast Delivery");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Food is prepared and delivered to your door quickly.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
}
function CustomerDashboardComponent_section_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 125)(1, "div", 126)(2, "div", 127)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Get the FoodFlow App");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Order faster, track your delivery in real-time, and get exclusive mobile offers.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 128)(8, "button", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 131)(11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Download on the");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "App Store");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "i", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 131)(18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "GET IT ON");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Google Play");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
  }
}
function CustomerDashboardComponent_section_48_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 137)(1, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 140)(4, "span", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 145)(16, "div", 146)(17, "button", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerDashboardComponent_section_48_div_3_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.itemQty = ctx_r1.itemQty > 1 ? ctx_r1.itemQty - 1 : 1);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "\u2212");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerDashboardComponent_section_48_div_3_Template_button_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.itemQty = ctx_r1.itemQty + 1);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerDashboardComponent_section_48_div_3_Template_button_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.addToCart(ctx_r1.selectedItem, ctx_r1.itemQty));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Add to Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.selectedItem.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.selectedItem.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (ctx_r1.selectedRestaurant == null ? null : ctx_r1.selectedRestaurant.name) || "Local Kitchen", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Rs. ", ctx_r1.selectedItem.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.selectedItem.description || "A delicious dish crafted with premium ingredients.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.itemQty);
  }
}
function CustomerDashboardComponent_section_48_div_4_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 151)(1, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerDashboardComponent_section_48_div_4_div_5_Template_div_click_1_listener() {
      const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.viewItemDetail(item_r20));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 86)(6, "h4", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerDashboardComponent_section_48_div_4_div_5_Template_h4_click_6_listener() {
      const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.viewItemDetail(item_r20));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 91)(11, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerDashboardComponent_section_48_div_4_div_5_Template_button_click_13_listener() {
      const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.addToCart(item_r20));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "i", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r20.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r20.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r20.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Rs. ", item_r20.price, "");
  }
}
function CustomerDashboardComponent_section_48_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 149)(1, "div", 78)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, CustomerDashboardComponent_section_48_div_4_div_5_Template, 16, 4, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("More from ", (ctx_r1.selectedRestaurant == null ? null : ctx_r1.selectedRestaurant.name) || "this restaurant", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](6, 2, ctx_r1.menuItems, 0, 4));
  }
}
function CustomerDashboardComponent_section_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 133)(1, "button", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerDashboardComponent_section_48_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u2190 Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CustomerDashboardComponent_section_48_div_3_Template, 25, 6, "div", 135)(4, CustomerDashboardComponent_section_48_div_4_Template, 7, 6, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.selectedItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.menuItems.length > 0);
  }
}
function CustomerDashboardComponent_section_49_div_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 186)(1, "div", 159)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Card Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 161)(6, "div", 159)(7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Expiry Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 159)(11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "CVC");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
function CustomerDashboardComponent_section_49_div_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 190)(1, "span", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", item_r22.quantity, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r22.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Rs. ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](7, 3, item_r22.price * item_r22.quantity, "1.2-2"), "");
  }
}
function CustomerDashboardComponent_section_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 152)(1, "button", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerDashboardComponent_section_49_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.goHome());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u2190 Back to Shop");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 153)(4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Secure Checkout");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 154)(7, "div", 155)(8, "div", 156)(9, "h3", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "i", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Delivery Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "form", 158)(13, "div", 159)(14, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Full Delivery Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "input", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function CustomerDashboardComponent_section_49_Template_input_ngModelChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r1.deliveryAddress, $event) || (ctx_r1.deliveryAddress = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 161)(18, "div", 159)(19, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "input", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function CustomerDashboardComponent_section_49_Template_input_ngModelChange_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r1.phone, $event) || (ctx_r1.phone = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 159)(23, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Delivery Instructions (Optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "textarea", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function CustomerDashboardComponent_section_49_Template_textarea_ngModelChange_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r1.notes, $event) || (ctx_r1.notes = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 164)(27, "h3", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "i", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, " Payment Method");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 166)(31, "label", 167)(32, "input", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function CustomerDashboardComponent_section_49_Template_input_ngModelChange_32_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r1.paymentMethod, $event) || (ctx_r1.paymentMethod = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "i", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Cash on Delivery");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "label", 167)(38, "input", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function CustomerDashboardComponent_section_49_Template_input_ngModelChange_38_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r1.paymentMethod, $event) || (ctx_r1.paymentMethod = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "i", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Credit / Debit Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "label", 167)(44, "input", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function CustomerDashboardComponent_section_49_Template_input_ngModelChange_44_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r1.paymentMethod, $event) || (ctx_r1.paymentMethod = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "i", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "PayPal");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, CustomerDashboardComponent_section_49_div_49_Template, 14, 0, "div", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 176)(51, "div", 177)(52, "h3", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Order Summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](55, CustomerDashboardComponent_section_49_div_55_Template, 8, 6, "div", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 180)(57, "div", 181)(58, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Subtotal");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](62, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 181)(64, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "Delivery Fee");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](68, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 181)(70, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "Tax (8%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](74, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 182)(76, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "Grand Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](80, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "button", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerDashboardComponent_section_49_Template_button_click_81_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.placeOrder());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](83, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "p", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](85, "i", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, " Payments are secure and encrypted.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.deliveryAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("selected", ctx_r1.paymentMethod === "cod");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.paymentMethod);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("selected", ctx_r1.paymentMethod === "card");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.paymentMethod);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("selected", ctx_r1.paymentMethod === "paypal");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.paymentMethod);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.paymentMethod === "card");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.cart);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Rs. ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](62, 20, ctx_r1.cartTotal, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Rs. ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](68, 23, ctx_r1.deliveryFee, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Rs. ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](74, 26, ctx_r1.taxAmount, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Rs. ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](80, 29, ctx_r1.grandTotal, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.isPlacingOrder || ctx_r1.cart.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.isPlacingOrder ? "Processing..." : "Confirm Order \u2022 Rs. " + _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](83, 32, ctx_r1.grandTotal, "1.2-2"), " ");
  }
}
function CustomerDashboardComponent_section_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 194)(1, "div", 153)(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "My Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 195)(5, "div", 196)(6, "div", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 199)(9, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 201)(16, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerDashboardComponent_section_50_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.openMyOrders());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "View My Orders");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerDashboardComponent_section_50_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((ctx_r1.currentUser == null ? null : ctx_r1.currentUser.name) || "User");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((ctx_r1.currentUser == null ? null : ctx_r1.currentUser.email) || "user@example.com");
  }
}
function CustomerDashboardComponent_footer_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "footer", 202)(1, "div", 203)(2, "div", 204)(3, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "FOOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "FLOW");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Premium food delivery service. We bring the best restaurants in the city right to your doorstep.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 205)(10, "a", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "a", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "i", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "a", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "i", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 210)(17, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Company");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "ul")(20, "li")(21, "a", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "About Us");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "li")(24, "a", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Careers");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "li")(27, "a", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Blog");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "li")(30, "a", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 210)(33, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "For Partners");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "ul")(36, "li")(37, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Add a Restaurant");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "li")(40, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Become a Rider");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "li")(43, "a", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Partner Guidelines");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 210)(46, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Legal");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "ul")(49, "li")(50, "a", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Terms & Conditions");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "li")(53, "a", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "Privacy Policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "li")(56, "a", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Cookie Policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 211)(59, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "\u00A9 2026 FoodFlow Delivery. All rights reserved.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
function CustomerDashboardComponent_section_52_div_7_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const r_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](3, 1, r_r25.rating, "1.1-1"), "");
  }
}
function CustomerDashboardComponent_section_52_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerDashboardComponent_section_52_div_7_Template_div_click_0_listener() {
      const r_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.selectRestaurant(r_r25));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 109)(6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, CustomerDashboardComponent_section_52_div_7_span_11_Template, 4, 4, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const r_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", r_r25.image || "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", r_r25.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("open", r_r25.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](r_r25.isActive ? "Open" : "Closed");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](r_r25.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](r_r25.description || "Delicious food delivered to your door");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", r_r25.rating);
  }
}
function CustomerDashboardComponent_section_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 212)(1, "div", 153)(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Restaurants Near You");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, CustomerDashboardComponent_section_52_div_7_Template, 12, 8, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r1.filteredRestaurants.length, " found");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.filteredRestaurants);
  }
}
function CustomerDashboardComponent_section_53_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 153)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r1.selectedRestaurant.name, " Menu");
  }
}
function CustomerDashboardComponent_section_53_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 218)(1, "div", 219)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 220)(7, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerDashboardComponent_section_53_div_5_Template_button_click_9_listener() {
      const item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.addToCart(item_r28));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r28.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r28.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Rs. ", item_r28.price, "");
  }
}
function CustomerDashboardComponent_section_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 214)(1, "button", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerDashboardComponent_section_53_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u2190 Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CustomerDashboardComponent_section_53_div_3_Template, 3, 1, "div", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, CustomerDashboardComponent_section_53_div_5_Template, 11, 3, "div", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.selectedRestaurant);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.menuItems);
  }
}
function CustomerDashboardComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerDashboardComponent_div_54_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.showCartPanel = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CustomerDashboardComponent_div_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 94)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Your cart is empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function CustomerDashboardComponent_div_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 223)(1, "div", 224)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 225)(7, "button", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerDashboardComponent_div_64_Template_button_click_7_listener() {
      const item_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r30).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.decreaseQty(item_r31));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\u2212");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerDashboardComponent_div_64_Template_button_click_11_listener() {
      const item_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r30).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.addToCart(item_r31));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r31.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("Rs. ", item_r31.price, " \u00D7 ", item_r31.quantity, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r31.quantity);
  }
}
function CustomerDashboardComponent_div_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 226)(1, "div", 227)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Total:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerDashboardComponent_div_65_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r32);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.openCheckout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Proceed to Checkout");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Rs. ", ctx_r1.cartTotal, "");
  }
}
function CustomerDashboardComponent_div_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerDashboardComponent_div_66_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r33);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.showOrdersPanel = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CustomerDashboardComponent_div_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 229)(1, "div", 230)(2, "span", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 234)(10, "span", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const order_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("#", order_r34._id.slice(-6).toUpperCase(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 4, order_r34.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((order_r34.restaurantId == null ? null : order_r34.restaurantId.name) || "Restaurant");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Rs. ", order_r34.totalAmount, "");
  }
}
class CustomerDashboardComponent {
  constructor(customerService, authService, router) {
    this.customerService = customerService;
    this.authService = authService;
    this.router = router;
    // Auth
    this.isLoggedIn = false;
    this.currentUser = null;
    // UI State
    this.selectedAddress = '42nd St, New York';
    this.isDarkTheme = false;
    this.showCartPanel = false;
    this.showOrdersPanel = false;
    this.activeView = 'home';
    this.searchQuery = '';
    this.activeFilter = 'All';
    // Slider State
    this.activeSlideIndex = 0;
    this.slides = [{
      badge: 'PREMIUM',
      title1: 'Special Sushi',
      title2: 'Platters',
      description: 'Handcrafted sushi rolls with the freshest seafood.',
      price: 'Rs. 2400',
      image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600',
      thumb: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=100'
    }, {
      badge: 'POPULAR',
      title1: 'Juicy Beef',
      title2: 'Burgers',
      description: 'Double patty burgers with melted cheese and crispy fries.',
      price: 'Rs. 1850',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600',
      thumb: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=100'
    }, {
      badge: 'NEW',
      title1: 'Authentic',
      title2: 'Pizzas',
      description: 'Wood-fired pizzas with imported Italian tomatoes and basil.',
      price: 'Rs. 2200',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600',
      thumb: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=100'
    }];
    this.restaurants = [];
    this.filteredRestaurants = [];
    this.selectedRestaurant = null;
    this.selectedItem = null;
    this.itemQty = 1;
    this.menuItems = [];
    this.randomMenuItems = [];
    this.cart = [];
    this.cartTotal = 0;
    this.orders = [];
    // Checkout
    this.deliveryAddress = '';
    this.phone = '';
    this.notes = '';
    this.paymentMethod = 'cod';
    this.isPlacingOrder = false;
  }
  ngOnInit() {
    this.authService.currentUser.subscribe(user => {
      this.currentUser = user;
      this.isLoggedIn = !!user;
    });
    this.loadRestaurants();
    this.loadRandomMenuItems();
    this.startAutoSlider();
  }
  loadRandomMenuItems() {
    this.customerService.getRandomMenuItems().subscribe({
      next: data => {
        this.randomMenuItems = data;
      },
      error: err => console.error('Error loading random items', err)
    });
  }
  ngOnDestroy() {
    this.stopAutoSlider();
  }
  startAutoSlider() {
    this.sliderInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Change slide every 5 seconds
  }
  stopAutoSlider() {
    if (this.sliderInterval) {
      clearInterval(this.sliderInterval);
    }
  }
  setSlide(index) {
    this.activeSlideIndex = index;
    this.stopAutoSlider();
    this.startAutoSlider(); // Reset interval
  }
  nextSlide() {
    this.activeSlideIndex = (this.activeSlideIndex + 1) % this.slides.length;
  }
  get cartCount() {
    return this.cart.reduce((sum, item) => sum + item.quantity, 0);
  }
  get deliveryFee() {
    return this.cart.length > 0 ? 150.00 : 0; // Set flat delivery fee to 150 PKR
  }
  get taxAmount() {
    return this.cartTotal * 0.08; // 8% tax
  }
  get grandTotal() {
    return this.cartTotal + this.deliveryFee + this.taxAmount;
  }
  // --- Auth ---
  goToLogin() {
    this.router.navigate(['/login']);
  }
  goToRegister() {
    this.router.navigate(['/register']);
  }
  logout() {
    this.authService.logout();
    this.cart = [];
    this.cartTotal = 0;
    this.router.navigate(['/login']);
  }
  // --- Restaurants ---
  loadRestaurants() {
    this.customerService.getRestaurants().subscribe({
      next: data => {
        this.restaurants = data;
        this.filteredRestaurants = data;
      },
      error: err => console.error('Error loading restaurants', err)
    });
  }
  browseRestaurants() {
    this.activeView = 'restaurants';
    this.selectedRestaurant = null;
    this.menuItems = [];
  }
  selectRestaurant(restaurant) {
    this.selectedRestaurant = restaurant;
    this.activeView = 'menu';
    this.loadMenuItems(restaurant._id);
  }
  loadMenuItems(restaurantId) {
    this.customerService.getRestaurantMenu(restaurantId).subscribe({
      next: data => {
        this.menuItems = data;
      },
      error: err => console.error('Error loading menu', err)
    });
  }
  viewItemDetail(item) {
    this.selectedItem = item;
    this.itemQty = 1;
    this.activeView = 'item-detail';
    // Ensure we load the menu items for this item's restaurant to show "More from this restaurant"
    let restId = item.restaurantId;
    if (typeof restId === 'object' && restId !== null && restId._id) {
      restId = restId._id;
      this.selectedRestaurant = item.restaurantId;
    } else {
      // Find the restaurant from our pre-loaded list if possible
      this.selectedRestaurant = this.restaurants.find(r => r._id === restId);
    }
    if (restId) {
      this.loadMenuItems(restId);
    }
  }
  goBack() {
    if (this.activeView === 'menu') {
      this.activeView = 'restaurants';
      this.selectedRestaurant = null;
    } else if (this.activeView === 'item-detail') {
      this.activeView = 'home';
      this.selectedItem = null;
    } else {
      this.activeView = 'home';
    }
  }
  goHome() {
    this.activeView = 'home';
  }
  applyFilter(filter) {
    this.activeFilter = filter;
    if (filter === 'All') {
      this.filteredRestaurants = this.restaurants;
    } else if (filter === 'Rating 4.0+') {
      this.filteredRestaurants = this.restaurants.filter(r => r.rating >= 4.0);
    } else {
      this.filteredRestaurants = this.restaurants;
    }
  }
  searchRestaurants() {
    this.filteredRestaurants = this.restaurants.filter(r => r.name?.toLowerCase().includes(this.searchQuery.toLowerCase()) || r.description?.toLowerCase().includes(this.searchQuery.toLowerCase()));
    if (this.activeView === 'home') this.activeView = 'restaurants';
  }
  // --- Cart ---
  addToCart(item, quantity = 1) {
    if (!this.isLoggedIn) {
      this.router.navigate(['/login']);
      return;
    }
    const existing = this.cart.find(c => c._id === item._id);
    if (existing) {
      existing.quantity += quantity;
    } else {
      this.cart.push({
        ...item,
        quantity: quantity
      });
    }
    this.updateCartTotal();
    this.showCartPanel = true;
  }
  removeFromCart(item) {
    this.cart = this.cart.filter(c => c._id !== item._id);
    this.updateCartTotal();
  }
  decreaseQty(item) {
    const existing = this.cart.find(c => c._id === item._id);
    if (existing) {
      existing.quantity--;
      if (existing.quantity <= 0) this.removeFromCart(item);
    }
    this.updateCartTotal();
  }
  getCartQty(item) {
    const found = this.cart.find(c => c._id === item._id);
    return found ? found.quantity : 0;
  }
  updateCartTotal() {
    this.cartTotal = this.cart.reduce((t, i) => t + i.price * i.quantity, 0);
  }
  clearCart() {
    this.cart = [];
    this.cartTotal = 0;
  }
  openCheckout() {
    if (!this.isLoggedIn) {
      this.router.navigate(['/login']);
      return;
    }
    if (this.cart.length === 0) {
      alert('Your cart is empty');
      return;
    }
    this.showCartPanel = false;
    this.activeView = 'checkout';
  }
  // --- Orders ---
  placeOrder() {
    if (!this.deliveryAddress || !this.phone) {
      alert('Please enter delivery address and phone number');
      return;
    }
    // In a real app we might validate payment info here if not COD
    this.isPlacingOrder = true;
    const order = {
      // Assuming all cart items are from the same restaurant for simplicity
      // Or picking the first item's restaurantId if selectedRestaurant isn't set
      restaurantId: this.selectedRestaurant?._id || this.cart[0]?.restaurantId?._id || this.cart[0]?.restaurantId,
      items: this.cart.map(item => ({
        menuItemId: item._id,
        name: item.name,
        price: item.price,
        quantity: item.quantity
      })),
      totalAmount: this.grandTotal,
      deliveryAddress: this.deliveryAddress,
      phone: this.phone,
      notes: this.notes,
      paymentMethod: this.paymentMethod
    };
    this.customerService.placeOrder(order).subscribe({
      next: () => {
        this.isPlacingOrder = false;
        this.clearCart();
        this.activeView = 'home';
        this.deliveryAddress = '';
        this.phone = '';
        this.notes = '';
        alert('🎉 Order placed successfully!');
        this.openMyOrders();
      },
      error: err => {
        this.isPlacingOrder = false;
        alert('Error placing order: ' + (err.error?.error || 'Unknown error'));
      }
    });
  }
  loadMyOrders() {
    this.customerService.getOrders().subscribe({
      next: data => {
        this.orders = data;
      },
      error: err => console.error('Error loading orders', err)
    });
  }
  openMyOrders() {
    if (!this.isLoggedIn) {
      this.router.navigate(['/login']);
      return;
    }
    this.loadMyOrders();
    this.showOrdersPanel = true;
  }
  // --- Theme ---
  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    document.body.classList.toggle('dark-theme', this.isDarkTheme);
  }
  getStatusColor(status) {
    const map = {
      pending: '#f59e0b',
      accepted: '#3b82f6',
      preparing: '#8b5cf6',
      ready: '#10b981',
      delivered: '#22c55e',
      cancelled: '#ef4444'
    };
    return map[status] || '#6b7280';
  }
  static {
    this.ɵfac = function CustomerDashboardComponent_Factory(t) {
      return new (t || CustomerDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_customer_service__WEBPACK_IMPORTED_MODULE_0__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: CustomerDashboardComponent,
      selectors: [["app-customer-dashboard"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 75,
      vars: 35,
      consts: [[1, "customer-dashboard", "foodflow-theme"], [1, "top-nav"], [1, "top-nav-content"], [1, "logo-section", 2, "cursor", "pointer", 3, "click"], [1, "logo"], [1, "location-badge"], [1, "dot"], [1, "text"], [1, "main-nav"], ["href", "javascript:void(0)", 3, "click"], ["routerLink", "/profile", 4, "ngIf"], [1, "top-nav-links"], ["routerLink", "/register", 4, "ngIf"], ["routerLink", "/login", "class", "login-link", 4, "ngIf"], ["class", "welcome-text", 4, "ngIf"], [1, "cart-icon", 3, "click"], [1, "fas", "fa-shopping-cart"], [1, "cart-count"], ["class", "user-avatar", 3, "click", 4, "ngIf"], [1, "search-action-bar"], [1, "search-container"], [1, "fas", "fa-search"], ["type", "text", "placeholder", "Search for restaurants or dishes...", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "action-buttons"], [1, "btn", "btn-green"], [1, "btn", "btn-dark", 3, "click"], [1, "main-content"], ["class", "hero-slider-section", 4, "ngIf"], ["class", "recommended-section", 4, "ngIf"], ["class", "categories-section", 4, "ngIf"], ["class", "trending-section", 4, "ngIf"], ["class", "how-it-works-section", 4, "ngIf"], ["class", "app-banner-section", 4, "ngIf"], ["class", "item-detail-view fade-in", 4, "ngIf"], ["class", "checkout-view fade-in", 4, "ngIf"], ["class", "profile-view", 4, "ngIf"], ["class", "main-footer", 4, "ngIf"], ["class", "restaurants-view", 4, "ngIf"], ["class", "menu-view", 4, "ngIf"], ["class", "overlay", 3, "click", 4, "ngIf"], [1, "side-panel", "cart-panel"], [1, "panel-header"], [1, "close-btn", 3, "click"], [1, "panel-body"], ["class", "empty-state", 4, "ngIf"], ["class", "cart-item", 4, "ngFor", "ngForOf"], ["class", "panel-footer", 4, "ngIf"], [1, "side-panel", "orders-panel"], ["class", "order-card", 4, "ngFor", "ngForOf"], ["routerLink", "/profile"], ["routerLink", "/register"], ["routerLink", "/login", 1, "login-link"], [1, "welcome-text"], [1, "user-avatar", 3, "click"], [1, "hero-slider-section"], [1, "hero-slider-container"], [1, "glow-circle", "top-right"], [1, "glow-ring"], [4, "ngFor", "ngForOf"], [1, "slider-thumbnails"], ["class", "thumb", 3, "active", "click", 4, "ngFor", "ngForOf"], ["class", "hero-content", 4, "ngIf"], [1, "hero-content"], [1, "hero-text-content", "fade-in-up"], [1, "premium-badge"], [1, "hero-title"], [1, "highlight"], [1, "hero-desc"], [1, "hero-price-action"], [1, "price"], [1, "btn", "btn-order", 3, "click"], [1, "fas", "fa-arrow-right"], [1, "hero-image-content", "fade-in"], [1, "image-wrapper"], ["alt", "Featured Dish", 3, "src"], [1, "thumb", 3, "click"], ["alt", "Thumb", 3, "src"], [1, "recommended-section"], [1, "section-header"], [1, "btn", "btn-outline-green", 3, "click"], [1, "menu-grid"], ["class", "modern-food-card fade-in-up", "style", "animation-duration: 0.8s;", 4, "ngFor", "ngForOf"], [1, "modern-food-card", "fade-in-up", 2, "animation-duration", "0.8s"], [1, "card-image-wrapper", 2, "cursor", "pointer", 3, "click"], ["src", "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400", "alt", "Food Image", 1, "food-img"], [1, "badge", "badge-floating"], [1, "card-content"], [1, "item-title", 2, "cursor", "pointer", 3, "click"], [1, "restaurant-name", "text-muted"], [1, "fas", "fa-store"], [1, "item-desc"], [1, "card-footer"], [1, "btn-add-cart", 3, "click"], [1, "fas", "fa-plus"], [1, "empty-state"], [1, "categories-section"], ["href", "#", 1, "view-all"], [1, "categories-grid"], ["class", "category-card", 3, "click", 4, "ngFor", "ngForOf"], [1, "category-card", 3, "click"], [1, "cat-icon-placeholder"], [1, "fas", "fa-utensils"], [1, "trending-section"], [1, "restaurants-grid"], ["class", "restaurant-card", 3, "click", 4, "ngFor", "ngForOf"], [1, "restaurant-card", 3, "click"], [1, "restaurant-img"], ["onerror", "this.src='https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400'", 3, "src", "alt"], [1, "status-badge"], [1, "restaurant-info"], [1, "restaurant-desc"], [1, "restaurant-meta"], ["class", "rating", 4, "ngIf"], [1, "rating"], [1, "fas", "fa-star"], [1, "how-it-works-section"], [1, "section-title-center"], [1, "steps-grid"], [1, "step-card"], [1, "step-icon", "bg-orange"], [1, "fas", "fa-map-marker-alt"], [1, "step-icon", "bg-green"], [1, "fas", "fa-hamburger"], [1, "step-icon", "bg-blue"], [1, "fas", "fa-truck"], [1, "app-banner-section"], [1, "app-banner-container"], [1, "app-banner-content"], [1, "store-buttons"], [1, "btn-store"], [1, "fab", "fa-apple"], [1, "store-text"], [1, "fab", "fa-google-play"], [1, "item-detail-view", "fade-in"], [1, "back-btn", "mb-2", 3, "click"], ["class", "item-detail-container", 4, "ngIf"], ["class", "more-from-restaurant", 4, "ngIf"], [1, "item-detail-container"], [1, "item-detail-image"], ["src", "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800", "alt", "Food Image"], [1, "item-detail-info"], [1, "badge", "badge-light", "mb-2"], [1, "restaurant-name", "text-muted", "mb-2"], [1, "price-large"], [1, "item-detail-desc"], [1, "item-detail-actions"], [1, "qty-selector"], [1, "qty-btn", 3, "click"], [1, "qty-num"], [1, "more-from-restaurant"], ["class", "modern-food-card fade-in-up", 4, "ngFor", "ngForOf"], [1, "modern-food-card", "fade-in-up"], [1, "checkout-view", "fade-in"], [1, "section-title"], [1, "checkout-container"], [1, "checkout-left"], [1, "checkout-card"], [1, "card-title"], [1, "checkout-form"], [1, "form-group"], ["type", "text", "name", "deliveryAddress", "placeholder", "e.g. Apt 4B, 123 Main St, New York, NY", "required", "", 3, "ngModelChange", "ngModel"], [1, "form-row"], ["type", "tel", "name", "phone", "placeholder", "e.g. +1 234 567 8900", "required", "", 3, "ngModelChange", "ngModel"], ["name", "notes", "rows", "2", "placeholder", "e.g. Leave at the front door", 3, "ngModelChange", "ngModel"], [1, "checkout-card", "mt-3"], [1, "fas", "fa-credit-card"], [1, "payment-options"], [1, "payment-option"], ["type", "radio", "name", "payment", "value", "cod", 3, "ngModelChange", "ngModel"], [1, "payment-info"], [1, "fas", "fa-money-bill-wave", "text-green"], ["type", "radio", "name", "payment", "value", "card", 3, "ngModelChange", "ngModel"], [1, "fas", "fa-credit-card", "text-blue"], ["type", "radio", "name", "payment", "value", "paypal", 3, "ngModelChange", "ngModel"], [1, "fab", "fa-paypal", "text-blue"], ["class", "card-input-mock fade-in-up", 4, "ngIf"], [1, "checkout-right"], [1, "checkout-card", "summary-card", "sticky-summary"], [1, "summary-items"], ["class", "summary-item", 4, "ngFor", "ngForOf"], [1, "summary-calculations"], [1, "calc-row"], [1, "calc-row", "total-row"], [1, "btn", "btn-order", "full-width", "mt-3", "btn-large", 3, "click", "disabled"], [1, "secure-text"], [1, "fas", "fa-lock"], [1, "card-input-mock", "fade-in-up"], ["type", "text", "placeholder", "0000 0000 0000 0000"], ["type", "text", "placeholder", "MM/YY"], ["type", "text", "placeholder", "123"], [1, "summary-item"], [1, "summary-qty"], [1, "summary-name"], [1, "summary-price"], [1, "profile-view"], [1, "profile-container"], [1, "profile-card"], [1, "profile-header"], [1, "profile-avatar"], [1, "profile-info"], [1, "badge", "badge-light"], [1, "profile-actions"], [1, "main-footer"], [1, "footer-content"], [1, "footer-brand"], [1, "social-links"], ["href", "#"], [1, "fab", "fa-facebook-f"], [1, "fab", "fa-twitter"], [1, "fab", "fa-instagram"], [1, "footer-links"], [1, "footer-bottom"], [1, "restaurants-view"], [1, "count-badge"], [1, "menu-view"], [1, "back-btn", 3, "click"], ["class", "section-title", 4, "ngIf"], ["class", "menu-item-card", 4, "ngFor", "ngForOf"], [1, "menu-item-card"], [1, "menu-item-info"], [1, "item-footer"], [1, "add-to-cart-btn", 3, "click"], [1, "overlay", 3, "click"], [1, "cart-item"], [1, "cart-item-info"], [1, "cart-item-controls"], [1, "panel-footer"], [1, "cart-total"], [1, "btn", "btn-order", "full-width", 3, "click"], [1, "order-card"], [1, "order-header"], [1, "order-id"], [1, "order-status"], [1, "order-restaurant"], [1, "order-footer"], [1, "order-total"]],
      template: function CustomerDashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerDashboardComponent_Template_div_click_3_listener() {
            return ctx.goHome();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h1", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "FOOD");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "FLOW");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Deliver to: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "nav", 8)(15, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerDashboardComponent_Template_a_click_15_listener() {
            return ctx.goHome();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Home");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerDashboardComponent_Template_a_click_17_listener() {
            return ctx.browseRestaurants();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Restaurants");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, CustomerDashboardComponent_a_19_Template, 2, 0, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, CustomerDashboardComponent_a_21_Template, 2, 0, "a", 12)(22, CustomerDashboardComponent_a_22_Template, 2, 0, "a", 12)(23, CustomerDashboardComponent_a_23_Template, 2, 0, "a", 13)(24, CustomerDashboardComponent_span_24_Template, 2, 0, "span", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerDashboardComponent_Template_div_click_25_listener() {
            return ctx.showCartPanel = true;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "i", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, CustomerDashboardComponent_div_29_Template, 1, 0, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 19)(31, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "input", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function CustomerDashboardComponent_Template_input_ngModelChange_33_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.searchQuery, $event) || (ctx.searchQuery = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup.enter", function CustomerDashboardComponent_Template_input_keyup_enter_33_listener() {
            return ctx.searchRestaurants();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 23)(35, "button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "FILTERS");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerDashboardComponent_Template_button_click_37_listener() {
            return ctx.openMyOrders();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "MY ORDERS");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerDashboardComponent_Template_button_click_39_listener() {
            return ctx.openMyOrders();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "TRACK ORDER");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "main", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, CustomerDashboardComponent_section_42_Template, 7, 2, "section", 27)(43, CustomerDashboardComponent_section_43_Template, 9, 2, "section", 28)(44, CustomerDashboardComponent_section_44_Template, 8, 2, "section", 29)(45, CustomerDashboardComponent_section_45_Template, 8, 1, "section", 30)(46, CustomerDashboardComponent_section_46_Template, 28, 0, "section", 31)(47, CustomerDashboardComponent_section_47_Template, 22, 0, "section", 32)(48, CustomerDashboardComponent_section_48_Template, 5, 2, "section", 33)(49, CustomerDashboardComponent_section_49_Template, 87, 35, "section", 34)(50, CustomerDashboardComponent_section_50_Template, 20, 2, "section", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](51, CustomerDashboardComponent_footer_51_Template, 61, 0, "footer", 36)(52, CustomerDashboardComponent_section_52_Template, 8, 2, "section", 37)(53, CustomerDashboardComponent_section_53_Template, 6, 2, "section", 38)(54, CustomerDashboardComponent_div_54_Template, 1, 0, "div", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 40)(56, "div", 41)(57, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "i", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, " Your Cart");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "button", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerDashboardComponent_Template_button_click_60_listener() {
            return ctx.showCartPanel = false;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "\u2715");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](63, CustomerDashboardComponent_div_63_Template, 3, 0, "div", 44)(64, CustomerDashboardComponent_div_64_Template, 13, 4, "div", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](65, CustomerDashboardComponent_div_65_Template, 8, 1, "div", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](66, CustomerDashboardComponent_div_66_Template, 1, 0, "div", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 47)(68, "div", 41)(69, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "My Orders");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "button", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerDashboardComponent_Template_button_click_71_listener() {
            return ctx.showOrdersPanel = false;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "\u2715");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](74, CustomerDashboardComponent_div_74_Template, 12, 6, "div", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.selectedAddress, " \u25BC");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.activeView === "home");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.activeView === "restaurants");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.cartCount);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.searchQuery);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.activeView === "home");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.activeView === "home");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.activeView === "home");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.activeView === "home");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.activeView === "home");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.activeView === "home");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.activeView === "item-detail");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.activeView === "checkout");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.activeView === "profile");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.activeView === "home");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.activeView === "restaurants");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.activeView === "menu");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showCartPanel);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("open", ctx.showCartPanel);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.cart.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.cart);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.cart.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showOrdersPanel);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("open", ctx.showOrdersPanel);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.orders);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.SlicePipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.TitleCasePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm],
      styles: ["@import url(https://fonts.googleapis.com/css2?family=Outfit:wght@300;400[_ngcontent-%COMP%];600[_ngcontent-%COMP%];700[_ngcontent-%COMP%];800&display=swap)[_ngcontent-%COMP%];\n\n\n.foodflow-theme[_ngcontent-%COMP%] {\n  font-family: 'Outfit', sans-serif;\n  background-color: #062315; \n\n  color: #ffffff;\n  min-height: 100vh;\n}\n\n\n\n.top-nav[_ngcontent-%COMP%] {\n  background-color: #082d1c;\n  padding: 0.8rem 2rem;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n}\n\n.top-nav-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n\n.logo-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n}\n\n.logo[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 1.5rem;\n  margin: 0;\n  color: #00e08f;\n  letter-spacing: -0.5px;\n}\n\n.logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n\n.location-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: rgba(0, 0, 0, 0.3);\n  padding: 0.4rem 1rem;\n  border-radius: 20px;\n  font-size: 0.85rem;\n  color: #a0b2a8;\n  border: 1px solid rgba(255,255,255,0.05);\n}\n\n.location-badge[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  background-color: #00e08f;\n  border-radius: 50%;\n  margin-right: 8px;\n}\n\n.location-badge[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-weight: 600;\n}\n\n.top-nav-links[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n}\n\n.top-nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .welcome-text[_ngcontent-%COMP%] {\n  color: #a0b2a8;\n  text-decoration: none;\n  font-size: 0.8rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  transition: color 0.2s;\n}\n\n.top-nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #00e08f;\n}\n\n.cart-icon[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  color: #ffffff;\n  font-size: 1.1rem;\n}\n\n.cart-count[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -8px;\n  right: -10px;\n  background: #ff4757;\n  color: white;\n  font-size: 0.6rem;\n  font-weight: bold;\n  padding: 2px 5px;\n  border-radius: 10px;\n}\n\n.user-avatar[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  background: #00e08f;\n  cursor: pointer;\n}\n\n\n\n.search-action-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  padding: 1.5rem 2rem;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n\n.search-container[_ngcontent-%COMP%] {\n  flex: 1;\n  background: #113824;\n  display: flex;\n  align-items: center;\n  padding: 0.8rem 1.2rem;\n  border-radius: 8px;\n  gap: 10px;\n  border: 1px solid rgba(255,255,255,0.03);\n}\n\n.search-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #728c7f;\n}\n\n.search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: white;\n  width: 100%;\n  font-family: 'Outfit', sans-serif;\n  font-size: 0.95rem;\n  outline: none;\n}\n\n.search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #728c7f;\n}\n\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n\n.btn[_ngcontent-%COMP%] {\n  padding: 0.8rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 700;\n  font-size: 0.8rem;\n  text-transform: uppercase;\n  cursor: pointer;\n  border: none;\n  transition: all 0.2s;\n  letter-spacing: 0.5px;\n  font-family: inherit;\n}\n\n.btn-green[_ngcontent-%COMP%] {\n  background: #00e08f;\n  color: #062315;\n}\n\n.btn-green[_ngcontent-%COMP%]:hover {\n  background: #00c77f;\n}\n\n.btn-dark[_ngcontent-%COMP%] {\n  background: #113824;\n  color: #ffffff;\n  border: 1px solid rgba(255,255,255,0.05);\n}\n\n.btn-dark[_ngcontent-%COMP%]:hover {\n  background: #184830;\n}\n\n.main-content[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 2rem;\n}\n\n\n\n.hero-slider-section[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.hero-slider-container[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #0b3521 0%, #061c11 100%);\n  border-radius: 30px;\n  padding: 4rem;\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  min-height: 600px;\n  box-shadow: 0 20px 50px rgba(0,0,0,0.5);\n  border: 1px solid rgba(255,255,255,0.02);\n}\n\n.glow-circle[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 400px;\n  height: 400px;\n  background: rgba(0, 224, 143, 0.15);\n  filter: blur(80px);\n  border-radius: 50%;\n  z-index: 0;\n}\n\n.glow-circle.top-right[_ngcontent-%COMP%] {\n  top: -100px;\n  right: 100px;\n}\n\n.glow-ring[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100px;\n  right: 200px;\n  width: 60px;\n  height: 60px;\n  border: 2px solid rgba(0, 224, 143, 0.3);\n  border-radius: 50%;\n  z-index: 0;\n}\n\n.hero-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: relative;\n  z-index: 1;\n  flex: 1;\n}\n\n.hero-text-content[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 500px;\n}\n\n.premium-badge[_ngcontent-%COMP%] {\n  background: #f1c40f;\n  color: #062315;\n  padding: 0.3rem 1rem;\n  border-radius: 20px;\n  font-weight: 800;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  display: inline-block;\n  margin-bottom: 1.5rem;\n}\n\n.hero-title[_ngcontent-%COMP%] {\n  font-size: 4.5rem;\n  line-height: 1.1;\n  font-weight: 800;\n  margin: 0 0 1rem;\n  color: white;\n}\n\n.hero-title[_ngcontent-%COMP%]   .highlight[_ngcontent-%COMP%] {\n  color: #00e08f;\n}\n\n.hero-desc[_ngcontent-%COMP%] {\n  color: #a0b2a8;\n  font-size: 1.1rem;\n  margin-bottom: 2.5rem;\n}\n\n.hero-price-action[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n}\n\n.price[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 800;\n  color: #f1c40f;\n}\n\n.btn-order[_ngcontent-%COMP%] {\n  background: #00e08f;\n  color: #062315;\n  padding: 1rem 2rem;\n  font-size: 1rem;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.btn-order[_ngcontent-%COMP%]:hover {\n  background: #00c77f;\n  transform: translateY(-2px);\n}\n\n.hero-image-content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  position: relative;\n}\n\n\n\n.hero-image-content[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  width: 450px;\n  height: 450px;\n  background: #092c1c;\n  border-radius: 50%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: -1;\n}\n\n.image-wrapper[_ngcontent-%COMP%] {\n  width: 400px;\n  height: 400px;\n  border-radius: 30px;\n  overflow: hidden;\n  transform: rotate(5deg);\n  box-shadow: -10px 20px 40px rgba(0,0,0,0.5);\n  border: 4px solid rgba(255,255,255,0.05);\n}\n\n.image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transform: scale(1.1) rotate(-5deg); \n\n}\n\n.slider-thumbnails[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n  margin-top: 2rem;\n  position: relative;\n  z-index: 1;\n}\n\n.thumb[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 40px;\n  border-radius: 8px;\n  overflow: hidden;\n  cursor: pointer;\n  opacity: 0.5;\n  transition: all 0.3s;\n  border: 2px solid transparent;\n}\n\n.thumb[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n\n.thumb.active[_ngcontent-%COMP%] {\n  opacity: 1;\n  border-color: white;\n  transform: scale(1.1);\n  box-shadow: 0 5px 15px rgba(0,0,0,0.3);\n}\n\n.thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n\n\n.side-panel[_ngcontent-%COMP%] {\n  background: #0b3521;\n  color: white;\n  border-left: 1px solid rgba(255,255,255,0.1);\n}\n.panel-header[_ngcontent-%COMP%] {\n  background: #082d1c;\n  border-bottom: 1px solid rgba(255,255,255,0.05);\n}\n.cart-item[_ngcontent-%COMP%] {\n  background: #113824;\n  color: white;\n}\n.cart-item-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .cart-total[_ngcontent-%COMP%] { color: white; }\n.qty-btn[_ngcontent-%COMP%] { background: #00e08f; color: #062315; }\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] { color: #a0b2a8; }\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] { background: #113824; border: 1px solid rgba(255,255,255,0.1); color: white; }\n.restaurant-card[_ngcontent-%COMP%], .menu-item-card[_ngcontent-%COMP%] { background: #0b3521; border: 1px solid rgba(255,255,255,0.05); }\n.restaurant-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .menu-item-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] { color: white; }\n.restaurant-desc[_ngcontent-%COMP%], .menu-item-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { color: #a0b2a8; }\n.section-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { color: white; }\n.add-to-cart-btn[_ngcontent-%COMP%] { background: #00e08f; color: #062315; }\n\n\n\n.overlay[_ngcontent-%COMP%] { position: fixed; inset: 0; background: rgba(0,0,0,0.6); z-index: 1100; }\n.side-panel[_ngcontent-%COMP%] { position: fixed; top: 0; right: -420px; width: 420px; height: 100vh; z-index: 1200; display: flex; flex-direction: column; transition: right 0.3s ease; }\n.side-panel.open[_ngcontent-%COMP%] { right: 0; }\n.panel-header[_ngcontent-%COMP%] { display: flex; justify-content: space-between; padding: 1.5rem; }\n.close-btn[_ngcontent-%COMP%] { background: none; border: none; color: white; font-size: 1.5rem; cursor: pointer; }\n.panel-body[_ngcontent-%COMP%] { padding: 1.5rem; flex: 1; overflow-y: auto; }\n.panel-footer[_ngcontent-%COMP%] { padding: 1.5rem; border-top: 1px solid rgba(255,255,255,0.1); }\n.cart-total[_ngcontent-%COMP%] { display: flex; justify-content: space-between; font-size: 1.2rem; margin-bottom: 1rem; }\n.full-width[_ngcontent-%COMP%] { width: 100%; }\n\n.restaurants-grid[_ngcontent-%COMP%], .menu-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 2rem;\n}\n.restaurant-img[_ngcontent-%COMP%] { height: 200px; overflow: hidden; position: relative; border-radius: 12px 12px 0 0; }\n.restaurant-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] { width: 100%; height: 100%; object-fit: cover; }\n.restaurant-info[_ngcontent-%COMP%], .menu-item-info[_ngcontent-%COMP%] { padding: 1.5rem; }\n.item-footer[_ngcontent-%COMP%] { display: flex; justify-content: space-between; margin-top: 1rem; align-items: center; }\n.restaurant-meta[_ngcontent-%COMP%] { margin-top: 10px; color: #f1c40f; }\n\n\n\n.mb-2[_ngcontent-%COMP%] { margin-bottom: 0.5rem; }\n.badge[_ngcontent-%COMP%] { padding: 0.3rem 0.6rem; border-radius: 12px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; }\n.badge-light[_ngcontent-%COMP%] { background: rgba(255, 255, 255, 0.1); color: #00e08f; }\n.item-header-row[_ngcontent-%COMP%] { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem; }\n.item-header-row[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] { margin: 0; font-size: 1.1rem; color: white; }\n.empty-state[_ngcontent-%COMP%] { grid-column: 1 / -1; text-align: center; padding: 3rem; color: #a0b2a8; background: #0b3521; border-radius: 16px; border: 1px dashed rgba(255,255,255,0.1); }\n\n\n\n.top-nav-content[_ngcontent-%COMP%] { max-width: 1400px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; }\n\n\n\n.main-nav[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2rem;\n  align-items: center;\n}\n\n.main-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #a0b2a8;\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 1rem;\n  transition: all 0.3s;\n  padding: 0.5rem 0;\n  border-bottom: 2px solid transparent;\n}\n\n.main-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .main-nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: #00e08f;\n  border-bottom-color: #00e08f;\n}\n\n.logo-section[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 2rem; }\n.logo[_ngcontent-%COMP%] { font-size: 1.8rem; font-weight: 800; color: white; margin: 0; letter-spacing: -1px; }\n\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 3rem 0 1.5rem;\n}\n\n.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: white;\n  margin: 0;\n}\n\n.view-all[_ngcontent-%COMP%] {\n  color: #00e08f;\n  text-decoration: none;\n  font-weight: 600;\n  transition: color 0.2s;\n}\n\n.view-all[_ngcontent-%COMP%]:hover {\n  color: #00c77f;\n}\n\n.btn-outline-green[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #00e08f;\n  border: 1px solid #00e08f;\n}\n\n.btn-outline-green[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 224, 143, 0.1);\n}\n\n.categories-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n  gap: 1.5rem;\n}\n\n.category-card[_ngcontent-%COMP%] {\n  background: #0b3521;\n  border: 1px solid rgba(255,255,255,0.05);\n  border-radius: 16px;\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n\n.category-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  background: #113824;\n  border-color: #00e08f;\n  box-shadow: 0 10px 20px rgba(0, 224, 143, 0.1);\n}\n\n.cat-icon-placeholder[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  background: #184830;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  color: #00e08f;\n}\n\n.category-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: white;\n}\n\n\n\n.modern-food-card[_ngcontent-%COMP%] {\n  background: #0b3521;\n  border-radius: 20px;\n  overflow: hidden;\n  box-shadow: 0 10px 30px rgba(0,0,0,0.2);\n  transition: transform 0.3s, box-shadow 0.3s;\n  border: 1px solid rgba(255,255,255,0.05);\n  display: flex;\n  flex-direction: column;\n}\n\n.modern-food-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 15px 40px rgba(0,224,143,0.15);\n  border-color: rgba(0,224,143,0.3);\n}\n\n.card-image-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  height: 180px;\n  overflow: hidden;\n}\n\n.card-image-wrapper[_ngcontent-%COMP%]   .food-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.5s;\n}\n\n.modern-food-card[_ngcontent-%COMP%]:hover   .food-img[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n\n.badge-floating[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  background: rgba(0,0,0,0.6);\n  color: #00e08f;\n  backdrop-filter: blur(4px);\n  border: 1px solid rgba(0,224,143,0.3);\n}\n\n.card-content[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n\n.item-title[_ngcontent-%COMP%] {\n  margin: 0 0 5px;\n  font-size: 1.2rem;\n  color: white;\n  font-weight: 700;\n}\n\n.restaurant-name[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  margin: 0 0 10px;\n}\n\n.restaurant-name[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #00e08f;\n  margin-right: 5px;\n}\n\n.item-desc[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #a0b2a8;\n  margin-bottom: 1.5rem;\n  flex: 1;\n  line-height: 1.5;\n}\n\n.card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: auto;\n  border-top: 1px solid rgba(255,255,255,0.05);\n  padding-top: 1rem;\n}\n\n.card-footer[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 800;\n  color: #f1c40f;\n}\n\n.btn-add-cart[_ngcontent-%COMP%] {\n  background: #00e08f;\n  color: #062315;\n  border: none;\n  padding: 0.5rem 1rem;\n  border-radius: 8px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n\n.btn-add-cart[_ngcontent-%COMP%]:hover {\n  background: #00c77f;\n  transform: scale(1.05);\n}\n\n\n\n.how-it-works-section[_ngcontent-%COMP%] {\n  padding: 4rem 0;\n  border-top: 1px solid rgba(255,255,255,0.05);\n  margin-top: 2rem;\n}\n\n.section-title-center[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 3rem;\n}\n\n.section-title-center[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin: 0 0 10px;\n  color: white;\n}\n\n.section-title-center[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #a0b2a8;\n  font-size: 1.1rem;\n}\n\n.steps-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 2rem;\n}\n\n.step-card[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem;\n  background: #0b3521;\n  border-radius: 20px;\n  border: 1px solid rgba(255,255,255,0.02);\n}\n\n.step-icon[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n  margin: 0 auto 1.5rem;\n  color: white;\n}\n\n.bg-orange[_ngcontent-%COMP%] { background: #e67e22; box-shadow: 0 10px 20px rgba(230, 126, 34, 0.2); }\n.bg-green[_ngcontent-%COMP%] { background: #00e08f; color: #062315; box-shadow: 0 10px 20px rgba(0, 224, 143, 0.2); }\n.bg-blue[_ngcontent-%COMP%] { background: #3498db; box-shadow: 0 10px 20px rgba(52, 152, 219, 0.2); }\n\n.step-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: white;\n  margin: 0 0 10px;\n  font-size: 1.3rem;\n}\n\n.step-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #a0b2a8;\n  margin: 0;\n  line-height: 1.6;\n}\n\n\n\n.app-banner-section[_ngcontent-%COMP%] {\n  padding: 4rem 0;\n}\n\n.app-banner-container[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #00e08f 0%, #00a86b 100%);\n  border-radius: 30px;\n  padding: 4rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  overflow: hidden;\n  position: relative;\n  box-shadow: 0 20px 40px rgba(0, 224, 143, 0.2);\n}\n\n.app-banner-content[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 500px;\n  color: #062315;\n}\n\n.app-banner-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  font-weight: 800;\n  margin: 0 0 1rem;\n}\n\n.app-banner-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  margin-bottom: 2rem;\n  font-weight: 500;\n}\n\n.store-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n\n.btn-store[_ngcontent-%COMP%] {\n  background: #062315;\n  color: white;\n  border: none;\n  border-radius: 12px;\n  padding: 0.8rem 1.5rem;\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  cursor: pointer;\n  transition: transform 0.2s;\n}\n\n.btn-store[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n}\n\n.btn-store[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n\n.store-text[_ngcontent-%COMP%] {\n  text-align: left;\n  display: flex;\n  flex-direction: column;\n}\n\n.store-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  text-transform: uppercase;\n}\n\n.store-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n\n\n\n.main-footer[_ngcontent-%COMP%] {\n  background: #04180e;\n  padding: 4rem 2rem 2rem;\n  margin-top: 4rem;\n  border-top: 1px solid rgba(255,255,255,0.05);\n}\n\n.footer-content[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 2fr 1fr 1fr 1fr;\n  gap: 4rem;\n  margin-bottom: 3rem;\n}\n\n.footer-brand[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #a0b2a8;\n  line-height: 1.6;\n  margin: 1.5rem 0;\n}\n\n.social-links[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n\n.social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: #0b3521;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  transition: all 0.3s;\n}\n\n.social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #00e08f;\n  color: #062315;\n  transform: translateY(-3px);\n}\n\n.footer-links[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: white;\n  margin: 0 0 1.5rem;\n  font-size: 1.2rem;\n}\n\n.footer-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.footer-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 0.8rem;\n}\n\n.footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #a0b2a8;\n  text-decoration: none;\n  transition: color 0.2s;\n}\n\n.footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #00e08f;\n}\n\n.footer-bottom[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: 0 auto;\n  text-align: center;\n  padding-top: 2rem;\n  border-top: 1px solid rgba(255,255,255,0.05);\n  color: #728c7f;\n}\n\n\n\n.profile-view[_ngcontent-%COMP%] {\n  padding: 2rem 0;\n}\n\n.profile-container[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 0 auto;\n}\n\n.profile-card[_ngcontent-%COMP%] {\n  background: #0b3521;\n  border-radius: 20px;\n  padding: 3rem;\n  border: 1px solid rgba(255,255,255,0.05);\n  box-shadow: 0 10px 30px rgba(0,0,0,0.2);\n}\n\n.profile-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n  margin-bottom: 3rem;\n}\n\n.profile-avatar[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #00e08f 0%, #00a86b 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.profile-avatar[_ngcontent-%COMP%]::after {\n  content: '\\f007';\n  font-family: 'Font Awesome 5 Free';\n  font-weight: 900;\n  font-size: 3rem;\n  color: #062315;\n}\n\n.profile-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin: 0 0 5px;\n  color: white;\n}\n\n.profile-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #a0b2a8;\n  margin: 0 0 10px;\n  font-size: 1.1rem;\n}\n\n.profile-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n\n.profile-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 1rem;\n  font-size: 1.1rem;\n}\n\n\n\n.item-detail-view[_ngcontent-%COMP%] {\n  padding: 2rem 0;\n}\n\n.item-detail-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 3rem;\n  background: #0b3521;\n  border-radius: 20px;\n  overflow: hidden;\n  box-shadow: 0 10px 30px rgba(0,0,0,0.2);\n  border: 1px solid rgba(255,255,255,0.05);\n  margin-bottom: 4rem;\n}\n\n.item-detail-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  min-height: 400px;\n}\n\n.item-detail-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.item-detail-info[_ngcontent-%COMP%] {\n  padding: 3rem 3rem 3rem 0;\n  display: flex;\n  flex-direction: column;\n}\n\n.item-detail-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  color: white;\n  margin: 0 0 10px;\n}\n\n.price-large[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #f1c40f;\n  font-weight: 800;\n  margin-bottom: 1.5rem;\n}\n\n.item-detail-desc[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #a0b2a8;\n  line-height: 1.6;\n  margin-bottom: 2rem;\n  flex: 1;\n}\n\n.item-detail-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.5rem;\n  align-items: center;\n}\n\n.qty-selector[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: #062315;\n  border-radius: 12px;\n  border: 1px solid rgba(255,255,255,0.1);\n  overflow: hidden;\n}\n\n.qty-selector[_ngcontent-%COMP%]   .qty-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  color: white;\n  border: none;\n  width: 40px;\n  height: 40px;\n  font-size: 1.2rem;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n\n.qty-selector[_ngcontent-%COMP%]   .qty-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255,255,255,0.1);\n}\n\n.qty-selector[_ngcontent-%COMP%]   .qty-num[_ngcontent-%COMP%] {\n  width: 40px;\n  text-align: center;\n  font-weight: 700;\n  color: white;\n}\n\n.more-from-restaurant[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n\n@media (max-width: 768px) {\n  .item-detail-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .item-detail-info[_ngcontent-%COMP%] {\n    padding: 2rem;\n  }\n  .item-detail-image[_ngcontent-%COMP%] {\n    min-height: 250px;\n  }\n}\n\n\n\n.checkout-view[_ngcontent-%COMP%] {\n  padding: 2rem 0;\n}\n\n.checkout-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  gap: 2rem;\n  margin-top: 1.5rem;\n}\n\n.checkout-card[_ngcontent-%COMP%] {\n  background: #0b3521;\n  border-radius: 20px;\n  padding: 2rem;\n  border: 1px solid rgba(255,255,255,0.05);\n  box-shadow: 0 10px 30px rgba(0,0,0,0.2);\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  color: white;\n  margin: 0 0 1.5rem;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  border-bottom: 1px solid rgba(255,255,255,0.05);\n  padding-bottom: 1rem;\n}\n\n.card-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #00e08f;\n}\n\n\n\n.checkout-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #a0b2a8;\n  letter-spacing: 0.5px;\n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  background: #062315;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 12px;\n  padding: 1rem 1.2rem;\n  font-size: 1rem;\n  color: white;\n  transition: all 0.3s ease;\n  font-family: inherit;\n  width: 100%;\n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  color: rgba(160, 178, 168, 0.5);\n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #00e08f;\n  box-shadow: 0 0 0 3px rgba(0, 224, 143, 0.15);\n  background: #092c1a;\n}\n\n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 100px;\n}\n\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n\n.mt-3[_ngcontent-%COMP%] { margin-top: 1.5rem; }\n\n\n\n.payment-options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.payment-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem 1.5rem;\n  background: rgba(0,0,0,0.2);\n  border: 1px solid rgba(255,255,255,0.1);\n  border-radius: 12px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n\n.payment-option[_ngcontent-%COMP%]:hover {\n  background: rgba(255,255,255,0.05);\n}\n\n.payment-option.selected[_ngcontent-%COMP%] {\n  border-color: #00e08f;\n  background: rgba(0, 224, 143, 0.05);\n}\n\n.payment-option[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%] {\n  accent-color: #00e08f;\n  width: 18px;\n  height: 18px;\n}\n\n.payment-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: white;\n}\n\n.payment-info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n\n.text-green[_ngcontent-%COMP%] { color: #2ecc71; }\n.text-blue[_ngcontent-%COMP%] { color: #3498db; }\n\n.card-input-mock[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  padding-top: 1.5rem;\n  border-top: 1px dashed rgba(255,255,255,0.1);\n}\n\n\n\n.sticky-summary[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 100px;\n}\n\n.summary-items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n  max-height: 300px;\n  overflow-y: auto;\n}\n\n.summary-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding-bottom: 1rem;\n  border-bottom: 1px dashed rgba(255,255,255,0.05);\n}\n\n.summary-qty[_ngcontent-%COMP%] {\n  color: #00e08f;\n  font-weight: 800;\n  min-width: 30px;\n}\n\n.summary-name[_ngcontent-%COMP%] {\n  color: white;\n  flex: 1;\n}\n\n.summary-price[_ngcontent-%COMP%] {\n  color: #f1c40f;\n  font-weight: 600;\n}\n\n.summary-calculations[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.8rem;\n  padding-top: 1rem;\n}\n\n.calc-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  color: #a0b2a8;\n  font-size: 1rem;\n}\n\n.total-row[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 1.3rem;\n  font-weight: 800;\n  margin-top: 1rem;\n  padding-top: 1rem;\n  border-top: 1px solid rgba(255,255,255,0.1);\n}\n\n.total-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  color: #f1c40f;\n}\n\n.btn-large[_ngcontent-%COMP%] {\n  padding: 1.2rem;\n  font-size: 1.1rem;\n}\n\n.secure-text[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #728c7f;\n  font-size: 0.85rem;\n  margin-top: 1rem;\n}\n\n.secure-text[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n@media (max-width: 992px) {\n  .checkout-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n\n\n.fade-in[_ngcontent-%COMP%] { animation: _ngcontent-%COMP%_fadeIn 0.5s ease; }\n@keyframes _ngcontent-%COMP%_fadeIn { from { opacity: 0; } to { opacity: 1; } }\n\n.fade-in-up[_ngcontent-%COMP%] { animation: _ngcontent-%COMP%_fadeInUp 0.5s ease; }\n@keyframes _ngcontent-%COMP%_fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jdXN0b21lci9jdXN0b21lci1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1QkFBdUI7O0FBR3ZCO0VBQ0UsaUNBQWlDO0VBQ2pDLHlCQUF5QixFQUFFLDBCQUEwQjtFQUNyRCxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBLFlBQVk7QUFDWjtFQUNFLHlCQUF5QjtFQUN6QixvQkFBb0I7RUFDcEIsa0RBQWtEO0FBQ3BEOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsU0FBUztFQUNULGNBQWM7RUFDZCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQSwwQkFBMEI7QUFDMUI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1Qsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7RUFDWCxpQ0FBaUM7RUFDakMsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsYUFBYTtBQUNmOztBQUVBLHdCQUF3QjtBQUN4QjtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDZEQUE2RDtFQUM3RCxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsdUNBQXVDO0VBQ3ZDLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLG1DQUFtQztFQUNuQyxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLHdDQUF3QztFQUN4QyxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLE9BQU87RUFDUCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQSwwQ0FBMEM7QUFDMUM7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLDJDQUEyQztFQUMzQyx3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtQ0FBbUMsRUFBRSxnRUFBZ0U7QUFDdkc7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQSx5REFBeUQ7QUFDekQ7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLDRDQUE0QztBQUM5QztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLCtDQUErQztBQUNqRDtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDtBQUNBLGtDQUFrQyxZQUFZLEVBQUU7QUFDaEQsV0FBVyxtQkFBbUIsRUFBRSxjQUFjLEVBQUU7QUFDaEQsb0JBQW9CLGNBQWMsRUFBRTtBQUNwQyxvQkFBb0IsbUJBQW1CLEVBQUUsdUNBQXVDLEVBQUUsWUFBWSxFQUFFO0FBQ2hHLG9DQUFvQyxtQkFBbUIsRUFBRSx3Q0FBd0MsRUFBRTtBQUNuRywwQ0FBMEMsWUFBWSxFQUFFO0FBQ3hELHNDQUFzQyxjQUFjLEVBQUU7QUFDdEQsb0JBQW9CLFlBQVksRUFBRTtBQUNsQyxtQkFBbUIsbUJBQW1CLEVBQUUsY0FBYyxFQUFFOztBQUV4RCx5QkFBeUI7QUFDekIsV0FBVyxlQUFlLEVBQUUsUUFBUSxFQUFFLDJCQUEyQixFQUFFLGFBQWEsRUFBRTtBQUNsRixjQUFjLGVBQWUsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxzQkFBc0IsRUFBRSwyQkFBMkIsRUFBRTtBQUN0SyxtQkFBbUIsUUFBUSxFQUFFO0FBQzdCLGdCQUFnQixhQUFhLEVBQUUsOEJBQThCLEVBQUUsZUFBZSxFQUFFO0FBQ2hGLGFBQWEsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxlQUFlLEVBQUU7QUFDL0YsY0FBYyxlQUFlLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFO0FBQzFELGdCQUFnQixlQUFlLEVBQUUsMkNBQTJDLEVBQUU7QUFDOUUsY0FBYyxhQUFhLEVBQUUsOEJBQThCLEVBQUUsaUJBQWlCLEVBQUUsbUJBQW1CLEVBQUU7QUFDckcsY0FBYyxXQUFXLEVBQUU7O0FBRTNCO0VBQ0UsYUFBYTtFQUNiLDREQUE0RDtFQUM1RCxTQUFTO0FBQ1g7QUFDQSxrQkFBa0IsYUFBYSxFQUFFLGdCQUFnQixFQUFFLGtCQUFrQixFQUFFLDRCQUE0QixFQUFFO0FBQ3JHLHNCQUFzQixXQUFXLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixFQUFFO0FBQ3BFLG9DQUFvQyxlQUFlLEVBQUU7QUFDckQsZUFBZSxhQUFhLEVBQUUsOEJBQThCLEVBQUUsZ0JBQWdCLEVBQUUsbUJBQW1CLEVBQUU7QUFDckcsbUJBQW1CLGdCQUFnQixFQUFFLGNBQWMsRUFBRTs7QUFFckQsdUJBQXVCO0FBQ3ZCLFFBQVEscUJBQXFCLEVBQUU7QUFDL0IsU0FBUyxzQkFBc0IsRUFBRSxtQkFBbUIsRUFBRSxrQkFBa0IsRUFBRSxnQkFBZ0IsRUFBRSx5QkFBeUIsRUFBRTtBQUN2SCxlQUFlLG9DQUFvQyxFQUFFLGNBQWMsRUFBRTtBQUNyRSxtQkFBbUIsYUFBYSxFQUFFLDhCQUE4QixFQUFFLHVCQUF1QixFQUFFLHFCQUFxQixFQUFFO0FBQ2xILHNCQUFzQixTQUFTLEVBQUUsaUJBQWlCLEVBQUUsWUFBWSxFQUFFO0FBQ2xFLGVBQWUsbUJBQW1CLEVBQUUsa0JBQWtCLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRSx3Q0FBd0MsRUFBRTs7QUFFM0ssd0NBQXdDO0FBQ3hDLG1CQUFtQixpQkFBaUIsRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLDhCQUE4QixFQUFFLG1CQUFtQixFQUFFOztBQUUxSCxhQUFhO0FBQ2I7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGNBQWM7RUFDZCw0QkFBNEI7QUFDOUI7O0FBRUEsZ0JBQWdCLGFBQWEsRUFBRSxtQkFBbUIsRUFBRSxTQUFTLEVBQUU7QUFDL0QsUUFBUSxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLG9CQUFvQixFQUFFOztBQUU1RjtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGFBQWE7RUFDYiw0REFBNEQ7RUFDNUQsV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHdDQUF3QztFQUN4QyxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxlQUFlO0VBQ2Ysb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsOENBQThDO0FBQ2hEOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQSxxQkFBcUI7QUFDckI7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix1Q0FBdUM7RUFDdkMsMkNBQTJDO0VBQzNDLHdDQUF3QztFQUN4QyxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLDRDQUE0QztFQUM1QyxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLDJCQUEyQjtFQUMzQixjQUFjO0VBQ2QsMEJBQTBCO0VBQzFCLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLE9BQU87QUFDVDs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsT0FBTztFQUNQLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQiw0Q0FBNEM7RUFDNUMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFFBQVE7QUFDVjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7O0FBRUEseUJBQXlCO0FBQ3pCO0VBQ0UsZUFBZTtFQUNmLDRDQUE0QztFQUM1QyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJEQUEyRDtFQUMzRCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUEsYUFBYSxtQkFBbUIsRUFBRSwrQ0FBK0MsRUFBRTtBQUNuRixZQUFZLG1CQUFtQixFQUFFLGNBQWMsRUFBRSw4Q0FBOEMsRUFBRTtBQUNqRyxXQUFXLG1CQUFtQixFQUFFLCtDQUErQyxFQUFFOztBQUVqRjtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLFNBQVM7RUFDVCxnQkFBZ0I7QUFDbEI7O0FBRUEsdUJBQXVCO0FBQ3ZCO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDZEQUE2RDtFQUM3RCxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsOENBQThDO0FBQ2hEOztBQUVBO0VBQ0UsT0FBTztFQUNQLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGVBQWU7RUFDZiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBLFdBQVc7QUFDWDtFQUNFLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLDRDQUE0QztFQUM1QyxjQUFjO0FBQ2hCOztBQUVBLGlCQUFpQjtBQUNqQjtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHdDQUF3QztFQUN4Qyx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiw2REFBNkQ7RUFDN0QsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UsT0FBTztFQUNQLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBRUEscUJBQXFCO0FBQ3JCO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsU0FBUztFQUNULG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHVDQUF1QztFQUN2Qyx3Q0FBd0M7RUFDeEMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsT0FBTztBQUNUOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsdUNBQXVDO0VBQ3ZDLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTtJQUNFLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isd0NBQXdDO0VBQ3hDLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULCtDQUErQztFQUMvQyxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBLGdCQUFnQjtBQUNoQjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7O0VBRUUsbUJBQW1CO0VBQ25CLDBDQUEwQztFQUMxQyxtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLG9CQUFvQjtFQUNwQixXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsK0JBQStCO0FBQ2pDOztBQUVBOztFQUVFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsNkNBQTZDO0VBQzdDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFNBQVM7QUFDWDs7QUFFQSxRQUFRLGtCQUFrQixFQUFFOztBQUU1QixvQkFBb0I7QUFDcEI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULG9CQUFvQjtFQUNwQiwyQkFBMkI7RUFDM0IsdUNBQXVDO0VBQ3ZDLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUEsY0FBYyxjQUFjLEVBQUU7QUFDOUIsYUFBYSxjQUFjLEVBQUU7O0FBRTdCO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQiw0Q0FBNEM7QUFDOUM7O0FBRUEsa0JBQWtCO0FBQ2xCO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1Qsb0JBQW9CO0VBQ3BCLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRTtJQUNFLDBCQUEwQjtFQUM1QjtBQUNGOztBQUVBLGVBQWU7QUFDZixXQUFXLDJCQUEyQixFQUFFO0FBQ3hDLG9CQUFvQixPQUFPLFVBQVUsRUFBRSxFQUFFLEtBQUssVUFBVSxFQUFFLEVBQUU7O0FBRTVELGNBQWMsNkJBQTZCLEVBQUU7QUFDN0Msc0JBQXNCLE9BQU8sVUFBVSxFQUFFLDJCQUEyQixFQUFFLEVBQUUsS0FBSyxVQUFVLEVBQUUsd0JBQXdCLEVBQUUsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbIi8qIEZPT0RGTE9XIFRoZW1lIENTUyAqL1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PdXRmaXQ6d2dodEAzMDA7NDAwOzYwMDs3MDA7ODAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuLmZvb2RmbG93LXRoZW1lIHtcclxuICBmb250LWZhbWlseTogJ091dGZpdCcsIHNhbnMtc2VyaWY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2MjMxNTsgLyogRGFyayBncmVlbiBiYWNrZ3JvdW5kICovXHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi8qIFRPUCBOQVYgKi9cclxuLnRvcC1uYXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwODJkMWM7XHJcbiAgcGFkZGluZzogMC44cmVtIDJyZW07XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XHJcbn1cclxuXHJcbi50b3AtbmF2LWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWF4LXdpZHRoOiAxNDAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5sb2dvLXNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDJyZW07XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIG1hcmdpbjogMDtcclxuICBjb2xvcjogIzAwZTA4ZjtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xyXG59XHJcblxyXG4ubG9nbyBzcGFuIHtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLmxvY2F0aW9uLWJhZGdlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIHBhZGRpbmc6IDAuNHJlbSAxcmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gIGNvbG9yOiAjYTBiMmE4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wNSk7XHJcbn1cclxuXHJcbi5sb2NhdGlvbi1iYWRnZSAuZG90IHtcclxuICB3aWR0aDogOHB4O1xyXG4gIGhlaWdodDogOHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGUwOGY7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcblxyXG4ubG9jYXRpb24tYmFkZ2Ugc3Ryb25nIHtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4udG9wLW5hdi1saW5rcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMS41cmVtO1xyXG59XHJcblxyXG4udG9wLW5hdi1saW5rcyBhLCAud2VsY29tZS10ZXh0IHtcclxuICBjb2xvcjogI2EwYjJhODtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzO1xyXG59XHJcblxyXG4udG9wLW5hdi1saW5rcyBhOmhvdmVyIHtcclxuICBjb2xvcjogIzAwZTA4ZjtcclxufVxyXG5cclxuLmNhcnQtaWNvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxufVxyXG5cclxuLmNhcnQtY291bnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC04cHg7XHJcbiAgcmlnaHQ6IC0xMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZjQ3NTc7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMC42cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHBhZGRpbmc6IDJweCA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLnVzZXItYXZhdGFyIHtcclxuICB3aWR0aDogMzVweDtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQ6ICMwMGUwOGY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBTRUFSQ0ggQU5EIEFDVElPTiBCQVIgKi9cclxuLnNlYXJjaC1hY3Rpb24tYmFyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxLjVyZW07XHJcbiAgcGFkZGluZzogMS41cmVtIDJyZW07XHJcbiAgbWF4LXdpZHRoOiAxNDAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5zZWFyY2gtY29udGFpbmVyIHtcclxuICBmbGV4OiAxO1xyXG4gIGJhY2tncm91bmQ6ICMxMTM4MjQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAuOHJlbSAxLjJyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGdhcDogMTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDMpO1xyXG59XHJcblxyXG4uc2VhcmNoLWNvbnRhaW5lciBpIHtcclxuICBjb2xvcjogIzcyOGM3ZjtcclxufVxyXG5cclxuLnNlYXJjaC1jb250YWluZXIgaW5wdXQge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1mYW1pbHk6ICdPdXRmaXQnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uc2VhcmNoLWNvbnRhaW5lciBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjNzI4YzdmO1xyXG59XHJcblxyXG4uYWN0aW9uLWJ1dHRvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBwYWRkaW5nOiAwLjhyZW0gMS41cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5idG4tZ3JlZW4ge1xyXG4gIGJhY2tncm91bmQ6ICMwMGUwOGY7XHJcbiAgY29sb3I6ICMwNjIzMTU7XHJcbn1cclxuXHJcbi5idG4tZ3JlZW46aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICMwMGM3N2Y7XHJcbn1cclxuXHJcbi5idG4tZGFyayB7XHJcbiAgYmFja2dyb3VuZDogIzExMzgyNDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDUpO1xyXG59XHJcblxyXG4uYnRuLWRhcms6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICMxODQ4MzA7XHJcbn1cclxuXHJcbi5tYWluLWNvbnRlbnQge1xyXG4gIG1heC13aWR0aDogMTQwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbn1cclxuXHJcbi8qIEhFUk8gU0xJREVSIFNFQ1RJT04gKi9cclxuLmhlcm8tc2xpZGVyLXNlY3Rpb24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaGVyby1zbGlkZXItY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMGIzNTIxIDAlLCAjMDYxYzExIDEwMCUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgcGFkZGluZzogNHJlbTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWluLWhlaWdodDogNjAwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAyMHB4IDUwcHggcmdiYSgwLDAsMCwwLjUpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wMik7XHJcbn1cclxuXHJcbi5nbG93LWNpcmNsZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMjI0LCAxNDMsIDAuMTUpO1xyXG4gIGZpbHRlcjogYmx1cig4MHB4KTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgei1pbmRleDogMDtcclxufVxyXG5cclxuLmdsb3ctY2lyY2xlLnRvcC1yaWdodCB7XHJcbiAgdG9wOiAtMTAwcHg7XHJcbiAgcmlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG4uZ2xvdy1yaW5nIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMDBweDtcclxuICByaWdodDogMjAwcHg7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMCwgMjI0LCAxNDMsIDAuMyk7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHotaW5kZXg6IDA7XHJcbn1cclxuXHJcbi5oZXJvLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLmhlcm8tdGV4dC1jb250ZW50IHtcclxuICBmbGV4OiAxO1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbn1cclxuXHJcbi5wcmVtaXVtLWJhZGdlIHtcclxuICBiYWNrZ3JvdW5kOiAjZjFjNDBmO1xyXG4gIGNvbG9yOiAjMDYyMzE1O1xyXG4gIHBhZGRpbmc6IDAuM3JlbSAxcmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbn1cclxuXHJcbi5oZXJvLXRpdGxlIHtcclxuICBmb250LXNpemU6IDQuNXJlbTtcclxuICBsaW5lLWhlaWdodDogMS4xO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgbWFyZ2luOiAwIDAgMXJlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5oZXJvLXRpdGxlIC5oaWdobGlnaHQge1xyXG4gIGNvbG9yOiAjMDBlMDhmO1xyXG59XHJcblxyXG4uaGVyby1kZXNjIHtcclxuICBjb2xvcjogI2EwYjJhODtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XHJcbn1cclxuXHJcbi5oZXJvLXByaWNlLWFjdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMnJlbTtcclxufVxyXG5cclxuLnByaWNlIHtcclxuICBmb250LXNpemU6IDIuNXJlbTtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGNvbG9yOiAjZjFjNDBmO1xyXG59XHJcblxyXG4uYnRuLW9yZGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjMDBlMDhmO1xyXG4gIGNvbG9yOiAjMDYyMzE1O1xyXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTBweDtcclxufVxyXG5cclxuLmJ0bi1vcmRlcjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzAwYzc3ZjtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbn1cclxuXHJcbi5oZXJvLWltYWdlLWNvbnRlbnQge1xyXG4gIGZsZXg6IDE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi8qIEJhY2tncm91bmQgY2lyY3VsYXIgZ2xvdyBiZWhpbmQgaW1hZ2UgKi9cclxuLmhlcm8taW1hZ2UtY29udGVudDo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDQ1MHB4O1xyXG4gIGhlaWdodDogNDUwcHg7XHJcbiAgYmFja2dyb3VuZDogIzA5MmMxYztcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG4uaW1hZ2Utd3JhcHBlciB7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xyXG4gIGJveC1zaGFkb3c6IC0xMHB4IDIwcHggNDBweCByZ2JhKDAsMCwwLDAuNSk7XHJcbiAgYm9yZGVyOiA0cHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA1KTtcclxufVxyXG5cclxuLmltYWdlLXdyYXBwZXIgaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSgtNWRlZyk7IC8qIENvdW50ZXIgcm90YXRpb24gdG8ga2VlcCBpbWFnZSBzdHJhaWdodCB3aXRoaW4gcm90YXRlZCBtYXNrICovXHJcbn1cclxuXHJcbi5zbGlkZXItdGh1bWJuYWlscyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDFyZW07XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLnRodW1iIHtcclxuICB3aWR0aDogNjBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLnRodW1iOmhvdmVyIHtcclxuICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcbi50aHVtYi5hY3RpdmUge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDAsMCwwLDAuMyk7XHJcbn1cclxuXHJcbi50aHVtYiBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLyogUVVJQ0sgQURBUFRBVElPTiBGT1IgT1RIRVIgUEFORUxTIFRPIE1BVENIIFRIRSBUSEVNRSAqL1xyXG4uc2lkZS1wYW5lbCB7XHJcbiAgYmFja2dyb3VuZDogIzBiMzUyMTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XHJcbn1cclxuLnBhbmVsLWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZDogIzA4MmQxYztcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA1KTtcclxufVxyXG4uY2FydC1pdGVtIHtcclxuICBiYWNrZ3JvdW5kOiAjMTEzODI0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uY2FydC1pdGVtLWluZm8gaDQsIC5jYXJ0LXRvdGFsIHsgY29sb3I6IHdoaXRlOyB9XHJcbi5xdHktYnRuIHsgYmFja2dyb3VuZDogIzAwZTA4ZjsgY29sb3I6ICMwNjIzMTU7IH1cclxuLmZvcm0tZ3JvdXAgbGFiZWwgeyBjb2xvcjogI2EwYjJhODsgfVxyXG4uZm9ybS1ncm91cCBpbnB1dCB7IGJhY2tncm91bmQ6ICMxMTM4MjQ7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4xKTsgY29sb3I6IHdoaXRlOyB9XHJcbi5yZXN0YXVyYW50LWNhcmQsIC5tZW51LWl0ZW0tY2FyZCB7IGJhY2tncm91bmQ6ICMwYjM1MjE7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wNSk7IH1cclxuLnJlc3RhdXJhbnQtY2FyZCBoMywgLm1lbnUtaXRlbS1pbmZvIGg0IHsgY29sb3I6IHdoaXRlOyB9XHJcbi5yZXN0YXVyYW50LWRlc2MsIC5tZW51LWl0ZW0taW5mbyBwIHsgY29sb3I6ICNhMGIyYTg7IH1cclxuLnNlY3Rpb24tdGl0bGUgaDIgeyBjb2xvcjogd2hpdGU7IH1cclxuLmFkZC10by1jYXJ0LWJ0biB7IGJhY2tncm91bmQ6ICMwMGUwOGY7IGNvbG9yOiAjMDYyMzE1OyB9XHJcblxyXG4vKiBSRVVTRUQgRlJPTSBQUkVWSU9VUyAqL1xyXG4ub3ZlcmxheSB7IHBvc2l0aW9uOiBmaXhlZDsgaW5zZXQ6IDA7IGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC42KTsgei1pbmRleDogMTEwMDsgfVxyXG4uc2lkZS1wYW5lbCB7IHBvc2l0aW9uOiBmaXhlZDsgdG9wOiAwOyByaWdodDogLTQyMHB4OyB3aWR0aDogNDIwcHg7IGhlaWdodDogMTAwdmg7IHotaW5kZXg6IDEyMDA7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IHRyYW5zaXRpb246IHJpZ2h0IDAuM3MgZWFzZTsgfVxyXG4uc2lkZS1wYW5lbC5vcGVuIHsgcmlnaHQ6IDA7IH1cclxuLnBhbmVsLWhlYWRlciB7IGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgcGFkZGluZzogMS41cmVtOyB9XHJcbi5jbG9zZS1idG4geyBiYWNrZ3JvdW5kOiBub25lOyBib3JkZXI6IG5vbmU7IGNvbG9yOiB3aGl0ZTsgZm9udC1zaXplOiAxLjVyZW07IGN1cnNvcjogcG9pbnRlcjsgfVxyXG4ucGFuZWwtYm9keSB7IHBhZGRpbmc6IDEuNXJlbTsgZmxleDogMTsgb3ZlcmZsb3cteTogYXV0bzsgfVxyXG4ucGFuZWwtZm9vdGVyIHsgcGFkZGluZzogMS41cmVtOyBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjEpOyB9XHJcbi5jYXJ0LXRvdGFsIHsgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBmb250LXNpemU6IDEuMnJlbTsgbWFyZ2luLWJvdHRvbTogMXJlbTsgfVxyXG4uZnVsbC13aWR0aCB7IHdpZHRoOiAxMDAlOyB9XHJcblxyXG4ucmVzdGF1cmFudHMtZ3JpZCwgLm1lbnUtZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMDBweCwgMWZyKSk7XHJcbiAgZ2FwOiAycmVtO1xyXG59XHJcbi5yZXN0YXVyYW50LWltZyB7IGhlaWdodDogMjAwcHg7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsgYm9yZGVyLXJhZGl1czogMTJweCAxMnB4IDAgMDsgfVxyXG4ucmVzdGF1cmFudC1pbWcgaW1nIHsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsgb2JqZWN0LWZpdDogY292ZXI7IH1cclxuLnJlc3RhdXJhbnQtaW5mbywgLm1lbnUtaXRlbS1pbmZvIHsgcGFkZGluZzogMS41cmVtOyB9XHJcbi5pdGVtLWZvb3RlciB7IGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgbWFyZ2luLXRvcDogMXJlbTsgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxyXG4ucmVzdGF1cmFudC1tZXRhIHsgbWFyZ2luLXRvcDogMTBweDsgY29sb3I6ICNmMWM0MGY7IH1cclxuXHJcbi8qIFJFVVNBQkxFIFVUSUxJVElFUyAqL1xyXG4ubWItMiB7IG1hcmdpbi1ib3R0b206IDAuNXJlbTsgfVxyXG4uYmFkZ2UgeyBwYWRkaW5nOiAwLjNyZW0gMC42cmVtOyBib3JkZXItcmFkaXVzOiAxMnB4OyBmb250LXNpemU6IDAuNzVyZW07IGZvbnQtd2VpZ2h0OiA3MDA7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cclxuLmJhZGdlLWxpZ2h0IHsgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpOyBjb2xvcjogIzAwZTA4ZjsgfVxyXG4uaXRlbS1oZWFkZXItcm93IHsgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgbWFyZ2luLWJvdHRvbTogMC41cmVtOyB9XHJcbi5pdGVtLWhlYWRlci1yb3cgaDQgeyBtYXJnaW46IDA7IGZvbnQtc2l6ZTogMS4xcmVtOyBjb2xvcjogd2hpdGU7IH1cclxuLmVtcHR5LXN0YXRlIHsgZ3JpZC1jb2x1bW46IDEgLyAtMTsgdGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nOiAzcmVtOyBjb2xvcjogI2EwYjJhODsgYmFja2dyb3VuZDogIzBiMzUyMTsgYm9yZGVyLXJhZGl1czogMTZweDsgYm9yZGVyOiAxcHggZGFzaGVkIHJnYmEoMjU1LDI1NSwyNTUsMC4xKTsgfVxyXG5cclxuLyogTkVXIFNFQ1RJT05TOiBDQVRFR09SSUVTICYgVFJFTkRJTkcgKi9cclxuLnRvcC1uYXYtY29udGVudCB7IG1heC13aWR0aDogMTQwMHB4OyBtYXJnaW46IDAgYXV0bzsgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBhbGlnbi1pdGVtczogY2VudGVyOyB9XHJcblxyXG4vKiBNYWluIE5hdiAqL1xyXG4ubWFpbi1uYXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAycmVtO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tYWluLW5hdiBhIHtcclxuICBjb2xvcjogI2EwYjJhODtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgcGFkZGluZzogMC41cmVtIDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4ubWFpbi1uYXYgYTpob3ZlciwgLm1haW4tbmF2IGEuYWN0aXZlIHtcclxuICBjb2xvcjogIzAwZTA4ZjtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAjMDBlMDhmO1xyXG59XHJcblxyXG4ubG9nby1zZWN0aW9uIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAycmVtOyB9XHJcbi5sb2dvIHsgZm9udC1zaXplOiAxLjhyZW07IGZvbnQtd2VpZ2h0OiA4MDA7IGNvbG9yOiB3aGl0ZTsgbWFyZ2luOiAwOyBsZXR0ZXItc3BhY2luZzogLTFweDsgfVxyXG5cclxuLnNlY3Rpb24taGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbjogM3JlbSAwIDEuNXJlbTtcclxufVxyXG5cclxuLnNlY3Rpb24taGVhZGVyIGgyIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4udmlldy1hbGwge1xyXG4gIGNvbG9yOiAjMDBlMDhmO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnM7XHJcbn1cclxuXHJcbi52aWV3LWFsbDpob3ZlciB7XHJcbiAgY29sb3I6ICMwMGM3N2Y7XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1ncmVlbiB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6ICMwMGUwOGY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwZTA4ZjtcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLWdyZWVuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDIyNCwgMTQzLCAwLjEpO1xyXG59XHJcblxyXG4uY2F0ZWdvcmllcy1ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDE1MHB4LCAxZnIpKTtcclxuICBnYXA6IDEuNXJlbTtcclxufVxyXG5cclxuLmNhdGVnb3J5LWNhcmQge1xyXG4gIGJhY2tncm91bmQ6ICMwYjM1MjE7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA1KTtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIHBhZGRpbmc6IDEuNXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDFyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG4uY2F0ZWdvcnktY2FyZDpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xyXG4gIGJhY2tncm91bmQ6ICMxMTM4MjQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDBlMDhmO1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMjI0LCAxNDMsIDAuMSk7XHJcbn1cclxuXHJcbi5jYXQtaWNvbi1wbGFjZWhvbGRlciB7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kOiAjMTg0ODMwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBjb2xvcjogIzAwZTA4ZjtcclxufVxyXG5cclxuLmNhdGVnb3J5LWNhcmQgc3BhbiB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi8qIE1PREVSTiBGT09EIENBUkQgKi9cclxuLm1vZGVybi1mb29kLWNhcmQge1xyXG4gIGJhY2tncm91bmQ6ICMwYjM1MjE7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcywgYm94LXNoYWRvdyAwLjNzO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wNSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ubW9kZXJuLWZvb2QtY2FyZDpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04cHgpO1xyXG4gIGJveC1zaGFkb3c6IDAgMTVweCA0MHB4IHJnYmEoMCwyMjQsMTQzLDAuMTUpO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLDIyNCwxNDMsMC4zKTtcclxufVxyXG5cclxuLmNhcmQtaW1hZ2Utd3JhcHBlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMTgwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmNhcmQtaW1hZ2Utd3JhcHBlciAuZm9vZC1pbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcclxufVxyXG5cclxuLm1vZGVybi1mb29kLWNhcmQ6aG92ZXIgLmZvb2QtaW1nIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbn1cclxuXHJcbi5iYWRnZS1mbG9hdGluZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTVweDtcclxuICByaWdodDogMTVweDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNik7XHJcbiAgY29sb3I6ICMwMGUwOGY7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDIyNCwxNDMsMC4zKTtcclxufVxyXG5cclxuLmNhcmQtY29udGVudCB7XHJcbiAgcGFkZGluZzogMS41cmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4uaXRlbS10aXRsZSB7XHJcbiAgbWFyZ2luOiAwIDAgNXB4O1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4ucmVzdGF1cmFudC1uYW1lIHtcclxuICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgbWFyZ2luOiAwIDAgMTBweDtcclxufVxyXG5cclxuLnJlc3RhdXJhbnQtbmFtZSBpIHtcclxuICBjb2xvcjogIzAwZTA4ZjtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLml0ZW0tZGVzYyB7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgY29sb3I6ICNhMGIyYTg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gIGZsZXg6IDE7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxufVxyXG5cclxuLmNhcmQtZm9vdGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wNSk7XHJcbiAgcGFkZGluZy10b3A6IDFyZW07XHJcbn1cclxuXHJcbi5jYXJkLWZvb3RlciAucHJpY2Uge1xyXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgY29sb3I6ICNmMWM0MGY7XHJcbn1cclxuXHJcbi5idG4tYWRkLWNhcnQge1xyXG4gIGJhY2tncm91bmQ6ICMwMGUwOGY7XHJcbiAgY29sb3I6ICMwNjIzMTU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA1cHg7XHJcbn1cclxuXHJcbi5idG4tYWRkLWNhcnQ6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICMwMGM3N2Y7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxufVxyXG5cclxuLyogSE9XIElUIFdPUktTIFNFQ1RJT04gKi9cclxuLmhvdy1pdC13b3Jrcy1zZWN0aW9uIHtcclxuICBwYWRkaW5nOiA0cmVtIDA7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wNSk7XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxufVxyXG5cclxuLnNlY3Rpb24tdGl0bGUtY2VudGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxufVxyXG5cclxuLnNlY3Rpb24tdGl0bGUtY2VudGVyIGgyIHtcclxuICBmb250LXNpemU6IDIuNXJlbTtcclxuICBtYXJnaW46IDAgMCAxMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnNlY3Rpb24tdGl0bGUtY2VudGVyIHAge1xyXG4gIGNvbG9yOiAjYTBiMmE4O1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG59XHJcblxyXG4uc3RlcHMtZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcclxuICBnYXA6IDJyZW07XHJcbn1cclxuXHJcbi5zdGVwLWNhcmQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIGJhY2tncm91bmQ6ICMwYjM1MjE7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDIpO1xyXG59XHJcblxyXG4uc3RlcC1pY29uIHtcclxuICB3aWR0aDogODBweDtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgbWFyZ2luOiAwIGF1dG8gMS41cmVtO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJnLW9yYW5nZSB7IGJhY2tncm91bmQ6ICNlNjdlMjI7IGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMjMwLCAxMjYsIDM0LCAwLjIpOyB9XHJcbi5iZy1ncmVlbiB7IGJhY2tncm91bmQ6ICMwMGUwOGY7IGNvbG9yOiAjMDYyMzE1OyBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsIDIyNCwgMTQzLCAwLjIpOyB9XHJcbi5iZy1ibHVlIHsgYmFja2dyb3VuZDogIzM0OThkYjsgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSg1MiwgMTUyLCAyMTksIDAuMik7IH1cclxuXHJcbi5zdGVwLWNhcmQgaDMge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW46IDAgMCAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG59XHJcblxyXG4uc3RlcC1jYXJkIHAge1xyXG4gIGNvbG9yOiAjYTBiMmE4O1xyXG4gIG1hcmdpbjogMDtcclxuICBsaW5lLWhlaWdodDogMS42O1xyXG59XHJcblxyXG4vKiBBUFAgQkFOTkVSIFNFQ1RJT04gKi9cclxuLmFwcC1iYW5uZXItc2VjdGlvbiB7XHJcbiAgcGFkZGluZzogNHJlbSAwO1xyXG59XHJcblxyXG4uYXBwLWJhbm5lci1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMGUwOGYgMCUsICMwMGE4NmIgMTAwJSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICBwYWRkaW5nOiA0cmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm94LXNoYWRvdzogMCAyMHB4IDQwcHggcmdiYSgwLCAyMjQsIDE0MywgMC4yKTtcclxufVxyXG5cclxuLmFwcC1iYW5uZXItY29udGVudCB7XHJcbiAgZmxleDogMTtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIGNvbG9yOiAjMDYyMzE1O1xyXG59XHJcblxyXG4uYXBwLWJhbm5lci1jb250ZW50IGgyIHtcclxuICBmb250LXNpemU6IDNyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBtYXJnaW46IDAgMCAxcmVtO1xyXG59XHJcblxyXG4uYXBwLWJhbm5lci1jb250ZW50IHAge1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLnN0b3JlLWJ1dHRvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4uYnRuLXN0b3JlIHtcclxuICBiYWNrZ3JvdW5kOiAjMDYyMzE1O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBwYWRkaW5nOiAwLjhyZW0gMS41cmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDE1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xyXG59XHJcblxyXG4uYnRuLXN0b3JlOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbn1cclxuXHJcbi5idG4tc3RvcmUgaSB7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcblxyXG4uc3RvcmUtdGV4dCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5zdG9yZS10ZXh0IHNwYW4ge1xyXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5zdG9yZS10ZXh0IHN0cm9uZyB7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbn1cclxuXHJcbi8qIEZPT1RFUiAqL1xyXG4ubWFpbi1mb290ZXIge1xyXG4gIGJhY2tncm91bmQ6ICMwNDE4MGU7XHJcbiAgcGFkZGluZzogNHJlbSAycmVtIDJyZW07XHJcbiAgbWFyZ2luLXRvcDogNHJlbTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA1KTtcclxufVxyXG5cclxuLmZvb3Rlci1jb250ZW50IHtcclxuICBtYXgtd2lkdGg6IDE0MDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmciAxZnIgMWZyO1xyXG4gIGdhcDogNHJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG59XHJcblxyXG4uZm9vdGVyLWJyYW5kIHAge1xyXG4gIGNvbG9yOiAjYTBiMmE4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgbWFyZ2luOiAxLjVyZW0gMDtcclxufVxyXG5cclxuLnNvY2lhbC1saW5rcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbi5zb2NpYWwtbGlua3MgYSB7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kOiAjMGIzNTIxO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG4uc29jaWFsLWxpbmtzIGE6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICMwMGUwOGY7XHJcbiAgY29sb3I6ICMwNjIzMTU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG59XHJcblxyXG4uZm9vdGVyLWxpbmtzIGgzIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luOiAwIDAgMS41cmVtO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcblxyXG4uZm9vdGVyLWxpbmtzIHVsIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uZm9vdGVyLWxpbmtzIGxpIHtcclxuICBtYXJnaW4tYm90dG9tOiAwLjhyZW07XHJcbn1cclxuXHJcbi5mb290ZXItbGlua3MgYSB7XHJcbiAgY29sb3I6ICNhMGIyYTg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnM7XHJcbn1cclxuXHJcbi5mb290ZXItbGlua3MgYTpob3ZlciB7XHJcbiAgY29sb3I6ICMwMGUwOGY7XHJcbn1cclxuXHJcbi5mb290ZXItYm90dG9tIHtcclxuICBtYXgtd2lkdGg6IDE0MDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDJyZW07XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wNSk7XHJcbiAgY29sb3I6ICM3MjhjN2Y7XHJcbn1cclxuXHJcbi8qIFBST0ZJTEUgVklFVyAqL1xyXG4ucHJvZmlsZS12aWV3IHtcclxuICBwYWRkaW5nOiAycmVtIDA7XHJcbn1cclxuXHJcbi5wcm9maWxlLWNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLnByb2ZpbGUtY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogIzBiMzUyMTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDNyZW07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA1KTtcclxuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDAsMCwwLDAuMik7XHJcbn1cclxuXHJcbi5wcm9maWxlLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMnJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG59XHJcblxyXG4ucHJvZmlsZS1hdmF0YXIge1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDBlMDhmIDAlLCAjMDBhODZiIDEwMCUpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnByb2ZpbGUtYXZhdGFyOjphZnRlciB7XHJcbiAgY29udGVudDogJ1xcZjAwNyc7XHJcbiAgZm9udC1mYW1pbHk6ICdGb250IEF3ZXNvbWUgNSBGcmVlJztcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGZvbnQtc2l6ZTogM3JlbTtcclxuICBjb2xvcjogIzA2MjMxNTtcclxufVxyXG5cclxuLnByb2ZpbGUtaW5mbyBoMyB7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIG1hcmdpbjogMCAwIDVweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5wcm9maWxlLWluZm8gcCB7XHJcbiAgY29sb3I6ICNhMGIyYTg7XHJcbiAgbWFyZ2luOiAwIDAgMTBweDtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxufVxyXG5cclxuLnByb2ZpbGUtYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbi5wcm9maWxlLWFjdGlvbnMgLmJ0biB7XHJcbiAgZmxleDogMTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG59XHJcblxyXG4vKiBJVEVNIERFVEFJTCBWSUVXICovXHJcbi5pdGVtLWRldGFpbC12aWV3IHtcclxuICBwYWRkaW5nOiAycmVtIDA7XHJcbn1cclxuXHJcbi5pdGVtLWRldGFpbC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gIGdhcDogM3JlbTtcclxuICBiYWNrZ3JvdW5kOiAjMGIzNTIxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA1KTtcclxuICBtYXJnaW4tYm90dG9tOiA0cmVtO1xyXG59XHJcblxyXG4uaXRlbS1kZXRhaWwtaW1hZ2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiA0MDBweDtcclxufVxyXG5cclxuLml0ZW0tZGV0YWlsLWltYWdlIGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG4uaXRlbS1kZXRhaWwtaW5mbyB7XHJcbiAgcGFkZGluZzogM3JlbSAzcmVtIDNyZW0gMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5pdGVtLWRldGFpbC1pbmZvIGgyIHtcclxuICBmb250LXNpemU6IDIuNXJlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luOiAwIDAgMTBweDtcclxufVxyXG5cclxuLnByaWNlLWxhcmdlIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgY29sb3I6ICNmMWM0MGY7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbn1cclxuXHJcbi5pdGVtLWRldGFpbC1kZXNjIHtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxuICBjb2xvcjogI2EwYjJhODtcclxuICBsaW5lLWhlaWdodDogMS42O1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLml0ZW0tZGV0YWlsLWFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAxLjVyZW07XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnF0eS1zZWxlY3RvciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6ICMwNjIzMTU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnF0eS1zZWxlY3RvciAucXR5LWJ0biB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycztcclxufVxyXG5cclxuLnF0eS1zZWxlY3RvciAucXR5LWJ0bjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjEpO1xyXG59XHJcblxyXG4ucXR5LXNlbGVjdG9yIC5xdHktbnVtIHtcclxuICB3aWR0aDogNDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5tb3JlLWZyb20tcmVzdGF1cmFudCB7XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLml0ZW0tZGV0YWlsLWNvbnRhaW5lciB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICB9XHJcbiAgLml0ZW0tZGV0YWlsLWluZm8ge1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuICB9XHJcbiAgLml0ZW0tZGV0YWlsLWltYWdlIHtcclxuICAgIG1pbi1oZWlnaHQ6IDI1MHB4O1xyXG4gIH1cclxufVxyXG5cclxuLyogQ0hFQ0tPVVQgVklFVyAqL1xyXG4uY2hlY2tvdXQtdmlldyB7XHJcbiAgcGFkZGluZzogMnJlbSAwO1xyXG59XHJcblxyXG4uY2hlY2tvdXQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcclxuICBnYXA6IDJyZW07XHJcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xyXG59XHJcblxyXG4uY2hlY2tvdXQtY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogIzBiMzUyMTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA1KTtcclxuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDAsMCwwLDAuMik7XHJcbn1cclxuXHJcbi5jYXJkLXRpdGxlIHtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luOiAwIDAgMS41cmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wNSk7XHJcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5jYXJkLXRpdGxlIGkge1xyXG4gIGNvbG9yOiAjMDBlMDhmO1xyXG59XHJcblxyXG4vKiBGb3JtIFN0eWxlcyAqL1xyXG4uY2hlY2tvdXQtZm9ybSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMS41cmVtO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMC41cmVtO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCBsYWJlbCB7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogI2EwYjJhODtcclxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIGlucHV0LCBcclxuLmZvcm0tZ3JvdXAgdGV4dGFyZWEge1xyXG4gIGJhY2tncm91bmQ6ICMwNjIzMTU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgcGFkZGluZzogMXJlbSAxLjJyZW07XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCBpbnB1dDo6cGxhY2Vob2xkZXIsIFxyXG4uZm9ybS1ncm91cCB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiByZ2JhKDE2MCwgMTc4LCAxNjgsIDAuNSk7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIGlucHV0OmZvY3VzLCBcclxuLmZvcm0tZ3JvdXAgdGV4dGFyZWE6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDBlMDhmO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDAsIDIyNCwgMTQzLCAwLjE1KTtcclxuICBiYWNrZ3JvdW5kOiAjMDkyYzFhO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB0ZXh0YXJlYSB7XHJcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcclxuICBtaW4taGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuLmZvcm0tcm93IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbi5tdC0zIHsgbWFyZ2luLXRvcDogMS41cmVtOyB9XHJcblxyXG4vKiBQYXltZW50IE9wdGlvbnMgKi9cclxuLnBheW1lbnQtb3B0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMXJlbTtcclxufVxyXG5cclxuLnBheW1lbnQtb3B0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxcmVtO1xyXG4gIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4yKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbn1cclxuXHJcbi5wYXltZW50LW9wdGlvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjA1KTtcclxufVxyXG5cclxuLnBheW1lbnQtb3B0aW9uLnNlbGVjdGVkIHtcclxuICBib3JkZXItY29sb3I6ICMwMGUwOGY7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAyMjQsIDE0MywgMC4wNSk7XHJcbn1cclxuXHJcbi5wYXltZW50LW9wdGlvbiBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xyXG4gIGFjY2VudC1jb2xvcjogIzAwZTA4ZjtcclxuICB3aWR0aDogMThweDtcclxuICBoZWlnaHQ6IDE4cHg7XHJcbn1cclxuXHJcbi5wYXltZW50LWluZm8ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDE1cHg7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5wYXltZW50LWluZm8gaSB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbi50ZXh0LWdyZWVuIHsgY29sb3I6ICMyZWNjNzE7IH1cclxuLnRleHQtYmx1ZSB7IGNvbG9yOiAjMzQ5OGRiOyB9XHJcblxyXG4uY2FyZC1pbnB1dC1tb2NrIHtcclxuICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbiAgcGFkZGluZy10b3A6IDEuNXJlbTtcclxuICBib3JkZXItdG9wOiAxcHggZGFzaGVkIHJnYmEoMjU1LDI1NSwyNTUsMC4xKTtcclxufVxyXG5cclxuLyogT3JkZXIgU3VtbWFyeSAqL1xyXG4uc3RpY2t5LXN1bW1hcnkge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAxMDBweDtcclxufVxyXG5cclxuLnN1bW1hcnktaXRlbXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDFyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi5zdW1tYXJ5LWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDUpO1xyXG59XHJcblxyXG4uc3VtbWFyeS1xdHkge1xyXG4gIGNvbG9yOiAjMDBlMDhmO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgbWluLXdpZHRoOiAzMHB4O1xyXG59XHJcblxyXG4uc3VtbWFyeS1uYW1lIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLnN1bW1hcnktcHJpY2Uge1xyXG4gIGNvbG9yOiAjZjFjNDBmO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5zdW1tYXJ5LWNhbGN1bGF0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMC44cmVtO1xyXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xyXG59XHJcblxyXG4uY2FsYy1yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGNvbG9yOiAjYTBiMmE4O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuLnRvdGFsLXJvdyB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjEpO1xyXG59XHJcblxyXG4udG90YWwtcm93IHNwYW46bGFzdC1jaGlsZCB7XHJcbiAgY29sb3I6ICNmMWM0MGY7XHJcbn1cclxuXHJcbi5idG4tbGFyZ2Uge1xyXG4gIHBhZGRpbmc6IDEuMnJlbTtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxufVxyXG5cclxuLnNlY3VyZS10ZXh0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICM3MjhjN2Y7XHJcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuXHJcbi5zZWN1cmUtdGV4dCBpIHtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgLmNoZWNrb3V0LWNvbnRhaW5lciB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICB9XHJcbn1cclxuXHJcbi8qIEFuaW1hdGlvbnMgKi9cclxuLmZhZGUtaW4geyBhbmltYXRpb246IGZhZGVJbiAwLjVzIGVhc2U7IH1cclxuQGtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTogMDsgfSB0byB7IG9wYWNpdHk6IDE7IH0gfVxyXG5cclxuLmZhZGUtaW4tdXAgeyBhbmltYXRpb246IGZhZGVJblVwIDAuNXMgZWFzZTsgfVxyXG5Aa2V5ZnJhbWVzIGZhZGVJblVwIHsgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTsgfSB0byB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfSB9Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 385:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth.service */ 4796);






function HeaderComponent_nav_7_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function HeaderComponent_nav_7_li_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function HeaderComponent_nav_7_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Deliveries");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function HeaderComponent_nav_7_li_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function HeaderComponent_nav_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 13)(1, "ul", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HeaderComponent_nav_7_li_2_Template, 3, 0, "li", 15)(3, HeaderComponent_nav_7_li_3_Template, 3, 0, "li", 15)(4, HeaderComponent_nav_7_li_4_Template, 3, 0, "li", 15)(5, HeaderComponent_nav_7_li_5_Template, 3, 0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li")(7, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r0.currentUser == null ? null : ctx_r0.currentUser.role) === "customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r0.currentUser == null ? null : ctx_r0.currentUser.role) === "restaurant");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r0.currentUser == null ? null : ctx_r0.currentUser.role) === "rider");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r0.currentUser == null ? null : ctx_r0.currentUser.role) === "admin");
  }
}
function HeaderComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21)(1, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function HeaderComponent_div_10_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_div_10_div_14_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.closeMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Customer Portal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function HeaderComponent_div_10_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_div_10_div_15_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.closeMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Restaurant Portal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function HeaderComponent_div_10_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_div_10_div_16_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.closeMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Rider Portal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function HeaderComponent_div_10_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_div_10_div_17_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.closeMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Admin Portal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function HeaderComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24)(1, "div", 25)(2, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_div_10_Template_div_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.toggleMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 30)(10, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_div_10_Template_div_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.closeMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "My Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, HeaderComponent_div_10_div_14_Template, 4, 0, "div", 33)(15, HeaderComponent_div_10_div_15_Template, 4, 0, "div", 34)(16, HeaderComponent_div_10_div_16_Template, 4, 0, "div", 35)(17, HeaderComponent_div_10_div_17_Template, 4, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_div_10_Template_div_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Welcome, ", (ctx_r0.currentUser == null ? null : ctx_r0.currentUser.name) || "User", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 8, ctx_r0.currentUser == null ? null : ctx_r0.currentUser.role));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("show", ctx_r0.isMenuOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r0.currentUser == null ? null : ctx_r0.currentUser.role) === "customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r0.currentUser == null ? null : ctx_r0.currentUser.role) === "restaurant");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r0.currentUser == null ? null : ctx_r0.currentUser.role) === "rider");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r0.currentUser == null ? null : ctx_r0.currentUser.role) === "admin");
  }
}
function HeaderComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_div_11_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.toggleMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r0.isMenuOpen ? "fa-times" : "fa-bars");
  }
}
function HeaderComponent_nav_13_li_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_nav_13_li_12_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.closeMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
}
function HeaderComponent_nav_13_li_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_nav_13_li_13_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.closeMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
}
function HeaderComponent_nav_13_li_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_nav_13_li_14_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.closeMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Deliveries");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
}
function HeaderComponent_nav_13_li_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "a", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_nav_13_li_15_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.closeMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
}
function HeaderComponent_nav_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 50)(1, "div", 51)(2, "div", 52)(3, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 54)(6, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ul", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, HeaderComponent_nav_13_li_12_Template, 5, 0, "li", 15)(13, HeaderComponent_nav_13_li_13_Template, 5, 0, "li", 15)(14, HeaderComponent_nav_13_li_14_Template, 5, 0, "li", 15)(15, HeaderComponent_nav_13_li_15_Template, 5, 0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li")(17, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_nav_13_Template_a_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.closeMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "My Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li", 59)(22, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_nav_13_Template_a_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("show", ctx_r0.isMenuOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((ctx_r0.currentUser == null ? null : ctx_r0.currentUser.name) || "User");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 8, ctx_r0.currentUser == null ? null : ctx_r0.currentUser.role));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r0.currentUser == null ? null : ctx_r0.currentUser.role) === "customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r0.currentUser == null ? null : ctx_r0.currentUser.role) === "restaurant");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r0.currentUser == null ? null : ctx_r0.currentUser.role) === "rider");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r0.currentUser == null ? null : ctx_r0.currentUser.role) === "admin");
  }
}
class HeaderComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
    this.title = 'Food Delivery Portal';
    this.isLoggedIn = false;
    this.currentUser = null;
    this.isMenuOpen = false;
  }
  ngOnInit() {
    this.authService.currentUser.subscribe(user => {
      this.isLoggedIn = !!user;
      this.currentUser = user;
    });
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  closeMenu() {
    this.isMenuOpen = false;
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
    this.closeMenu();
  }
  static {
    this.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 14,
      vars: 8,
      consts: [[1, "main-header"], [1, "header-container"], [1, "brand-section"], ["routerLink", "/", 1, "logo", 3, "click"], [1, "fas", "fa-utensils"], [1, "brand-text"], ["class", "desktop-nav", 4, "ngIf"], [1, "user-section"], ["class", "user-info", 4, "ngIf"], ["class", "user-menu", 4, "ngIf"], ["class", "mobile-menu-toggle", 3, "click", 4, "ngIf"], [1, "mobile-nav-overlay", 3, "click"], ["class", "mobile-nav", 3, "show", 4, "ngIf"], [1, "desktop-nav"], [1, "nav-links"], [4, "ngIf"], ["routerLink", "/profile", "routerLinkActive", "active"], ["routerLink", "/customer", "routerLinkActive", "active"], ["routerLink", "/restaurant", "routerLinkActive", "active"], ["routerLink", "/rider", "routerLinkActive", "active"], ["routerLink", "/admin", "routerLinkActive", "active"], [1, "user-info"], ["routerLink", "/login", 1, "auth-link"], ["routerLink", "/register", 1, "auth-link", "register"], [1, "user-menu"], [1, "user-greeting"], [1, "welcome-text"], [1, "user-role"], [1, "user-avatar", 3, "click"], [1, "fas", "fa-user-circle"], [1, "dropdown-menu"], ["routerLink", "/profile", 1, "dropdown-item", 3, "click"], [1, "fas", "fa-user"], ["class", "dropdown-item", "routerLink", "/customer", 3, "click", 4, "ngIf"], ["class", "dropdown-item", "routerLink", "/restaurant", 3, "click", 4, "ngIf"], ["class", "dropdown-item", "routerLink", "/rider", 3, "click", 4, "ngIf"], ["class", "dropdown-item", "routerLink", "/admin", 3, "click", 4, "ngIf"], [1, "dropdown-divider"], [1, "dropdown-item", "logout", 3, "click"], [1, "fas", "fa-sign-out-alt"], ["routerLink", "/customer", 1, "dropdown-item", 3, "click"], [1, "fas", "fa-home"], ["routerLink", "/restaurant", 1, "dropdown-item", 3, "click"], [1, "fas", "fa-store"], ["routerLink", "/rider", 1, "dropdown-item", 3, "click"], [1, "fas", "fa-motorcycle"], ["routerLink", "/admin", 1, "dropdown-item", 3, "click"], [1, "fas", "fa-shield-alt"], [1, "mobile-menu-toggle", 3, "click"], [1, "fas", 3, "ngClass"], [1, "mobile-nav"], [1, "mobile-nav-header"], [1, "mobile-user-info"], [1, "mobile-user-avatar"], [1, "mobile-user-details"], [1, "mobile-user-name"], [1, "mobile-user-role"], [1, "mobile-nav-links"], ["routerLink", "/profile", "routerLinkActive", "active", 3, "click"], [1, "mobile-logout"], [3, "click"], ["routerLink", "/customer", "routerLinkActive", "active", 3, "click"], ["routerLink", "/restaurant", "routerLinkActive", "active", 3, "click"], ["routerLink", "/rider", "routerLinkActive", "active", 3, "click"], ["routerLink", "/admin", "routerLinkActive", "active", 3, "click"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_3_listener() {
            return ctx.closeMenu();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, HeaderComponent_nav_7_Template, 9, 4, "nav", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, HeaderComponent_div_9_Template, 5, 0, "div", 8)(10, HeaderComponent_div_10_Template, 23, 10, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, HeaderComponent_div_11_Template, 2, 1, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_12_listener() {
            return ctx.closeMenu();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, HeaderComponent_nav_13_Template, 26, 10, "nav", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("show", ctx.isMenuOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.TitleCasePipe, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive],
      styles: [".main-header[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  position: sticky;\n  top: 0;\n  z-index: 1000;\n}\n\n.header-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 70px;\n}\n\n\n\n.brand-section[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n  text-decoration: none;\n  color: white;\n  font-size: 24px;\n  font-weight: 700;\n}\n\n.logo[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: #ffd700;\n}\n\n.brand-text[_ngcontent-%COMP%] {\n  background: linear-gradient(45deg, #ffffff, #ffd700);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n\n\n\n.desktop-nav[_ngcontent-%COMP%] {\n  flex: 2;\n  display: flex;\n  justify-content: center;\n}\n\n.nav-links[_ngcontent-%COMP%] {\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  gap: 30px;\n}\n\n.nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.9);\n  text-decoration: none;\n  font-weight: 500;\n  padding: 8px 16px;\n  border-radius: 6px;\n  transition: all 0.3s ease;\n  position: relative;\n}\n\n.nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  color: white;\n}\n\n\n\n.user-section[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.user-info[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n  align-items: center;\n}\n\n.auth-link[_ngcontent-%COMP%] {\n  color: white;\n  text-decoration: none;\n  padding: 8px 16px;\n  border-radius: 6px;\n  font-weight: 500;\n  transition: all 0.3s ease;\n}\n\n.auth-link[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n}\n\n.auth-link.register[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n}\n\n.auth-link.register[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.3);\n}\n\n.user-menu[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n\n.user-greeting[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n\n.welcome-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.user-role[_ngcontent-%COMP%] {\n  font-size: 12px;\n  opacity: 0.8;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n.user-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-size: 20px;\n}\n\n.user-avatar[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.3);\n  transform: scale(1.05);\n}\n\n\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  background: white;\n  min-width: 200px;\n  border-radius: 8px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\n  opacity: 0;\n  visibility: hidden;\n  transform: translateY(-10px);\n  transition: all 0.3s ease;\n  z-index: 1001;\n  margin-top: 10px;\n}\n\n.dropdown-menu.show[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  transform: translateY(0);\n}\n\n.dropdown-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  color: #333;\n  text-decoration: none;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n\n.dropdown-item[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n\n.dropdown-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 16px;\n  color: #667eea;\n}\n\n.dropdown-item.logout[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n\n.dropdown-item.logout[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n\n.dropdown-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: #e9ecef;\n  margin: 8px 0;\n}\n\n\n\n.mobile-menu-toggle[_ngcontent-%COMP%] {\n  display: none;\n  cursor: pointer;\n  font-size: 20px;\n  padding: 8px;\n  border-radius: 4px;\n  transition: background-color 0.3s ease;\n}\n\n.mobile-menu-toggle[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n}\n\n\n\n.mobile-nav-overlay[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.mobile-nav[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 70px;\n  left: 0;\n  width: 100%;\n  background: white;\n  transform: translateX(-100%);\n  transition: transform 0.3s ease;\n  z-index: 999;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n}\n\n.mobile-nav.show[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n\n.mobile-nav-header[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  padding: 20px;\n  color: white;\n}\n\n.mobile-user-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n\n.mobile-user-avatar[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n}\n\n.mobile-user-details[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.mobile-user-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 16px;\n}\n\n.mobile-user-role[_ngcontent-%COMP%] {\n  font-size: 14px;\n  opacity: 0.9;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n.mobile-nav-links[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.mobile-nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  padding: 15px 20px;\n  color: #333;\n  text-decoration: none;\n  border-bottom: 1px solid #f0f0f0;\n  transition: background-color 0.3s ease;\n}\n\n.mobile-nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .mobile-nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n}\n\n.mobile-nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 20px;\n  color: #667eea;\n}\n\n.mobile-logout[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n\n.mobile-logout[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n\n\n\n@media (max-width: 768px) {\n  .header-container[_ngcontent-%COMP%] {\n    padding: 0 15px;\n  }\n\n  .desktop-nav[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .mobile-menu-toggle[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .user-greeting[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .mobile-nav-overlay[_ngcontent-%COMP%] {\n    display: block;\n    position: fixed;\n    top: 70px;\n    left: 0;\n    width: 100%;\n    height: calc(100vh - 70px);\n    background: rgba(0, 0, 0, 0.5);\n    opacity: 0;\n    visibility: hidden;\n    transition: opacity 0.3s ease;\n    z-index: 998;\n  }\n\n  .mobile-nav-overlay.show[_ngcontent-%COMP%] {\n    opacity: 1;\n    visibility: visible;\n  }\n}\n\n@media (max-width: 480px) {\n  .logo[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n\n  .logo[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n\n  .brand-text[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .user-info[_ngcontent-%COMP%] {\n    gap: 10px;\n  }\n\n  .auth-link[_ngcontent-%COMP%] {\n    padding: 6px 12px;\n    font-size: 14px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2REFBNkQ7RUFDN0QsWUFBWTtFQUNaLHlDQUF5QztFQUN6QyxnQkFBZ0I7RUFDaEIsTUFBTTtFQUNOLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxvREFBb0Q7RUFDcEQsNkJBQTZCO0VBQzdCLG9DQUFvQztFQUNwQyxxQkFBcUI7QUFDdkI7O0FBRUEsdUJBQXVCO0FBQ3ZCO0VBQ0UsT0FBTztFQUNQLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLG9DQUFvQztFQUNwQyxZQUFZO0FBQ2Q7O0FBRUEsaUJBQWlCO0FBQ2pCO0VBQ0UsT0FBTztFQUNQLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsc0JBQXNCO0FBQ3hCOztBQUVBLGtCQUFrQjtBQUNsQjtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLDBDQUEwQztFQUMxQyxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1Qix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQSx1QkFBdUI7QUFDdkI7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQSxzQkFBc0I7QUFDdEI7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULE9BQU87RUFDUCxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QiwrQkFBK0I7RUFDL0IsWUFBWTtFQUNaLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLDZEQUE2RDtFQUM3RCxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLE9BQU87QUFDVDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWix5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixnQ0FBZ0M7RUFDaEMsc0NBQXNDO0FBQ3hDOztBQUVBOztFQUVFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUEsc0JBQXNCO0FBQ3RCO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxlQUFlO0lBQ2YsU0FBUztJQUNULE9BQU87SUFDUCxXQUFXO0lBQ1gsMEJBQTBCO0lBQzFCLDhCQUE4QjtJQUM5QixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLDZCQUE2QjtJQUM3QixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsbUJBQW1CO0VBQ3JCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsU0FBUztFQUNYOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGVBQWU7RUFDakI7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogMTAwMDtcclxufVxyXG5cclxuLmhlYWRlci1jb250YWluZXIge1xyXG4gIG1heC13aWR0aDogMTIwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDAgMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogNzBweDtcclxufVxyXG5cclxuLyogQnJhbmQgU2VjdGlvbiAqL1xyXG4uYnJhbmQtc2VjdGlvbiB7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5sb2dvIGkge1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBjb2xvcjogI2ZmZDcwMDtcclxufVxyXG5cclxuLmJyYW5kLXRleHQge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2ZmZmZmZiwgI2ZmZDcwMCk7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcclxufVxyXG5cclxuLyogRGVza3RvcCBOYXZpZ2F0aW9uICovXHJcbi5kZXNrdG9wLW5hdiB7XHJcbiAgZmxleDogMjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ubmF2LWxpbmtzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZ2FwOiAzMHB4O1xyXG59XHJcblxyXG4ubmF2LWxpbmtzIGxpIGEge1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubmF2LWxpbmtzIGxpIGE6aG92ZXIsXHJcbi5uYXYtbGlua3MgbGkgYS5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi8qIFVzZXIgU2VjdGlvbiAqL1xyXG4udXNlci1zZWN0aW9uIHtcclxuICBmbGV4OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4udXNlci1pbmZvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMTVweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYXV0aC1saW5rIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5hdXRoLWxpbms6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxufVxyXG5cclxuLmF1dGgtbGluay5yZWdpc3RlciB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG59XHJcblxyXG4uYXV0aC1saW5rLnJlZ2lzdGVyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbn1cclxuXHJcbi51c2VyLW1lbnUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxNXB4O1xyXG59XHJcblxyXG4udXNlci1ncmVldGluZyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxufVxyXG5cclxuLndlbGNvbWUtdGV4dCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi51c2VyLXJvbGUge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBvcGFjaXR5OiAwLjg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbn1cclxuXHJcbi51c2VyLWF2YXRhciB7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLnVzZXItYXZhdGFyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxufVxyXG5cclxuLyogRHJvcGRvd24gTWVudSAqL1xyXG4uZHJvcGRvd24tbWVudSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTAwJTtcclxuICByaWdodDogMDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgb3BhY2l0eTogMDtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIHotaW5kZXg6IDEwMDE7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnUuc2hvdyB7XHJcbiAgb3BhY2l0eTogMTtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxufVxyXG5cclxuLmRyb3Bkb3duLWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEycHg7XHJcbiAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1pdGVtOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG59XHJcblxyXG4uZHJvcGRvd24taXRlbSBpIHtcclxuICB3aWR0aDogMTZweDtcclxuICBjb2xvcjogIzY2N2VlYTtcclxufVxyXG5cclxuLmRyb3Bkb3duLWl0ZW0ubG9nb3V0IHtcclxuICBjb2xvcjogI2RjMzU0NTtcclxufVxyXG5cclxuLmRyb3Bkb3duLWl0ZW0ubG9nb3V0IGkge1xyXG4gIGNvbG9yOiAjZGMzNTQ1O1xyXG59XHJcblxyXG4uZHJvcGRvd24tZGl2aWRlciB7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbiAgYmFja2dyb3VuZDogI2U5ZWNlZjtcclxuICBtYXJnaW46IDhweCAwO1xyXG59XHJcblxyXG4vKiBNb2JpbGUgTWVudSBUb2dnbGUgKi9cclxuLm1vYmlsZS1tZW51LXRvZ2dsZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5tb2JpbGUtbWVudS10b2dnbGU6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxufVxyXG5cclxuLyogTW9iaWxlIE5hdmlnYXRpb24gKi9cclxuLm1vYmlsZS1uYXYtb3ZlcmxheSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLm1vYmlsZS1uYXYge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDcwcHg7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4ubW9iaWxlLW5hdi5zaG93IHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbn1cclxuXHJcbi5tb2JpbGUtbmF2LWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm1vYmlsZS11c2VyLWluZm8ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDE1cHg7XHJcbn1cclxuXHJcbi5tb2JpbGUtdXNlci1hdmF0YXIge1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcbi5tb2JpbGUtdXNlci1kZXRhaWxzIHtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4ubW9iaWxlLXVzZXItbmFtZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5tb2JpbGUtdXNlci1yb2xlIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgb3BhY2l0eTogMC45O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG59XHJcblxyXG4ubW9iaWxlLW5hdi1saW5rcyB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLm1vYmlsZS1uYXYtbGlua3MgbGkgYSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTVweDtcclxuICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjBmMGYwO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4ubW9iaWxlLW5hdi1saW5rcyBsaSBhOmhvdmVyLFxyXG4ubW9iaWxlLW5hdi1saW5rcyBsaSBhLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxufVxyXG5cclxuLm1vYmlsZS1uYXYtbGlua3MgbGkgYSBpIHtcclxuICB3aWR0aDogMjBweDtcclxuICBjb2xvcjogIzY2N2VlYTtcclxufVxyXG5cclxuLm1vYmlsZS1sb2dvdXQgYSB7XHJcbiAgY29sb3I6ICNkYzM1NDU7XHJcbn1cclxuXHJcbi5tb2JpbGUtbG9nb3V0IGEgaSB7XHJcbiAgY29sb3I6ICNkYzM1NDU7XHJcbn1cclxuXHJcbi8qIFJlc3BvbnNpdmUgRGVzaWduICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5oZWFkZXItY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICB9XHJcblxyXG4gIC5kZXNrdG9wLW5hdiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLm1vYmlsZS1tZW51LXRvZ2dsZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIC51c2VyLWdyZWV0aW5nIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAubW9iaWxlLW5hdi1vdmVybGF5IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiA3MHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzBweCk7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XHJcbiAgICB6LWluZGV4OiA5OTg7XHJcbiAgfVxyXG5cclxuICAubW9iaWxlLW5hdi1vdmVybGF5LnNob3cge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAubG9nbyB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAubG9nbyBpIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICB9XHJcblxyXG4gIC5icmFuZC10ZXh0IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAudXNlci1pbmZvIHtcclxuICAgIGdhcDogMTBweDtcclxuICB9XHJcblxyXG4gIC5hdXRoLWxpbmsge1xyXG4gICAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 4175:
/*!***********************************************!*\
  !*** ./src/app/components/login.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 4796);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);







function LoginComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage, " ");
  }
}
class LoginComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
    this.email = '';
    this.password = '';
    this.isLoading = false;
    this.errorMessage = '';
  }
  login() {
    if (!this.email || !this.password) {
      this.errorMessage = 'Email and password are required';
      return;
    }
    this.isLoading = true;
    this.errorMessage = '';
    this.authService.login(this.email, this.password).subscribe({
      next: response => {
        this.isLoading = false;
        const role = response?.user?.role || response?.role;
        if (role === 'admin') {
          this.router.navigate(['/admin']);
        } else if (role === 'restaurant') {
          this.router.navigate(['/restaurant']);
        } else if (role === 'rider') {
          this.router.navigate(['/rider']);
        } else {
          this.router.navigate(['/customer']);
        }
      },
      error: err => {
        this.isLoading = false;
        this.errorMessage = err?.error?.error || 'Login failed. Please check your credentials.';
      }
    });
  }
  static {
    this.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 22,
      vars: 5,
      consts: [[1, "login-container"], [1, "login-box"], [1, "subtitle"], [3, "ngSubmit"], [1, "form-group"], ["for", "email"], ["type", "email", "id", "email", "name", "email", "placeholder", "e.g. you@example.com", "required", "", 3, "ngModelChange", "ngModel"], ["for", "password"], ["type", "password", "id", "password", "name", "password", "placeholder", "Enter your password", "required", "", 3, "ngModelChange", "ngModel"], ["class", "error-message", 4, "ngIf"], ["type", "submit", 1, "btn", 3, "disabled"], ["routerLink", "/register"], [1, "error-message"], [1, "fas", "fa-exclamation-circle"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Welcome Back");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Enter your credentials to access your account");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_6_listener() {
            return ctx.login();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4)(8, "label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Email Address");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.email, $event) || (ctx.email = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 4)(12, "label", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_14_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.password, $event) || (ctx.password = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, LoginComponent_div_15_Template, 3, 1, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Don't have an account? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Register here");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.email);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.password);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.isLoading ? "Logging in..." : "Sign In", " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
      styles: ["@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300;400[_ngcontent-%COMP%];500[_ngcontent-%COMP%];600[_ngcontent-%COMP%];700&display=swap)[_ngcontent-%COMP%];\n\n\n.login-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: linear-gradient(135deg, #fceabb 0%, #f8b500 100%);\n  font-family: 'Poppins', sans-serif;\n  padding: 2rem;\n  position: relative;\n  overflow: hidden;\n}\n\n\n\n.login-container[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  top: -10%;\n  left: -10%;\n  width: 400px;\n  height: 400px;\n  background: rgba(255, 71, 87, 0.3);\n  border-radius: 50%;\n  filter: blur(80px);\n  z-index: 0;\n}\n\n.login-container[_ngcontent-%COMP%]::after {\n  content: '';\n  position: absolute;\n  bottom: -10%;\n  right: -10%;\n  width: 500px;\n  height: 500px;\n  background: rgba(255, 215, 0, 0.4);\n  border-radius: 50%;\n  filter: blur(100px);\n  z-index: 0;\n}\n\n.login-box[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.9);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  border-radius: 24px;\n  padding: 3rem;\n  width: 100%;\n  max-width: 450px;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);\n  z-index: 1;\n  text-align: center;\n  transform: translateY(0);\n  transition: transform 0.3s ease;\n}\n\n.login-box[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n}\n\n.login-box[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #2d3436;\n  font-size: 2.2rem;\n  font-weight: 700;\n  margin-bottom: 0.5rem;\n}\n\n.subtitle[_ngcontent-%COMP%] {\n  color: #636e72;\n  font-size: 0.95rem;\n  margin-bottom: 2rem;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  text-align: left;\n}\n\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.9rem;\n  color: #2d3436;\n  font-weight: 500;\n  margin-bottom: 0.5rem;\n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1rem 1.2rem;\n  background: rgba(241, 242, 246, 0.7);\n  border: 1px solid rgba(223, 228, 234, 0.8);\n  border-radius: 12px;\n  font-size: 1rem;\n  color: #2d3436;\n  outline: none;\n  transition: all 0.3s ease;\n  box-sizing: border-box;\n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  background: #ffffff;\n  border-color: #ff4757;\n  box-shadow: 0 0 0 4px rgba(255, 71, 87, 0.1);\n}\n\n.btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1rem;\n  background: #ff4757;\n  color: white;\n  border: none;\n  border-radius: 12px;\n  font-size: 1.1rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  margin-top: 1rem;\n  box-shadow: 0 4px 15px rgba(255, 71, 87, 0.3);\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  background: #e63946;\n  box-shadow: 0 6px 20px rgba(255, 71, 87, 0.4);\n  transform: translateY(-2px);\n}\n\n.btn[_ngcontent-%COMP%]:disabled {\n  background: #ff9e99;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: none;\n}\n\n.error-message[_ngcontent-%COMP%] {\n  background: rgba(255, 71, 87, 0.1);\n  color: #ff4757;\n  padding: 1rem;\n  border-radius: 12px;\n  margin-bottom: 1.5rem;\n  font-size: 0.9rem;\n  border: 1px solid rgba(255, 71, 87, 0.2);\n}\n\n.login-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  color: #636e72;\n  font-size: 0.95rem;\n}\n\n.login-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #ff4757;\n  text-decoration: none;\n  font-weight: 600;\n  transition: color 0.2s;\n}\n\n.login-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #e63946;\n  text-decoration: underline;\n}\n\n\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from { opacity: 0; transform: translateY(20px); }\n  to { opacity: 1; transform: translateY(0); }\n}\n\n.login-box[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1);\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtDQUErQzs7QUFHL0M7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsNkRBQTZEO0VBQzdELGtDQUFrQztFQUNsQyxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQSxtQ0FBbUM7QUFDbkM7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtFQUNaLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsMkJBQTJCO0VBQzNCLG1DQUFtQztFQUNuQywwQ0FBMEM7RUFDMUMsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLDBDQUEwQztFQUMxQyxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixvQ0FBb0M7RUFDcEMsMENBQTBDO0VBQzFDLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsY0FBYztFQUNkLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQiw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLDZDQUE2QztBQUMvQzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQiw2Q0FBNkM7RUFDN0MsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGNBQWM7RUFDZCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsMEJBQTBCO0FBQzVCOztBQUVBLGVBQWU7QUFDZjtFQUNFLE9BQU8sVUFBVSxFQUFFLDJCQUEyQixFQUFFO0VBQ2hELEtBQUssVUFBVSxFQUFFLHdCQUF3QixFQUFFO0FBQzdDOztBQUVBO0VBQ0Usb0RBQW9EO0FBQ3REIiwic291cmNlc0NvbnRlbnQiOlsiLyogTW9kZXJuIEdsYXNzbW9ycGhpc20gQXV0aGVudGljYXRpb24gU3R5bGVzICovXHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuLmxvZ2luLWNvbnRhaW5lciB7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmY2VhYmIgMCUsICNmOGI1MDAgMTAwJSk7XHJcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4vKiBCYWNrZ3JvdW5kIGRlY29yYXRpdmUgZWxlbWVudHMgKi9cclxuLmxvZ2luLWNvbnRhaW5lcjo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtMTAlO1xyXG4gIGxlZnQ6IC0xMCU7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDcxLCA4NywgMC4zKTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZmlsdGVyOiBibHVyKDgwcHgpO1xyXG4gIHotaW5kZXg6IDA7XHJcbn1cclxuXHJcbi5sb2dpbi1jb250YWluZXI6OmFmdGVyIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAtMTAlO1xyXG4gIHJpZ2h0OiAtMTAlO1xyXG4gIHdpZHRoOiA1MDBweDtcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMTUsIDAsIDAuNCk7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGZpbHRlcjogYmx1cigxMDBweCk7XHJcbiAgei1pbmRleDogMDtcclxufVxyXG5cclxuLmxvZ2luLWJveCB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcclxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcclxuICBwYWRkaW5nOiAzcmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogNDUwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAyMHB4IDQwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xyXG59XHJcblxyXG4ubG9naW4tYm94OmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XHJcbn1cclxuXHJcbi5sb2dpbi1ib3ggaDIge1xyXG4gIGNvbG9yOiAjMmQzNDM2O1xyXG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG59XHJcblxyXG4uc3VidGl0bGUge1xyXG4gIGNvbG9yOiAjNjM2ZTcyO1xyXG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIGxhYmVsIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICBjb2xvcjogIzJkMzQzNjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAgaW5wdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDFyZW0gMS4ycmVtO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjQxLCAyNDIsIDI0NiwgMC43KTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIyMywgMjI4LCAyMzQsIDAuOCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgY29sb3I6ICMyZDM0MzY7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIGlucHV0OmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJvcmRlci1jb2xvcjogI2ZmNDc1NztcclxuICBib3gtc2hhZG93OiAwIDAgMCA0cHggcmdiYSgyNTUsIDcxLCA4NywgMC4xKTtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBiYWNrZ3JvdW5kOiAjZmY0NzU3O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTVweCByZ2JhKDI1NSwgNzEsIDg3LCAwLjMpO1xyXG59XHJcblxyXG4uYnRuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZTYzOTQ2O1xyXG4gIGJveC1zaGFkb3c6IDAgNnB4IDIwcHggcmdiYSgyNTUsIDcxLCA4NywgMC40KTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbn1cclxuXHJcbi5idG46ZGlzYWJsZWQge1xyXG4gIGJhY2tncm91bmQ6ICNmZjllOTk7XHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLmVycm9yLW1lc3NhZ2Uge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCA3MSwgODcsIDAuMSk7XHJcbiAgY29sb3I6ICNmZjQ3NTc7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgNzEsIDg3LCAwLjIpO1xyXG59XHJcblxyXG4ubG9naW4tYm94IHAge1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgY29sb3I6ICM2MzZlNzI7XHJcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG59XHJcblxyXG4ubG9naW4tYm94IHAgYSB7XHJcbiAgY29sb3I6ICNmZjQ3NTc7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycztcclxufVxyXG5cclxuLmxvZ2luLWJveCBwIGE6aG92ZXIge1xyXG4gIGNvbG9yOiAjZTYzOTQ2O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4vKiBBbmltYXRpb25zICovXHJcbkBrZXlmcmFtZXMgZmFkZUluIHtcclxuICBmcm9tIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpOyB9XHJcbiAgdG8geyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cclxufVxyXG5cclxuLmxvZ2luLWJveCB7XHJcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC42cyBjdWJpYy1iZXppZXIoMC4xNiwgMSwgMC4zLCAxKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 1245:
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileComponent: () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth.service */ 4796);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);







function ProfileComponent_div_6_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_div_6_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.toggleEdit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_div_6_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14)(1, "form", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ProfileComponent_div_6_div_6_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.updateProfile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 16)(3, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Full Name *");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function ProfileComponent_div_6_div_6_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r1.profileData.name, $event) || (ctx_r1.profileData.name = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 16)(7, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "textarea", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function ProfileComponent_div_6_div_6_Template_textarea_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r1.profileData.address, $event) || (ctx_r1.profileData.address = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 16)(11, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function ProfileComponent_div_6_div_6_Template_input_ngModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r1.profileData.phone, $event) || (ctx_r1.profileData.phone = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 23)(15, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_div_6_div_6_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.toggleEdit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.profileData.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.profileData.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.profileData.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r1.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.isLoading ? "Saving..." : "Save Changes", " ");
  }
}
function ProfileComponent_div_6_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26)(1, "div", 27)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 27)(7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Email:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 27)(12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Role:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 27)(18, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Address:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 27)(23, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Phone:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((ctx_r1.user == null ? null : ctx_r1.user.name) || "Not set");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.user == null ? null : ctx_r1.user.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r1.user == null ? null : ctx_r1.user.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 6, ctx_r1.user == null ? null : ctx_r1.user.role));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((ctx_r1.user == null ? null : ctx_r1.user.address) || "Not set");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((ctx_r1.user == null ? null : ctx_r1.user.phone) || "Not set");
  }
}
function ProfileComponent_div_6_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_div_6_button_13_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.togglePasswordChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Change Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_div_6_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30)(1, "form", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ProfileComponent_div_6_div_14_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.changePassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 16)(3, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Current Password *");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function ProfileComponent_div_6_div_14_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r1.passwordData.currentPassword, $event) || (ctx_r1.passwordData.currentPassword = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 16)(7, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "New Password *");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function ProfileComponent_div_6_div_14_Template_input_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r1.passwordData.newPassword, $event) || (ctx_r1.passwordData.newPassword = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "small", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Must be at least 6 characters long");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 16)(13, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Confirm New Password *");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function ProfileComponent_div_6_div_14_Template_input_ngModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r1.passwordData.confirmPassword, $event) || (ctx_r1.passwordData.confirmPassword = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 23)(17, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_div_6_div_14_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.togglePasswordChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.passwordData.currentPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.passwordData.newPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.passwordData.confirmPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r1.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.isLoading ? "Changing..." : "Change Password", " ");
  }
}
function ProfileComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Profile Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ProfileComponent_div_6_button_5_Template, 3, 0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ProfileComponent_div_6_div_6_Template, 19, 5, "div", 10)(7, ProfileComponent_div_6_ng_template_7_Template, 27, 8, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7)(10, "div", 8)(11, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Security");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ProfileComponent_div_6_button_13_Template, 3, 0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ProfileComponent_div_6_div_14_Template, 21, 5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const viewMode_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.isEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.isEditing)("ngIfElse", viewMode_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.showPasswordChange);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.showPasswordChange);
  }
}
function ProfileComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Loading profile...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
class ProfileComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
    this.user = null;
    this.isLoading = false;
    this.isEditing = false;
    this.showPasswordChange = false;
    this.profileData = {
      name: '',
      address: '',
      phone: ''
    };
    this.passwordData = {
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    };
  }
  ngOnInit() {
    this.loadProfile();
  }
  loadProfile() {
    this.isLoading = true;
    this.authService.me().subscribe({
      next: user => {
        this.user = user;
        this.profileData = {
          name: user.name || '',
          address: user.address || '',
          phone: user.phone || ''
        };
        this.isLoading = false;
      },
      error: err => {
        console.error('Error loading profile', err);
        this.isLoading = false;
      }
    });
  }
  toggleEdit() {
    this.isEditing = !this.isEditing;
    if (!this.isEditing) {
      // Reset form data
      this.profileData = {
        name: this.user.name || '',
        address: this.user.address || '',
        phone: this.user.phone || ''
      };
    }
  }
  updateProfile() {
    if (!this.profileData.name.trim()) {
      alert('Name is required');
      return;
    }
    this.isLoading = true;
    this.authService.updateProfile(this.profileData).subscribe({
      next: updatedUser => {
        this.user = updatedUser;
        this.isEditing = false;
        this.isLoading = false;
        alert('Profile updated successfully!');
      },
      error: err => {
        this.isLoading = false;
        alert('Error updating profile: ' + (err.error?.error || 'Unknown error'));
      }
    });
  }
  togglePasswordChange() {
    this.showPasswordChange = !this.showPasswordChange;
    if (!this.showPasswordChange) {
      this.passwordData = {
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      };
    }
  }
  changePassword() {
    if (!this.passwordData.currentPassword || !this.passwordData.newPassword || !this.passwordData.confirmPassword) {
      alert('All password fields are required');
      return;
    }
    if (this.passwordData.newPassword !== this.passwordData.confirmPassword) {
      alert('New passwords do not match');
      return;
    }
    if (this.passwordData.newPassword.length < 6) {
      alert('New password must be at least 6 characters long');
      return;
    }
    this.isLoading = true;
    this.authService.changePassword({
      currentPassword: this.passwordData.currentPassword,
      newPassword: this.passwordData.newPassword
    }).subscribe({
      next: response => {
        this.isLoading = false;
        this.showPasswordChange = false;
        this.passwordData = {
          currentPassword: '',
          newPassword: '',
          confirmPassword: ''
        };
        alert('Password changed successfully!');
      },
      error: err => {
        this.isLoading = false;
        alert('Error changing password: ' + (err.error?.error || 'Unknown error'));
      }
    });
  }
  goBack() {
    // Navigate back to the appropriate dashboard based on role
    const role = this.user?.role;
    if (role === 'admin') {
      this.router.navigate(['/admin']);
    } else if (role === 'restaurant') {
      this.router.navigate(['/restaurant']);
    } else if (role === 'rider') {
      this.router.navigate(['/rider']);
    } else {
      this.router.navigate(['/customer']);
    }
  }
  static {
    this.ɵfac = function ProfileComponent_Factory(t) {
      return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ProfileComponent,
      selectors: [["app-profile"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 8,
      vars: 2,
      consts: [["viewMode", ""], [1, "profile-container"], [1, "profile-header"], [1, "btn-back", 3, "click"], ["class", "profile-content", 4, "ngIf"], ["class", "loading", 4, "ngIf"], [1, "profile-content"], [1, "profile-section"], [1, "section-header"], ["class", "btn-edit", 3, "click", 4, "ngIf"], ["class", "profile-form", 4, "ngIf", "ngIfElse"], ["class", "password-form", 4, "ngIf"], [1, "btn-edit", 3, "click"], [1, "fas", "fa-edit"], [1, "profile-form"], [3, "ngSubmit"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "name", "name", "required", "", 3, "ngModelChange", "ngModel"], ["for", "address"], ["id", "address", "name", "address", "rows", "3", "placeholder", "Enter your delivery address", 3, "ngModelChange", "ngModel"], ["for", "phone"], ["type", "tel", "id", "phone", "name", "phone", "placeholder", "e.g. +1-234-567-8900", 3, "ngModelChange", "ngModel"], [1, "form-actions"], ["type", "submit", 1, "btn-save", 3, "disabled"], ["type", "button", 1, "btn-cancel", 3, "click"], [1, "profile-info"], [1, "info-item"], [1, "role-badge", 3, "ngClass"], [1, "fas", "fa-key"], [1, "password-form"], ["for", "currentPassword"], ["type", "password", "id", "currentPassword", "name", "currentPassword", "required", "", 3, "ngModelChange", "ngModel"], ["for", "newPassword"], ["type", "password", "id", "newPassword", "name", "newPassword", "required", "", "minlength", "6", 3, "ngModelChange", "ngModel"], [1, "form-hint"], ["for", "confirmPassword"], ["type", "password", "id", "confirmPassword", "name", "confirmPassword", "required", "", 3, "ngModelChange", "ngModel"], [1, "loading"], [1, "spinner"]],
      template: function ProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "My Profile");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_4_listener() {
            return ctx.goBack();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u2190 Back to Dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ProfileComponent_div_6_Template, 15, 5, "div", 4)(7, ProfileComponent_div_7_Template, 4, 0, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.TitleCasePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
      styles: [".profile-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n  background: #fff;\n  min-height: 100vh;\n}\n\n.profile-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 30px;\n  padding-bottom: 20px;\n  border-bottom: 2px solid #f0f0f0;\n}\n\n.profile-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #333;\n  font-size: 28px;\n}\n\n.btn-back[_ngcontent-%COMP%] {\n  background: #6c757d;\n  color: white;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 14px;\n  transition: background-color 0.3s;\n}\n\n.btn-back[_ngcontent-%COMP%]:hover {\n  background: #5a6268;\n}\n\n.profile-section[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-radius: 10px;\n  padding: 25px;\n  margin-bottom: 25px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n.section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #333;\n  font-size: 20px;\n}\n\n.btn-edit[_ngcontent-%COMP%] {\n  background: #007bff;\n  color: white;\n  border: none;\n  padding: 8px 16px;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  transition: background-color 0.3s;\n}\n\n.btn-edit[_ngcontent-%COMP%]:hover {\n  background: #0056b3;\n}\n\n.profile-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n\n.info-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 0;\n  border-bottom: 1px solid #e9ecef;\n}\n\n.info-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.info-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #555;\n  min-width: 120px;\n}\n\n.info-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #333;\n  text-align: right;\n}\n\n.role-badge[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n\n.role-badge.customer[_ngcontent-%COMP%] {\n  background: #28a745;\n  color: white;\n}\n\n.role-badge.restaurant[_ngcontent-%COMP%] {\n  background: #fd7e14;\n  color: white;\n}\n\n.role-badge.rider[_ngcontent-%COMP%] {\n  background: #6f42c1;\n  color: white;\n}\n\n.role-badge.admin[_ngcontent-%COMP%] {\n  background: #dc3545;\n  color: white;\n}\n\n.profile-form[_ngcontent-%COMP%], .password-form[_ngcontent-%COMP%] {\n  max-width: 500px;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 5px;\n  font-weight: 600;\n  color: #333;\n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  border: 2px solid #e9ecef;\n  border-radius: 5px;\n  font-size: 16px;\n  transition: border-color 0.3s;\n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #007bff;\n}\n\n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n\n.form-hint[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 5px;\n  color: #6c757d;\n  font-size: 14px;\n}\n\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-top: 25px;\n}\n\n.btn-save[_ngcontent-%COMP%] {\n  background: #28a745;\n  color: white;\n  border: none;\n  padding: 12px 24px;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 16px;\n  font-weight: 600;\n  transition: background-color 0.3s;\n}\n\n.btn-save[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #218838;\n}\n\n.btn-save[_ngcontent-%COMP%]:disabled {\n  background: #6c757d;\n  cursor: not-allowed;\n}\n\n.btn-cancel[_ngcontent-%COMP%] {\n  background: #6c757d;\n  color: white;\n  border: none;\n  padding: 12px 24px;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 16px;\n  transition: background-color 0.3s;\n}\n\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: #5a6268;\n}\n\n.loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 50px;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #007bff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 20px;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n\n.loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 16px;\n}\n\n\n\n@media (max-width: 768px) {\n  .profile-container[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n\n  .profile-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 15px;\n    text-align: center;\n  }\n\n  .section-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 10px;\n    align-items: flex-start;\n  }\n\n  .info-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 5px;\n  }\n\n  .info-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n\n  .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .btn-save[_ngcontent-%COMP%], .btn-cancel[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFNBQVM7RUFDVCxXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWU7RUFDZixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsU0FBUztFQUNULFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBOztFQUVFLFdBQVc7RUFDWCxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsNkJBQTZCO0FBQy9COztBQUVBOztFQUVFLGFBQWE7RUFDYixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6Qiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLGtDQUFrQztFQUNsQyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxLQUFLLHVCQUF1QixFQUFFO0VBQzlCLE9BQU8seUJBQXlCLEVBQUU7QUFDcEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQSxzQkFBc0I7QUFDdEI7RUFDRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1Qsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCx1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFFBQVE7RUFDVjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLFdBQVc7RUFDYjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLnByb2ZpbGUtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmMGYwZjA7XHJcbn1cclxuXHJcbi5wcm9maWxlLWhlYWRlciBoMiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxufVxyXG5cclxuLmJ0bi1iYWNrIHtcclxuICBiYWNrZ3JvdW5kOiAjNmM3NTdkO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcclxufVxyXG5cclxuLmJ0bi1iYWNrOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNWE2MjY4O1xyXG59XHJcblxyXG4ucHJvZmlsZS1zZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZzogMjVweDtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4uc2VjdGlvbi1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLnNlY3Rpb24taGVhZGVyIGgzIHtcclxuICBtYXJnaW46IDA7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4uYnRuLWVkaXQge1xyXG4gIGJhY2tncm91bmQ6ICMwMDdiZmY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiA4cHggMTZweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA1cHg7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xyXG59XHJcblxyXG4uYnRuLWVkaXQ6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICMwMDU2YjM7XHJcbn1cclxuXHJcbi5wcm9maWxlLWluZm8ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDE1cHg7XHJcbn1cclxuXHJcbi5pbmZvLWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTBweCAwO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllY2VmO1xyXG59XHJcblxyXG4uaW5mby1pdGVtOmxhc3QtY2hpbGQge1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbn1cclxuXHJcbi5pbmZvLWl0ZW0gbGFiZWwge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICM1NTU7XHJcbiAgbWluLXdpZHRoOiAxMjBweDtcclxufVxyXG5cclxuLmluZm8taXRlbSBzcGFuIHtcclxuICBjb2xvcjogIzMzMztcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLnJvbGUtYmFkZ2Uge1xyXG4gIHBhZGRpbmc6IDRweCAxMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLnJvbGUtYmFkZ2UuY3VzdG9tZXIge1xyXG4gIGJhY2tncm91bmQ6ICMyOGE3NDU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ucm9sZS1iYWRnZS5yZXN0YXVyYW50IHtcclxuICBiYWNrZ3JvdW5kOiAjZmQ3ZTE0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnJvbGUtYmFkZ2UucmlkZXIge1xyXG4gIGJhY2tncm91bmQ6ICM2ZjQyYzE7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ucm9sZS1iYWRnZS5hZG1pbiB7XHJcbiAgYmFja2dyb3VuZDogI2RjMzU0NTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5wcm9maWxlLWZvcm0sIC5wYXNzd29yZC1mb3JtIHtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAgbGFiZWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjMzMzO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCBpbnB1dCxcclxuLmZvcm0tZ3JvdXAgdGV4dGFyZWEge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2U5ZWNlZjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjNzO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCBpbnB1dDpmb2N1cyxcclxuLmZvcm0tZ3JvdXAgdGV4dGFyZWE6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB0ZXh0YXJlYSB7XHJcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcclxuICBtaW4taGVpZ2h0OiA4MHB4O1xyXG59XHJcblxyXG4uZm9ybS1oaW50IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uZm9ybS1hY3Rpb25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMTBweDtcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcblxyXG4uYnRuLXNhdmUge1xyXG4gIGJhY2tncm91bmQ6ICMyOGE3NDU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiAxMnB4IDI0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XHJcbn1cclxuXHJcbi5idG4tc2F2ZTpob3Zlcjpub3QoOmRpc2FibGVkKSB7XHJcbiAgYmFja2dyb3VuZDogIzIxODgzODtcclxufVxyXG5cclxuLmJ0bi1zYXZlOmRpc2FibGVkIHtcclxuICBiYWNrZ3JvdW5kOiAjNmM3NTdkO1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbn1cclxuXHJcbi5idG4tY2FuY2VsIHtcclxuICBiYWNrZ3JvdW5kOiAjNmM3NTdkO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogMTJweCAyNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcclxufVxyXG5cclxuLmJ0bi1jYW5jZWw6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICM1YTYyNjg7XHJcbn1cclxuXHJcbi5sb2FkaW5nIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiA1MHB4O1xyXG59XHJcblxyXG4uc3Bpbm5lciB7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlcjogNHB4IHNvbGlkICNmM2YzZjM7XHJcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICMwMDdiZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzcGluIHtcclxuICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxufVxyXG5cclxuLmxvYWRpbmcgcCB7XHJcbiAgY29sb3I6ICM2NjY7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4vKiBSZXNwb25zaXZlIGRlc2lnbiAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAucHJvZmlsZS1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICB9XHJcblxyXG4gIC5wcm9maWxlLWhlYWRlciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24taGVhZGVyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICB9XHJcblxyXG4gIC5pbmZvLWl0ZW0ge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgZ2FwOiA1cHg7XHJcbiAgfVxyXG5cclxuICAuaW5mby1pdGVtIHNwYW4ge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcblxyXG4gIC5mb3JtLWFjdGlvbnMge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gIC5idG4tc2F2ZSwgLmJ0bi1jYW5jZWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 5507:
/*!**************************************************!*\
  !*** ./src/app/components/register.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterComponent: () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 4796);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);







function RegisterComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage, " ");
  }
}
function RegisterComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.successMessage, " ");
  }
}
class RegisterComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
    this.name = '';
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
    this.role = 'customer';
    this.errorMessage = '';
    this.successMessage = '';
    this.isLoading = false;
  }
  register() {
    if (!this.name || !this.email || !this.password || !this.confirmPassword) {
      this.errorMessage = 'All fields are required';
      return;
    }
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match';
      return;
    }
    this.isLoading = true;
    this.errorMessage = '';
    this.successMessage = '';
    this.authService.register(this.name, this.email, this.password, this.role).subscribe({
      next: response => {
        this.isLoading = false;
        this.successMessage = 'Registration successful! Please login.';
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);
      },
      error: err => {
        this.isLoading = false;
        this.errorMessage = err?.error?.error || 'Registration failed';
      }
    });
  }
  static {
    this.ɵfac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["app-register"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 45,
      vars: 9,
      consts: [[1, "register-container"], [1, "register-box"], [1, "header-group"], [1, "subtitle"], [3, "ngSubmit"], [1, "form-grid"], [1, "form-group", "full-width"], ["for", "name"], ["type", "text", "id", "name", "name", "name", "placeholder", "John Doe", "required", "", 3, "ngModelChange", "ngModel"], ["for", "email"], ["type", "email", "id", "email", "name", "email", "placeholder", "you@example.com", "required", "", 3, "ngModelChange", "ngModel"], [1, "form-group"], ["for", "password"], ["type", "password", "id", "password", "name", "password", "placeholder", "Create password", "required", "", 3, "ngModelChange", "ngModel"], ["for", "confirmPassword"], ["type", "password", "id", "confirmPassword", "name", "confirmPassword", "placeholder", "Confirm password", "required", "", 3, "ngModelChange", "ngModel"], ["for", "role"], ["id", "role", "name", "role", 3, "ngModelChange", "ngModel"], ["value", "customer"], ["value", "restaurant"], ["value", "rider"], ["value", "admin"], ["class", "error-message", 4, "ngIf"], ["class", "success-message", 4, "ngIf"], ["type", "submit", 1, "btn", 3, "disabled"], [1, "footer-text"], ["routerLink", "/login"], [1, "error-message"], [1, "fas", "fa-exclamation-triangle"], [1, "success-message"], [1, "fas", "fa-check-circle"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Create Account");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Join us to order delicious food or manage your restaurant");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_7_listener() {
            return ctx.register();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5)(9, "div", 6)(10, "label", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Full Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.name, $event) || (ctx.name = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 6)(14, "label", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Email Address");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_16_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.email, $event) || (ctx.email = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 11)(18, "label", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_20_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.password, $event) || (ctx.password = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 11)(22, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Confirm Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_24_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.confirmPassword, $event) || (ctx.confirmPassword = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 6)(26, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Register as");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "select", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function RegisterComponent_Template_select_ngModelChange_28_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.role, $event) || (ctx.role = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "option", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Hungry Customer");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "option", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Restaurant Owner");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "option", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Delivery Rider");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "option", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "System Admin");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, RegisterComponent_div_37_Template, 3, 1, "div", 22)(38, RegisterComponent_div_38_Template, 3, 1, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "p", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Already have an account? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "a", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Sign In");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.email);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.password);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.confirmPassword);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.role);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.successMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.isLoading ? "Creating Account..." : "Create Account", " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
      styles: ["@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300;400[_ngcontent-%COMP%];500[_ngcontent-%COMP%];600[_ngcontent-%COMP%];700&display=swap)[_ngcontent-%COMP%];\n\n\n.register-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: linear-gradient(135deg, #a8e063 0%, #56ab2f 100%);\n  font-family: 'Poppins', sans-serif;\n  padding: 2rem;\n  position: relative;\n  overflow: hidden;\n}\n\n\n\n.register-container[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  top: -15%;\n  right: -10%;\n  width: 500px;\n  height: 500px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n  filter: blur(60px);\n  z-index: 0;\n}\n\n.register-container[_ngcontent-%COMP%]::after {\n  content: '';\n  position: absolute;\n  bottom: -20%;\n  left: -10%;\n  width: 600px;\n  height: 600px;\n  background: rgba(0, 0, 0, 0.1);\n  border-radius: 50%;\n  filter: blur(80px);\n  z-index: 0;\n}\n\n.register-box[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.95);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  border-radius: 24px;\n  padding: 3rem;\n  width: 100%;\n  max-width: 550px;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);\n  z-index: 1;\n  transform: translateY(0);\n  transition: transform 0.3s ease;\n}\n\n.register-box[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n}\n\n.header-group[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2.5rem;\n}\n\n.header-group[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #2d3436;\n  font-size: 2.2rem;\n  font-weight: 700;\n  margin-bottom: 0.5rem;\n}\n\n.header-group[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  color: #636e72;\n  font-size: 0.95rem;\n}\n\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.5rem;\n}\n\n.form-group.full-width[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.9rem;\n  color: #2d3436;\n  font-weight: 500;\n  margin-bottom: 0.5rem;\n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1rem 1.2rem;\n  background: rgba(241, 242, 246, 0.7);\n  border: 1px solid rgba(223, 228, 234, 0.8);\n  border-radius: 12px;\n  font-size: 1rem;\n  color: #2d3436;\n  outline: none;\n  transition: all 0.3s ease;\n  box-sizing: border-box;\n}\n\n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  appearance: none;\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%232d3436' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: right 1rem center;\n  background-size: 1em;\n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  background: #ffffff;\n  border-color: #56ab2f;\n  box-shadow: 0 0 0 4px rgba(86, 171, 47, 0.1);\n}\n\n.btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1rem;\n  background: #56ab2f;\n  color: white;\n  border: none;\n  border-radius: 12px;\n  font-size: 1.1rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  margin-top: 1rem;\n  box-shadow: 0 4px 15px rgba(86, 171, 47, 0.3);\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  background: #4a9328;\n  box-shadow: 0 6px 20px rgba(86, 171, 47, 0.4);\n  transform: translateY(-2px);\n}\n\n.btn[_ngcontent-%COMP%]:disabled {\n  background: #9bd283;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: none;\n}\n\n.error-message[_ngcontent-%COMP%] {\n  background: rgba(255, 71, 87, 0.1);\n  color: #ff4757;\n  padding: 1rem;\n  border-radius: 12px;\n  margin-bottom: 1.5rem;\n  font-size: 0.9rem;\n  border: 1px solid rgba(255, 71, 87, 0.2);\n}\n\n.success-message[_ngcontent-%COMP%] {\n  background: rgba(46, 213, 115, 0.1);\n  color: #2ed573;\n  padding: 1rem;\n  border-radius: 12px;\n  margin-bottom: 1.5rem;\n  font-size: 0.9rem;\n  border: 1px solid rgba(46, 213, 115, 0.2);\n}\n\n.footer-text[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  color: #636e72;\n  font-size: 0.95rem;\n  text-align: center;\n}\n\n.footer-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #56ab2f;\n  text-decoration: none;\n  font-weight: 600;\n  transition: color 0.2s;\n}\n\n.footer-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #4a9328;\n  text-decoration: underline;\n}\n\n\n\n@keyframes _ngcontent-%COMP%_slideUp {\n  from { opacity: 0; transform: translateY(30px); }\n  to { opacity: 1; transform: translateY(0); }\n}\n\n.register-box[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1);\n}\n\n@media (max-width: 600px) {\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtDQUErQzs7QUFHL0M7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsNkRBQTZEO0VBQzdELGtDQUFrQztFQUNsQyxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQSxtQ0FBbUM7QUFDbkM7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixVQUFVO0VBQ1YsWUFBWTtFQUNaLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsMkJBQTJCO0VBQzNCLG1DQUFtQztFQUNuQywwQ0FBMEM7RUFDMUMsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLDJDQUEyQztFQUMzQyxVQUFVO0VBQ1Ysd0JBQXdCO0VBQ3hCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixvQ0FBb0M7RUFDcEMsMENBQTBDO0VBQzFDLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsY0FBYztFQUNkLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHdSQUF3UjtFQUN4Uiw0QkFBNEI7RUFDNUIsc0NBQXNDO0VBQ3RDLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQiw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsNkNBQTZDO0VBQzdDLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxjQUFjO0VBQ2QsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxjQUFjO0VBQ2QsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCwwQkFBMEI7QUFDNUI7O0FBRUEsZUFBZTtBQUNmO0VBQ0UsT0FBTyxVQUFVLEVBQUUsMkJBQTJCLEVBQUU7RUFDaEQsS0FBSyxVQUFVLEVBQUUsd0JBQXdCLEVBQUU7QUFDN0M7O0FBRUE7RUFDRSxxREFBcUQ7QUFDdkQ7O0FBRUE7RUFDRTtJQUNFLDBCQUEwQjtFQUM1QjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyogTW9kZXJuIEdsYXNzbW9ycGhpc20gQXV0aGVudGljYXRpb24gU3R5bGVzICovXHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuLnJlZ2lzdGVyLWNvbnRhaW5lciB7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNhOGUwNjMgMCUsICM1NmFiMmYgMTAwJSk7XHJcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4vKiBCYWNrZ3JvdW5kIGRlY29yYXRpdmUgZWxlbWVudHMgKi9cclxuLnJlZ2lzdGVyLWNvbnRhaW5lcjo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtMTUlO1xyXG4gIHJpZ2h0OiAtMTAlO1xyXG4gIHdpZHRoOiA1MDBweDtcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZmlsdGVyOiBibHVyKDYwcHgpO1xyXG4gIHotaW5kZXg6IDA7XHJcbn1cclxuXHJcbi5yZWdpc3Rlci1jb250YWluZXI6OmFmdGVyIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAtMjAlO1xyXG4gIGxlZnQ6IC0xMCU7XHJcbiAgd2lkdGg6IDYwMHB4O1xyXG4gIGhlaWdodDogNjAwcHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBmaWx0ZXI6IGJsdXIoODBweCk7XHJcbiAgei1pbmRleDogMDtcclxufVxyXG5cclxuLnJlZ2lzdGVyLWJveCB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk1KTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XHJcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgcGFkZGluZzogM3JlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDU1MHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMjBweCA0MHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgei1pbmRleDogMTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLnJlZ2lzdGVyLWJveDpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xyXG59XHJcblxyXG4uaGVhZGVyLWdyb3VwIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xyXG59XHJcblxyXG4uaGVhZGVyLWdyb3VwIGgyIHtcclxuICBjb2xvcjogIzJkMzQzNjtcclxuICBmb250LXNpemU6IDIuMnJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxufVxyXG5cclxuLmhlYWRlci1ncm91cCAuc3VidGl0bGUge1xyXG4gIGNvbG9yOiAjNjM2ZTcyO1xyXG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcclxufVxyXG5cclxuLmZvcm0tZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgZ2FwOiAxLjVyZW07XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwLmZ1bGwtd2lkdGgge1xyXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCBsYWJlbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgY29sb3I6ICMyZDM0MzY7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIGlucHV0LCAuZm9ybS1ncm91cCBzZWxlY3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDFyZW0gMS4ycmVtO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjQxLCAyNDIsIDI0NiwgMC43KTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIyMywgMjI4LCAyMzQsIDAuOCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgY29sb3I6ICMyZDM0MzY7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHNlbGVjdCB7XHJcbiAgYXBwZWFyYW5jZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD1VVEYtOCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nJTIzMmQzNDM2JyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCclM2UlM2Nwb2x5bGluZSBwb2ludHM9JzYgOSAxMiAxNSAxOCA5JyUzZSUzYy9wb2x5bGluZSUzZSUzYy9zdmclM2VcIik7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCAxcmVtIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDFlbTtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAgaW5wdXQ6Zm9jdXMsIC5mb3JtLWdyb3VwIHNlbGVjdDpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3JkZXItY29sb3I6ICM1NmFiMmY7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgNHB4IHJnYmEoODYsIDE3MSwgNDcsIDAuMSk7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgYmFja2dyb3VuZDogIzU2YWIyZjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggcmdiYSg4NiwgMTcxLCA0NywgMC4zKTtcclxufVxyXG5cclxuLmJ0bjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzRhOTMyODtcclxuICBib3gtc2hhZG93OiAwIDZweCAyMHB4IHJnYmEoODYsIDE3MSwgNDcsIDAuNCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG59XHJcblxyXG4uYnRuOmRpc2FibGVkIHtcclxuICBiYWNrZ3JvdW5kOiAjOWJkMjgzO1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgdHJhbnNmb3JtOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5lcnJvci1tZXNzYWdlIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgNzEsIDg3LCAwLjEpO1xyXG4gIGNvbG9yOiAjZmY0NzU3O1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDcxLCA4NywgMC4yKTtcclxufVxyXG5cclxuLnN1Y2Nlc3MtbWVzc2FnZSB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSg0NiwgMjEzLCAxMTUsIDAuMSk7XHJcbiAgY29sb3I6ICMyZWQ1NzM7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDQ2LCAyMTMsIDExNSwgMC4yKTtcclxufVxyXG5cclxuLmZvb3Rlci10ZXh0IHtcclxuICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gIGNvbG9yOiAjNjM2ZTcyO1xyXG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mb290ZXItdGV4dCBhIHtcclxuICBjb2xvcjogIzU2YWIyZjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzO1xyXG59XHJcblxyXG4uZm9vdGVyLXRleHQgYTpob3ZlciB7XHJcbiAgY29sb3I6ICM0YTkzMjg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi8qIEFuaW1hdGlvbnMgKi9cclxuQGtleWZyYW1lcyBzbGlkZVVwIHtcclxuICBmcm9tIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwcHgpOyB9XHJcbiAgdG8geyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cclxufVxyXG5cclxuLnJlZ2lzdGVyLWJveCB7XHJcbiAgYW5pbWF0aW9uOiBzbGlkZVVwIDAuN3MgY3ViaWMtYmV6aWVyKDAuMTYsIDEsIDAuMywgMSk7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5mb3JtLWdyaWQge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 4048:
/*!*************************************************************************!*\
  !*** ./src/app/components/restaurant/restaurant-dashboard.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RestaurantDashboardComponent: () => (/* binding */ RestaurantDashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_restaurant_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/restaurant.service */ 793);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ 4796);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);








function RestaurantDashboardComponent_ng_container_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Restaurant Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
function RestaurantDashboardComponent_ng_container_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Menu Management");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
function RestaurantDashboardComponent_ng_container_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Order Management");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
function RestaurantDashboardComponent_div_35_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26)(1, "div", 27)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Restaurant Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 27)(7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 27)(12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 27)(17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Contact Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 27)(22, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Rating");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.restaurant.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.restaurant.description || "No description added yet.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.restaurant.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.restaurant.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.restaurant.rating || 0, "");
  }
}
function RestaurantDashboardComponent_div_35_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 30)(1, "form", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function RestaurantDashboardComponent_div_35_div_9_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.updateProfile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 32)(3, "div", 33)(4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Restaurant Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function RestaurantDashboardComponent_div_35_div_9_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r1.profileData.name, $event) || (ctx_r1.profileData.name = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 33)(8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "textarea", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function RestaurantDashboardComponent_div_35_div_9_Template_textarea_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r1.profileData.description, $event) || (ctx_r1.profileData.description = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 36)(12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function RestaurantDashboardComponent_div_35_div_9_Template_input_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r1.profileData.address, $event) || (ctx_r1.profileData.address = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 36)(16, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function RestaurantDashboardComponent_div_35_div_9_Template_input_ngModelChange_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r1.profileData.phone, $event) || (ctx_r1.profileData.phone = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " Save Changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.profileData.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.profileData.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.profileData.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.profileData.phone);
  }
}
function RestaurantDashboardComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19)(1, "div", 20)(2, "div", 21)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Profile Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RestaurantDashboardComponent_div_35_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.showProfileForm = !ctx_r1.showProfileForm);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, RestaurantDashboardComponent_div_35_div_8_Template, 27, 5, "div", 24)(9, RestaurantDashboardComponent_div_35_div_9_Template, 22, 4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r1.showProfileForm ? "fa-times" : "fa-edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.showProfileForm ? "Cancel" : "Edit Profile", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.restaurant && !ctx_r1.showProfileForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.showProfileForm);
  }
}
function RestaurantDashboardComponent_div_36_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 47)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Add New Menu Item");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function RestaurantDashboardComponent_div_36_div_8_Template_form_ngSubmit_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.addMenuItem());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 32)(5, "div", 36)(6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Item Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function RestaurantDashboardComponent_div_36_div_8_Template_input_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r1.newItem.name, $event) || (ctx_r1.newItem.name = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 36)(10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function RestaurantDashboardComponent_div_36_div_8_Template_input_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r1.newItem.category, $event) || (ctx_r1.newItem.category = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 36)(14, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Price (Rs.)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function RestaurantDashboardComponent_div_36_div_8_Template_input_ngModelChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r1.newItem.price, $event) || (ctx_r1.newItem.price = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 33)(18, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "textarea", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function RestaurantDashboardComponent_div_36_div_8_Template_textarea_ngModelChange_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r1.newItem.description, $event) || (ctx_r1.newItem.description = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " Save Item");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.newItem.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.newItem.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.newItem.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.newItem.description);
  }
}
function RestaurantDashboardComponent_div_36_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "No menu items added yet.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function RestaurantDashboardComponent_div_36_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td")(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td")(7, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td")(12, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "td")(15, "label", 58)(16, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function RestaurantDashboardComponent_div_36_tr_25_Template_input_change_16_listener() {
      const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.toggleItemAvailability(item_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r7.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r7.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Rs. ", item_r7.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", item_r7.isAvailable ? "badge-success" : "badge-danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r7.isAvailable ? "Available" : "Out of Stock", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", item_r7.isAvailable);
  }
}
function RestaurantDashboardComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19)(1, "div", 41)(2, "div", 21)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Menu Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RestaurantDashboardComponent_div_36_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.showAddItemForm = !ctx_r1.showAddItemForm);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, RestaurantDashboardComponent_div_36_div_8_Template, 24, 4, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 44)(10, "table", 45)(11, "thead")(12, "tr")(13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Item Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Availability");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, RestaurantDashboardComponent_div_36_tr_24_Template, 3, 0, "tr", 16)(25, RestaurantDashboardComponent_div_36_tr_25_Template, 18, 7, "tr", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r1.showAddItemForm ? "fa-times" : "fa-plus");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.showAddItemForm ? "Cancel" : "Add New Item", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.showAddItemForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.menuItems.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.menuItems);
  }
}
function RestaurantDashboardComponent_div_37_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "No orders received yet.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function RestaurantDashboardComponent_div_37_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td")(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "td")(9, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "td")(13, "select", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function RestaurantDashboardComponent_div_37_tr_21_Template_select_change_13_listener($event) {
      const order_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.updateOrderStatus(order_r9, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "option", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "option", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Accept Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Preparing Food");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "option", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Ready for Pickup");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Cancel Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const order_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("#", order_r9._id.slice(-6).toUpperCase(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((order_r9.customerId == null ? null : order_r9.customerId.name) || "Customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Rs. ", order_r9.totalAmount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", "status-" + order_r9.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 10, order_r9.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("selected", order_r9.status === "pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("selected", order_r9.status === "accepted");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("selected", order_r9.status === "preparing");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("selected", order_r9.status === "ready");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("selected", order_r9.status === "cancelled");
  }
}
function RestaurantDashboardComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19)(1, "div", 20)(2, "div", 61)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Live Orders");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 44)(6, "table", 45)(7, "thead")(8, "tr")(9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Order ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Total Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Update Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, RestaurantDashboardComponent_div_37_tr_20_Template, 3, 0, "tr", 16)(21, RestaurantDashboardComponent_div_37_tr_21_Template, 24, 12, "tr", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.orders.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.orders);
  }
}
class RestaurantDashboardComponent {
  setActiveTab(tab) {
    this.activeTab = tab;
  }
  constructor(restaurantService, authService, router) {
    this.restaurantService = restaurantService;
    this.authService = authService;
    this.router = router;
    this.restaurant = null;
    this.menuItems = [];
    this.orders = [];
    this.showAddItemForm = false;
    this.showProfileForm = false;
    this.activeTab = 'profile';
    this.newItem = {
      name: '',
      description: '',
      price: 0,
      category: '',
      image: ''
    };
    this.profileData = {
      name: '',
      description: '',
      address: '',
      phone: '',
      image: ''
    };
  }
  ngOnInit() {
    this.loadProfile();
    this.loadMenu();
    this.loadOrders();
  }
  loadProfile() {
    this.restaurantService.getProfile().subscribe(data => {
      this.restaurant = data;
      this.profileData = {
        ...data
      };
    }, error => {
      console.error('Error loading profile', error);
    });
  }
  loadMenu() {
    this.restaurantService.getMenu().subscribe(data => {
      this.menuItems = data;
    }, error => {
      console.error('Error loading menu', error);
    });
  }
  loadOrders() {
    this.restaurantService.getOrders().subscribe(data => {
      this.orders = data;
    }, error => {
      console.error('Error loading orders', error);
    });
  }
  addMenuItem() {
    if (!this.newItem.name || !this.newItem.price || !this.newItem.category) {
      alert('Please fill all required fields');
      return;
    }
    this.restaurantService.addMenuItem(this.newItem).subscribe(response => {
      alert('Menu item added successfully!');
      this.menuItems.push(response);
      this.newItem = {
        name: '',
        description: '',
        price: 0,
        category: '',
        image: ''
      };
      this.showAddItemForm = false;
    }, error => {
      alert('Error adding menu item: ' + error.error.error);
    });
  }
  updateProfile() {
    this.restaurantService.updateProfile(this.profileData).subscribe(response => {
      alert('Profile updated successfully!');
      this.restaurant = response;
      this.showProfileForm = false;
    }, error => {
      alert('Error updating profile: ' + error.error.error);
    });
  }
  updateOrderStatus(order, event) {
    const newStatus = event.target.value;
    this.restaurantService.updateOrderStatus(order._id, newStatus).subscribe(response => {
      order.status = newStatus;
      alert('Order status updated!');
    }, error => {
      alert('Error updating order: ' + error.error.error);
    });
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  toggleItemAvailability(item) {
    const updatedItem = {
      ...item,
      isAvailable: !item.isAvailable
    };
    this.restaurantService.updateMenuItem(item._id, updatedItem).subscribe(response => {
      item.isAvailable = !item.isAvailable;
      alert('Menu item updated!');
    }, error => {
      alert('Error updating item: ' + error.error.error);
    });
  }
  static {
    this.ɵfac = function RestaurantDashboardComponent_Factory(t) {
      return new (t || RestaurantDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_restaurant_service__WEBPACK_IMPORTED_MODULE_0__.RestaurantService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: RestaurantDashboardComponent,
      selectors: [["app-restaurant-dashboard"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 38,
      vars: 12,
      consts: [[1, "dashboard-container"], [1, "sidebar"], [1, "sidebar-header"], [1, "logo"], [1, "fas", "fa-store"], [1, "nav-links"], [3, "click"], [1, "fas", "fa-user-circle"], ["routerLink", "/profile"], [1, "fas", "fa-cog"], [1, "fas", "fa-utensils"], [1, "fas", "fa-receipt"], [1, "logout-link", 3, "click"], [1, "fas", "fa-sign-out-alt"], [1, "main-content"], [1, "top-header"], [4, "ngIf"], [1, "content-body"], ["class", "fade-in", 4, "ngIf"], [1, "fade-in"], [1, "card"], [1, "card-header", "flex-between"], [1, "btn", "btn-outline", 3, "click"], [1, "fas", 3, "ngClass"], ["class", "profile-info", 4, "ngIf"], ["class", "profile-form mt-4", 4, "ngIf"], [1, "profile-info"], [1, "info-group"], [1, "rating"], [1, "fas", "fa-star"], [1, "profile-form", "mt-4"], [3, "ngSubmit"], [1, "form-grid"], [1, "form-group", "full-width"], ["type", "text", "name", "name", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "description", "rows", "3", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-group"], ["type", "text", "name", "address", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "tel", "name", "phone", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", "mt-4"], [1, "fas", "fa-save"], [1, "card", "mb-4"], [1, "btn", "btn-primary", 3, "click"], ["class", "add-item-form p-4 bg-light rounded mb-4", 4, "ngIf"], [1, "table-responsive"], [1, "data-table"], [4, "ngFor", "ngForOf"], [1, "add-item-form", "p-4", "bg-light", "rounded", "mb-4"], ["type", "text", "name", "category", "required", "", "placeholder", "e.g. Starters, Main Course", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "price", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "description", "rows", "2", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn", "btn-success", "mt-3"], [1, "fas", "fa-check"], ["colspan", "5", 1, "text-center", "py-4", "text-muted"], [1, "text-small", "text-muted"], [1, "badge", "badge-light"], [1, "text-bold"], [1, "badge", 3, "ngClass"], [1, "switch"], ["type", "checkbox", 3, "change", "checked"], [1, "slider", "round"], [1, "card-header"], [1, "text-monospace"], [1, "text-bold", "text-primary"], [1, "form-control", "status-select", 3, "change"], ["value", "pending", 3, "selected"], ["value", "accepted", 3, "selected"], ["value", "preparing", 3, "selected"], ["value", "ready", 3, "selected"], ["value", "cancelled", 3, "selected"]],
      template: function RestaurantDashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "aside", 1)(2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Restaurant Portal");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ul", 5)(8, "li", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RestaurantDashboardComponent_Template_li_click_8_listener() {
            return ctx.setActiveTab("profile");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Profile");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "li", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Account Settings");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "li", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RestaurantDashboardComponent_Template_li_click_16_listener() {
            return ctx.setActiveTab("menu");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Menu Management");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "li", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RestaurantDashboardComponent_Template_li_click_20_listener() {
            return ctx.setActiveTab("orders");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Orders");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "li", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RestaurantDashboardComponent_Template_li_click_24_listener() {
            return ctx.logout();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "i", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Logout");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "main", 14)(29, "header", 15)(30, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, RestaurantDashboardComponent_ng_container_31_Template, 2, 0, "ng-container", 16)(32, RestaurantDashboardComponent_ng_container_32_Template, 2, 0, "ng-container", 16)(33, RestaurantDashboardComponent_ng_container_33_Template, 2, 0, "ng-container", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, RestaurantDashboardComponent_div_35_Template, 10, 4, "div", 18)(36, RestaurantDashboardComponent_div_36_Template, 26, 5, "div", 18)(37, RestaurantDashboardComponent_div_37_Template, 22, 2, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.activeTab === "profile");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.activeTab === "menu");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.activeTab === "orders");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.activeTab === "profile");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.activeTab === "menu");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.activeTab === "orders");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.activeTab === "profile");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.activeTab === "menu");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.activeTab === "orders");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.TitleCasePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm],
      styles: ["\n\n.dashboard-container[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  background-color: #f8f9fa;\n  font-family: 'Poppins', sans-serif;\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  width: 260px;\n  background: #ff4757;\n  color: white;\n  display: flex;\n  flex-direction: column;\n}\n\n.sidebar-header[_ngcontent-%COMP%] {\n  padding: 2rem;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n}\n\n.logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.5rem;\n  font-weight: 700;\n}\n\n.nav-links[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  flex: 1;\n}\n\n.nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 1.2rem 2rem;\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  cursor: pointer;\n  transition: all 0.3s;\n  border-left: 4px solid transparent;\n  font-weight: 500;\n}\n\n.nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover { background: rgba(255, 255, 255, 0.1); }\n.nav-links[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  border-left-color: white;\n}\n\n.logout-link[_ngcontent-%COMP%] {\n  margin-top: auto;\n  border-top: 1px solid rgba(255, 255, 255, 0.2);\n  background: #e63946;\n}\n.logout-link[_ngcontent-%COMP%]:hover { background: #d63031; }\n\n.main-content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n\n.top-header[_ngcontent-%COMP%] {\n  background: white;\n  padding: 1.5rem 2.5rem;\n  box-shadow: 0 2px 10px rgba(0,0,0,0.05);\n}\n.top-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { margin: 0; color: #2d3436; font-size: 1.5rem; font-weight: 600; }\n\n.content-body[_ngcontent-%COMP%] {\n  padding: 2.5rem;\n  flex: 1;\n  overflow-y: auto;\n}\n\n\n\n.card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 20px rgba(0,0,0,0.05);\n  overflow: hidden;\n  margin-bottom: 1.5rem;\n}\n.card-header[_ngcontent-%COMP%] {\n  padding: 1.5rem 2rem;\n  border-bottom: 1px solid #f1f2f6;\n  background: #fdfdfd;\n}\n.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { margin: 0; color: #2d3436; font-size: 1.2rem; }\n\n.flex-between[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n\n\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.5rem;\n}\n.form-group.full-width[_ngcontent-%COMP%] { grid-column: 1 / -1; }\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] { display: block; margin-bottom: 0.5rem; color: #636e72; font-weight: 500; font-size: 0.9rem; }\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.8rem 1rem;\n  border: 1px solid #dfe4ea;\n  border-radius: 8px;\n  outline: none;\n  font-family: inherit;\n  transition: border-color 0.3s;\n  box-sizing: border-box;\n}\n.form-control[_ngcontent-%COMP%]:focus { border-color: #ff4757; }\n\n\n\n.profile-info[_ngcontent-%COMP%] { padding: 2rem; display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }\n.info-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] { color: #a4b0be; font-size: 0.85rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; }\n.info-group[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { margin: 0.3rem 0 0; color: #2d3436; font-size: 1.1rem; font-weight: 500; }\n.rating[_ngcontent-%COMP%] { color: #f1c40f !important; }\n\n\n\n.table-responsive[_ngcontent-%COMP%] { overflow-x: auto; }\n.data-table[_ngcontent-%COMP%] { width: 100%; border-collapse: collapse; }\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] { padding: 1rem 2rem; text-align: left; border-bottom: 1px solid #f1f2f6; }\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] { background: #fdfdfd; color: #636e72; font-weight: 600; font-size: 0.9rem; text-transform: uppercase; }\n.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover { background: #fafafa; }\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { margin: 0; }\n\n\n\n.text-small[_ngcontent-%COMP%] { font-size: 0.85rem; }\n.text-muted[_ngcontent-%COMP%] { color: #a4b0be !important; }\n.text-bold[_ngcontent-%COMP%] { font-weight: 600; }\n.text-primary[_ngcontent-%COMP%] { color: #ff4757 !important; }\n.text-monospace[_ngcontent-%COMP%] { font-family: monospace; font-size: 1.1rem; }\n.text-center[_ngcontent-%COMP%] { text-align: center; }\n.py-4[_ngcontent-%COMP%] { padding-top: 2rem; padding-bottom: 2rem; }\n.mt-4[_ngcontent-%COMP%] { margin-top: 1.5rem; }\n.mt-3[_ngcontent-%COMP%] { margin-top: 1rem; }\n.mb-4[_ngcontent-%COMP%] { margin-bottom: 1.5rem; }\n.p-4[_ngcontent-%COMP%] { padding: 1.5rem; }\n.bg-light[_ngcontent-%COMP%] { background: #f8f9fa; }\n.rounded[_ngcontent-%COMP%] { border-radius: 8px; }\n\n\n\n.badge[_ngcontent-%COMP%] { padding: 0.4rem 0.8rem; border-radius: 20px; font-size: 0.8rem; font-weight: 600; display: inline-block; }\n.badge-light[_ngcontent-%COMP%] { background: #f1f2f6; color: #2d3436; }\n.badge-success[_ngcontent-%COMP%] { background: rgba(46, 213, 115, 0.1); color: #2ed573; }\n.badge-danger[_ngcontent-%COMP%] { background: rgba(255, 71, 87, 0.1); color: #ff4757; }\n\n\n\n.status-pending[_ngcontent-%COMP%] { background: rgba(253, 203, 110, 0.2); color: #e1b12c; }\n.status-accepted[_ngcontent-%COMP%] { background: rgba(116, 185, 255, 0.2); color: #0984e3; }\n.status-preparing[_ngcontent-%COMP%] { background: rgba(162, 155, 254, 0.2); color: #6c5ce7; }\n.status-ready[_ngcontent-%COMP%] { background: rgba(0, 206, 201, 0.2); color: #00cec9; }\n.status-delivered[_ngcontent-%COMP%] { background: rgba(46, 213, 115, 0.2); color: #2ed573; }\n.status-cancelled[_ngcontent-%COMP%] { background: rgba(255, 71, 87, 0.2); color: #ff4757; }\n\n\n\n.btn[_ngcontent-%COMP%] { border: none; padding: 0.6rem 1.2rem; border-radius: 8px; cursor: pointer; font-weight: 600; display: inline-flex; align-items: center; gap: 0.5rem; transition: all 0.2s; font-family: inherit; }\n.btn-primary[_ngcontent-%COMP%] { background: #ff4757; color: white; }\n.btn-primary[_ngcontent-%COMP%]:hover { background: #e63946; }\n.btn-success[_ngcontent-%COMP%] { background: #2ed573; color: white; }\n.btn-success[_ngcontent-%COMP%]:hover { background: #26b963; }\n.btn-outline[_ngcontent-%COMP%] { background: transparent; border: 1px solid #dfe4ea; color: #2d3436; }\n.btn-outline[_ngcontent-%COMP%]:hover { background: #f1f2f6; }\n\n.status-select[_ngcontent-%COMP%] { width: 160px; font-weight: 500; }\n\n\n\n.switch[_ngcontent-%COMP%] { position: relative; display: inline-block; width: 50px; height: 26px; }\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] { opacity: 0; width: 0; height: 0; }\n.slider[_ngcontent-%COMP%] { position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: #ccc; transition: .4s; }\n.slider[_ngcontent-%COMP%]:before { position: absolute; content: \"\"; height: 18px; width: 18px; left: 4px; bottom: 4px; background-color: white; transition: .4s; }\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] { background-color: #2ed573; }\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before { transform: translateX(24px); }\n.slider.round[_ngcontent-%COMP%] { border-radius: 34px; }\n.slider.round[_ngcontent-%COMP%]:before { border-radius: 50%; }\n\n.fade-in[_ngcontent-%COMP%] { animation: _ngcontent-%COMP%_fadeIn 0.4s ease; }\n@keyframes _ngcontent-%COMP%_fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9yZXN0YXVyYW50L3Jlc3RhdXJhbnQtZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbURBQW1EO0FBQ25EO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpREFBaUQ7QUFDbkQ7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixTQUFTO0VBQ1QsT0FBTztBQUNUOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsa0NBQWtDO0VBQ2xDLGdCQUFnQjtBQUNsQjs7QUFFQSxzQkFBc0Isb0NBQW9DLEVBQUU7QUFDNUQ7RUFDRSxvQ0FBb0M7RUFDcEMsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDhDQUE4QztFQUM5QyxtQkFBbUI7QUFDckI7QUFDQSxxQkFBcUIsbUJBQW1CLEVBQUU7O0FBRTFDO0VBQ0UsT0FBTztFQUNQLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0Qix1Q0FBdUM7QUFDekM7QUFDQSxpQkFBaUIsU0FBUyxFQUFFLGNBQWMsRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBRTs7QUFFakY7RUFDRSxlQUFlO0VBQ2YsT0FBTztFQUNQLGdCQUFnQjtBQUNsQjs7QUFFQSxtQkFBbUI7QUFDbkI7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHVDQUF1QztFQUN2QyxnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtBQUNyQjtBQUNBLGtCQUFrQixTQUFTLEVBQUUsY0FBYyxFQUFFLGlCQUFpQixFQUFFOztBQUVoRTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBLFVBQVU7QUFDVjtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsV0FBVztBQUNiO0FBQ0EseUJBQXlCLG1CQUFtQixFQUFFO0FBQzlDLG9CQUFvQixjQUFjLEVBQUUscUJBQXFCLEVBQUUsY0FBYyxFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFO0FBQ2hIO0VBQ0UsV0FBVztFQUNYLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsNkJBQTZCO0VBQzdCLHNCQUFzQjtBQUN4QjtBQUNBLHNCQUFzQixxQkFBcUIsRUFBRTs7QUFFN0MsaUJBQWlCO0FBQ2pCLGdCQUFnQixhQUFhLEVBQUUsYUFBYSxFQUFFLDhCQUE4QixFQUFFLFNBQVMsRUFBRTtBQUN6RixvQkFBb0IsY0FBYyxFQUFFLGtCQUFrQixFQUFFLGdCQUFnQixFQUFFLHlCQUF5QixFQUFFLHFCQUFxQixFQUFFO0FBQzVILGdCQUFnQixrQkFBa0IsRUFBRSxjQUFjLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUU7QUFDekYsVUFBVSx5QkFBeUIsRUFBRTs7QUFFckMsV0FBVztBQUNYLG9CQUFvQixnQkFBZ0IsRUFBRTtBQUN0QyxjQUFjLFdBQVcsRUFBRSx5QkFBeUIsRUFBRTtBQUN0RCxpQ0FBaUMsa0JBQWtCLEVBQUUsZ0JBQWdCLEVBQUUsZ0NBQWdDLEVBQUU7QUFDekcsaUJBQWlCLG1CQUFtQixFQUFFLGNBQWMsRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSx5QkFBeUIsRUFBRTtBQUN0SCx1QkFBdUIsbUJBQW1CLEVBQUU7QUFDNUMsbUJBQW1CLFNBQVMsRUFBRTs7QUFFOUIsY0FBYztBQUNkLGNBQWMsa0JBQWtCLEVBQUU7QUFDbEMsY0FBYyx5QkFBeUIsRUFBRTtBQUN6QyxhQUFhLGdCQUFnQixFQUFFO0FBQy9CLGdCQUFnQix5QkFBeUIsRUFBRTtBQUMzQyxrQkFBa0Isc0JBQXNCLEVBQUUsaUJBQWlCLEVBQUU7QUFDN0QsZUFBZSxrQkFBa0IsRUFBRTtBQUNuQyxRQUFRLGlCQUFpQixFQUFFLG9CQUFvQixFQUFFO0FBQ2pELFFBQVEsa0JBQWtCLEVBQUU7QUFDNUIsUUFBUSxnQkFBZ0IsRUFBRTtBQUMxQixRQUFRLHFCQUFxQixFQUFFO0FBQy9CLE9BQU8sZUFBZSxFQUFFO0FBQ3hCLFlBQVksbUJBQW1CLEVBQUU7QUFDakMsV0FBVyxrQkFBa0IsRUFBRTs7QUFFL0IsV0FBVztBQUNYLFNBQVMsc0JBQXNCLEVBQUUsbUJBQW1CLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUUscUJBQXFCLEVBQUU7QUFDbEgsZUFBZSxtQkFBbUIsRUFBRSxjQUFjLEVBQUU7QUFDcEQsaUJBQWlCLG1DQUFtQyxFQUFFLGNBQWMsRUFBRTtBQUN0RSxnQkFBZ0Isa0NBQWtDLEVBQUUsY0FBYyxFQUFFOztBQUVwRSxrQkFBa0I7QUFDbEIsa0JBQWtCLG9DQUFvQyxFQUFFLGNBQWMsRUFBRTtBQUN4RSxtQkFBbUIsb0NBQW9DLEVBQUUsY0FBYyxFQUFFO0FBQ3pFLG9CQUFvQixvQ0FBb0MsRUFBRSxjQUFjLEVBQUU7QUFDMUUsZ0JBQWdCLGtDQUFrQyxFQUFFLGNBQWMsRUFBRTtBQUNwRSxvQkFBb0IsbUNBQW1DLEVBQUUsY0FBYyxFQUFFO0FBQ3pFLG9CQUFvQixrQ0FBa0MsRUFBRSxjQUFjLEVBQUU7O0FBRXhFLFlBQVk7QUFDWixPQUFPLFlBQVksRUFBRSxzQkFBc0IsRUFBRSxrQkFBa0IsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFO0FBQ3hNLGVBQWUsbUJBQW1CLEVBQUUsWUFBWSxFQUFFO0FBQ2xELHFCQUFxQixtQkFBbUIsRUFBRTtBQUMxQyxlQUFlLG1CQUFtQixFQUFFLFlBQVksRUFBRTtBQUNsRCxxQkFBcUIsbUJBQW1CLEVBQUU7QUFDMUMsZUFBZSx1QkFBdUIsRUFBRSx5QkFBeUIsRUFBRSxjQUFjLEVBQUU7QUFDbkYscUJBQXFCLG1CQUFtQixFQUFFOztBQUUxQyxpQkFBaUIsWUFBWSxFQUFFLGdCQUFnQixFQUFFOztBQUVqRCxrQkFBa0I7QUFDbEIsVUFBVSxrQkFBa0IsRUFBRSxxQkFBcUIsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFO0FBQ2hGLGdCQUFnQixVQUFVLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRTtBQUNqRCxVQUFVLGtCQUFrQixFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsc0JBQXNCLEVBQUUsZUFBZSxFQUFFO0FBQzlILGlCQUFpQixrQkFBa0IsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLHVCQUF1QixFQUFFLGVBQWUsRUFBRTtBQUMvSSwwQkFBMEIseUJBQXlCLEVBQUU7QUFDckQsaUNBQWlDLDJCQUEyQixFQUFFO0FBQzlELGdCQUFnQixtQkFBbUIsRUFBRTtBQUNyQyx1QkFBdUIsa0JBQWtCLEVBQUU7O0FBRTNDLFdBQVcsMkJBQTJCLEVBQUU7QUFDeEMsb0JBQW9CLE9BQU8sVUFBVSxFQUFFLDJCQUEyQixFQUFFLEVBQUUsS0FBSyxVQUFVLEVBQUUsd0JBQXdCLEVBQUUsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbIi8qIEluaGVyaXQgZ2VuZXJhbCBkYXNoYm9hcmQgc3RydWN0dXJlIGZyb20gcmlkZXIgKi9cclxuLmRhc2hib2FyZC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uc2lkZWJhciB7XHJcbiAgd2lkdGg6IDI2MHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZjQ3NTc7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnNpZGViYXItaGVhZGVyIHtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5uYXYtbGlua3Mge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLm5hdi1saW5rcyBsaSB7XHJcbiAgcGFkZGluZzogMS4ycmVtIDJyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4ubmF2LWxpbmtzIGxpOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpOyB9XHJcbi5uYXYtbGlua3MgbGkuYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubG9nb3V0LWxpbmsge1xyXG4gIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICBiYWNrZ3JvdW5kOiAjZTYzOTQ2O1xyXG59XHJcbi5sb2dvdXQtbGluazpob3ZlciB7IGJhY2tncm91bmQ6ICNkNjMwMzE7IH1cclxuXHJcbi5tYWluLWNvbnRlbnQge1xyXG4gIGZsZXg6IDE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi50b3AtaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxLjVyZW0gMi41cmVtO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLDAsMCwwLjA1KTtcclxufVxyXG4udG9wLWhlYWRlciBoMiB7IG1hcmdpbjogMDsgY29sb3I6ICMyZDM0MzY7IGZvbnQtc2l6ZTogMS41cmVtOyBmb250LXdlaWdodDogNjAwOyB9XHJcblxyXG4uY29udGVudC1ib2R5IHtcclxuICBwYWRkaW5nOiAyLjVyZW07XHJcbiAgZmxleDogMTtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4vKiBDYXJkcyAmIExheW91dCAqL1xyXG4uY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwwLDAsMC4wNSk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbn1cclxuLmNhcmQtaGVhZGVyIHtcclxuICBwYWRkaW5nOiAxLjVyZW0gMnJlbTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjJmNjtcclxuICBiYWNrZ3JvdW5kOiAjZmRmZGZkO1xyXG59XHJcbi5jYXJkLWhlYWRlciBoMyB7IG1hcmdpbjogMDsgY29sb3I6ICMyZDM0MzY7IGZvbnQtc2l6ZTogMS4ycmVtOyB9XHJcblxyXG4uZmxleC1iZXR3ZWVuIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4vKiBGb3JtcyAqL1xyXG4uZm9ybS1ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICBnYXA6IDEuNXJlbTtcclxufVxyXG4uZm9ybS1ncm91cC5mdWxsLXdpZHRoIHsgZ3JpZC1jb2x1bW46IDEgLyAtMTsgfVxyXG4uZm9ybS1ncm91cCBsYWJlbCB7IGRpc3BsYXk6IGJsb2NrOyBtYXJnaW4tYm90dG9tOiAwLjVyZW07IGNvbG9yOiAjNjM2ZTcyOyBmb250LXdlaWdodDogNTAwOyBmb250LXNpemU6IDAuOXJlbTsgfVxyXG4uZm9ybS1jb250cm9sIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwLjhyZW0gMXJlbTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGZlNGVhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjNzO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLmZvcm0tY29udHJvbDpmb2N1cyB7IGJvcmRlci1jb2xvcjogI2ZmNDc1NzsgfVxyXG5cclxuLyogUHJvZmlsZSBJbmZvICovXHJcbi5wcm9maWxlLWluZm8geyBwYWRkaW5nOiAycmVtOyBkaXNwbGF5OiBncmlkOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7IGdhcDogMnJlbTsgfVxyXG4uaW5mby1ncm91cCBsYWJlbCB7IGNvbG9yOiAjYTRiMGJlOyBmb250LXNpemU6IDAuODVyZW07IGZvbnQtd2VpZ2h0OiA2MDA7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IGxldHRlci1zcGFjaW5nOiAwLjVweDsgfVxyXG4uaW5mby1ncm91cCBwIHsgbWFyZ2luOiAwLjNyZW0gMCAwOyBjb2xvcjogIzJkMzQzNjsgZm9udC1zaXplOiAxLjFyZW07IGZvbnQtd2VpZ2h0OiA1MDA7IH1cclxuLnJhdGluZyB7IGNvbG9yOiAjZjFjNDBmICFpbXBvcnRhbnQ7IH1cclxuXHJcbi8qIFRhYmxlcyAqL1xyXG4udGFibGUtcmVzcG9uc2l2ZSB7IG92ZXJmbG93LXg6IGF1dG87IH1cclxuLmRhdGEtdGFibGUgeyB3aWR0aDogMTAwJTsgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgfVxyXG4uZGF0YS10YWJsZSB0aCwgLmRhdGEtdGFibGUgdGQgeyBwYWRkaW5nOiAxcmVtIDJyZW07IHRleHQtYWxpZ246IGxlZnQ7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmMmY2OyB9XHJcbi5kYXRhLXRhYmxlIHRoIHsgYmFja2dyb3VuZDogI2ZkZmRmZDsgY29sb3I6ICM2MzZlNzI7IGZvbnQtd2VpZ2h0OiA2MDA7IGZvbnQtc2l6ZTogMC45cmVtOyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XHJcbi5kYXRhLXRhYmxlIHRyOmhvdmVyIHsgYmFja2dyb3VuZDogI2ZhZmFmYTsgfVxyXG4uZGF0YS10YWJsZSB0ZCBwIHsgbWFyZ2luOiAwOyB9XHJcblxyXG4vKiBVdGlsaXRpZXMgKi9cclxuLnRleHQtc21hbGwgeyBmb250LXNpemU6IDAuODVyZW07IH1cclxuLnRleHQtbXV0ZWQgeyBjb2xvcjogI2E0YjBiZSAhaW1wb3J0YW50OyB9XHJcbi50ZXh0LWJvbGQgeyBmb250LXdlaWdodDogNjAwOyB9XHJcbi50ZXh0LXByaW1hcnkgeyBjb2xvcjogI2ZmNDc1NyAhaW1wb3J0YW50OyB9XHJcbi50ZXh0LW1vbm9zcGFjZSB7IGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7IGZvbnQtc2l6ZTogMS4xcmVtOyB9XHJcbi50ZXh0LWNlbnRlciB7IHRleHQtYWxpZ246IGNlbnRlcjsgfVxyXG4ucHktNCB7IHBhZGRpbmctdG9wOiAycmVtOyBwYWRkaW5nLWJvdHRvbTogMnJlbTsgfVxyXG4ubXQtNCB7IG1hcmdpbi10b3A6IDEuNXJlbTsgfVxyXG4ubXQtMyB7IG1hcmdpbi10b3A6IDFyZW07IH1cclxuLm1iLTQgeyBtYXJnaW4tYm90dG9tOiAxLjVyZW07IH1cclxuLnAtNCB7IHBhZGRpbmc6IDEuNXJlbTsgfVxyXG4uYmctbGlnaHQgeyBiYWNrZ3JvdW5kOiAjZjhmOWZhOyB9XHJcbi5yb3VuZGVkIHsgYm9yZGVyLXJhZGl1czogOHB4OyB9XHJcblxyXG4vKiBCYWRnZXMgKi9cclxuLmJhZGdlIHsgcGFkZGluZzogMC40cmVtIDAuOHJlbTsgYm9yZGVyLXJhZGl1czogMjBweDsgZm9udC1zaXplOiAwLjhyZW07IGZvbnQtd2VpZ2h0OiA2MDA7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxyXG4uYmFkZ2UtbGlnaHQgeyBiYWNrZ3JvdW5kOiAjZjFmMmY2OyBjb2xvcjogIzJkMzQzNjsgfVxyXG4uYmFkZ2Utc3VjY2VzcyB7IGJhY2tncm91bmQ6IHJnYmEoNDYsIDIxMywgMTE1LCAwLjEpOyBjb2xvcjogIzJlZDU3MzsgfVxyXG4uYmFkZ2UtZGFuZ2VyIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsIDcxLCA4NywgMC4xKTsgY29sb3I6ICNmZjQ3NTc7IH1cclxuXHJcbi8qIFN0YXR1cyBDb2xvcnMgKi9cclxuLnN0YXR1cy1wZW5kaW5nIHsgYmFja2dyb3VuZDogcmdiYSgyNTMsIDIwMywgMTEwLCAwLjIpOyBjb2xvcjogI2UxYjEyYzsgfVxyXG4uc3RhdHVzLWFjY2VwdGVkIHsgYmFja2dyb3VuZDogcmdiYSgxMTYsIDE4NSwgMjU1LCAwLjIpOyBjb2xvcjogIzA5ODRlMzsgfVxyXG4uc3RhdHVzLXByZXBhcmluZyB7IGJhY2tncm91bmQ6IHJnYmEoMTYyLCAxNTUsIDI1NCwgMC4yKTsgY29sb3I6ICM2YzVjZTc7IH1cclxuLnN0YXR1cy1yZWFkeSB7IGJhY2tncm91bmQ6IHJnYmEoMCwgMjA2LCAyMDEsIDAuMik7IGNvbG9yOiAjMDBjZWM5OyB9XHJcbi5zdGF0dXMtZGVsaXZlcmVkIHsgYmFja2dyb3VuZDogcmdiYSg0NiwgMjEzLCAxMTUsIDAuMik7IGNvbG9yOiAjMmVkNTczOyB9XHJcbi5zdGF0dXMtY2FuY2VsbGVkIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsIDcxLCA4NywgMC4yKTsgY29sb3I6ICNmZjQ3NTc7IH1cclxuXHJcbi8qIEJ1dHRvbnMgKi9cclxuLmJ0biB7IGJvcmRlcjogbm9uZTsgcGFkZGluZzogMC42cmVtIDEuMnJlbTsgYm9yZGVyLXJhZGl1czogOHB4OyBjdXJzb3I6IHBvaW50ZXI7IGZvbnQtd2VpZ2h0OiA2MDA7IGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDAuNXJlbTsgdHJhbnNpdGlvbjogYWxsIDAuMnM7IGZvbnQtZmFtaWx5OiBpbmhlcml0OyB9XHJcbi5idG4tcHJpbWFyeSB7IGJhY2tncm91bmQ6ICNmZjQ3NTc7IGNvbG9yOiB3aGl0ZTsgfVxyXG4uYnRuLXByaW1hcnk6aG92ZXIgeyBiYWNrZ3JvdW5kOiAjZTYzOTQ2OyB9XHJcbi5idG4tc3VjY2VzcyB7IGJhY2tncm91bmQ6ICMyZWQ1NzM7IGNvbG9yOiB3aGl0ZTsgfVxyXG4uYnRuLXN1Y2Nlc3M6aG92ZXIgeyBiYWNrZ3JvdW5kOiAjMjZiOTYzOyB9XHJcbi5idG4tb3V0bGluZSB7IGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyBib3JkZXI6IDFweCBzb2xpZCAjZGZlNGVhOyBjb2xvcjogIzJkMzQzNjsgfVxyXG4uYnRuLW91dGxpbmU6aG92ZXIgeyBiYWNrZ3JvdW5kOiAjZjFmMmY2OyB9XHJcblxyXG4uc3RhdHVzLXNlbGVjdCB7IHdpZHRoOiAxNjBweDsgZm9udC13ZWlnaHQ6IDUwMDsgfVxyXG5cclxuLyogVG9nZ2xlIFN3aXRjaCAqL1xyXG4uc3dpdGNoIHsgcG9zaXRpb246IHJlbGF0aXZlOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHdpZHRoOiA1MHB4OyBoZWlnaHQ6IDI2cHg7IH1cclxuLnN3aXRjaCBpbnB1dCB7IG9wYWNpdHk6IDA7IHdpZHRoOiAwOyBoZWlnaHQ6IDA7IH1cclxuLnNsaWRlciB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgY3Vyc29yOiBwb2ludGVyOyB0b3A6IDA7IGxlZnQ6IDA7IHJpZ2h0OiAwOyBib3R0b206IDA7IGJhY2tncm91bmQtY29sb3I6ICNjY2M7IHRyYW5zaXRpb246IC40czsgfVxyXG4uc2xpZGVyOmJlZm9yZSB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgY29udGVudDogXCJcIjsgaGVpZ2h0OiAxOHB4OyB3aWR0aDogMThweDsgbGVmdDogNHB4OyBib3R0b206IDRweDsgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IHRyYW5zaXRpb246IC40czsgfVxyXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7IGJhY2tncm91bmQtY29sb3I6ICMyZWQ1NzM7IH1cclxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI0cHgpOyB9XHJcbi5zbGlkZXIucm91bmQgeyBib3JkZXItcmFkaXVzOiAzNHB4OyB9XHJcbi5zbGlkZXIucm91bmQ6YmVmb3JlIHsgYm9yZGVyLXJhZGl1czogNTAlOyB9XHJcblxyXG4uZmFkZS1pbiB7IGFuaW1hdGlvbjogZmFkZUluIDAuNHMgZWFzZTsgfVxyXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7IH0gdG8geyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH0gfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 8768:
/*!***************************************************************!*\
  !*** ./src/app/components/rider/rider-dashboard.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RiderDashboardComponent: () => (/* binding */ RiderDashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_rider_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/rider.service */ 4750);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ 4796);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);






function RiderDashboardComponent_div_29_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "No new orders available to pick up.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function RiderDashboardComponent_div_29_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22)(1, "div", 23)(2, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Ready for pickup");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 26)(7, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div")(10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Restaurant:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div")(19, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Delivery To:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 31)(24, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RiderDashboardComponent_div_29_div_3_Template_button_click_26_listener() {
      const order_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.acceptOrder(order_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Accept Delivery");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const order_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("#", order_r2._id.slice(-6).toUpperCase(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](order_r2.restaurantId == null ? null : order_r2.restaurantId.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](order_r2.restaurantId == null ? null : order_r2.restaurantId.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](order_r2.deliveryAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Rs. ", order_r2.totalAmount, "");
  }
}
function RiderDashboardComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RiderDashboardComponent_div_29_div_1_Template, 4, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, RiderDashboardComponent_div_29_div_3_Template, 28, 5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.availableOrders.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.availableOrders);
  }
}
function RiderDashboardComponent_div_30_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "You have no active deliveries.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function RiderDashboardComponent_div_30_div_3_button_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RiderDashboardComponent_div_30_div_3_button_30_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const order_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.updateOrderStatus(order_r5, "picked_up"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Mark Picked Up ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RiderDashboardComponent_div_30_div_3_button_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RiderDashboardComponent_div_30_div_3_button_31_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const order_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.updateOrderStatus(order_r5, "delivered"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Mark Delivered ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RiderDashboardComponent_div_30_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35)(1, "div", 23)(2, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 26)(8, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div")(11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Pickup From:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div")(20, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Deliver To:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, RiderDashboardComponent_div_30_div_3_button_30_Template, 3, 0, "button", 40)(31, RiderDashboardComponent_div_30_div_3_button_31_Template, 3, 0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const order_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("#", order_r5._id.slice(-6).toUpperCase(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", "status-" + order_r5.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 10, order_r5.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](order_r5.restaurantId == null ? null : order_r5.restaurantId.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](order_r5.restaurantId == null ? null : order_r5.restaurantId.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((order_r5.customerId == null ? null : order_r5.customerId.name) || "Customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](order_r5.deliveryAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", order_r5.phone, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", order_r5.status === "ready");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", order_r5.status === "picked_up");
  }
}
function RiderDashboardComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RiderDashboardComponent_div_30_div_1_Template, 4, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, RiderDashboardComponent_div_30_div_3_Template, 32, 12, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.myDeliveries.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.myDeliveries);
  }
}
class RiderDashboardComponent {
  constructor(riderService, authService, router) {
    this.riderService = riderService;
    this.authService = authService;
    this.router = router;
    this.availableOrders = [];
    this.myDeliveries = [];
    this.activeTab = 'available';
  }
  ngOnInit() {
    this.loadAvailableOrders();
    this.loadMyDeliveries();
  }
  loadAvailableOrders() {
    this.riderService.getAvailableOrders().subscribe(data => {
      this.availableOrders = data;
    }, error => console.error('Error loading available orders', error));
  }
  loadMyDeliveries() {
    this.riderService.getMyDeliveries().subscribe(data => {
      this.myDeliveries = data;
    }, error => console.error('Error loading my deliveries', error));
  }
  acceptOrder(order) {
    this.riderService.acceptOrder(order._id).subscribe(response => {
      alert('Order accepted! It has been moved to your deliveries.');
      this.loadAvailableOrders();
      this.loadMyDeliveries();
    }, error => alert('Error accepting order: ' + error.error.error));
  }
  updateOrderStatus(order, status) {
    this.riderService.updateOrderStatus(order._id, status).subscribe(response => {
      alert(`Order marked as ${status}!`);
      this.loadMyDeliveries();
    }, error => alert('Error updating order: ' + error.error.error));
  }
  setActiveTab(tab) {
    this.activeTab = tab;
    if (tab === 'available') this.loadAvailableOrders();
    if (tab === 'my-deliveries') this.loadMyDeliveries();
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  static {
    this.ɵfac = function RiderDashboardComponent_Factory(t) {
      return new (t || RiderDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_rider_service__WEBPACK_IMPORTED_MODULE_0__.RiderService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: RiderDashboardComponent,
      selectors: [["app-rider-dashboard"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 31,
      vars: 7,
      consts: [[1, "dashboard-container"], [1, "sidebar"], [1, "sidebar-header"], [1, "logo"], [1, "fas", "fa-motorcycle"], [1, "nav-links"], ["routerLink", "/profile"], [1, "fas", "fa-user"], [3, "click"], [1, "fas", "fa-list-ul"], [1, "fas", "fa-box-open"], [1, "logout-link", 3, "click"], [1, "fas", "fa-sign-out-alt"], [1, "main-content"], [1, "top-header"], [1, "content-body"], [4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "orders-grid"], ["class", "order-card", 4, "ngFor", "ngForOf"], [1, "empty-state"], [1, "fas", "fa-check-circle"], [1, "order-card"], [1, "order-header"], [1, "order-id"], [1, "badge", "status-ready"], [1, "order-details"], [1, "detail-row"], [1, "fas", "fa-store"], [1, "address"], [1, "fas", "fa-map-marker-alt"], [1, "order-footer"], [1, "price"], [1, "btn", "btn-primary", 3, "click"], ["class", "order-card active-delivery", 4, "ngFor", "ngForOf"], [1, "order-card", "active-delivery"], [1, "badge", 3, "ngClass"], [1, "phone"], [1, "fas", "fa-phone"], [1, "order-actions"], ["class", "btn btn-warning", 3, "click", 4, "ngIf"], ["class", "btn btn-success", 3, "click", 4, "ngIf"], [1, "btn", "btn-warning", 3, "click"], [1, "fas", "fa-box"], [1, "btn", "btn-success", 3, "click"], [1, "fas", "fa-check"]],
      template: function RiderDashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "aside", 1)(2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Rider Portal");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ul", 5)(8, "li", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "My Profile");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "li", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RiderDashboardComponent_Template_li_click_12_listener() {
            return ctx.setActiveTab("available");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Available Orders");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "li", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RiderDashboardComponent_Template_li_click_16_listener() {
            return ctx.setActiveTab("my-deliveries");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "My Deliveries");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "li", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RiderDashboardComponent_Template_li_click_20_listener() {
            return ctx.logout();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Logout");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "main", 13)(25, "header", 14)(26, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, RiderDashboardComponent_div_29_Template, 4, 2, "div", 16)(30, RiderDashboardComponent_div_30_Template, 4, 2, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.activeTab === "available");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.activeTab === "my-deliveries");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.activeTab === "available" ? "Available Orders" : "My Deliveries");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.activeTab === "available");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.activeTab === "my-deliveries");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.TitleCasePipe],
      styles: [".dashboard-container[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  background-color: #f4f7f6;\n  font-family: 'Poppins', sans-serif;\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  width: 250px;\n  background: #2d3436;\n  color: white;\n  display: flex;\n  flex-direction: column;\n}\n\n.sidebar-header[_ngcontent-%COMP%] {\n  padding: 2rem;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n\n.logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #00cec9;\n}\n\n.nav-links[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  flex: 1;\n}\n\n.nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 1.2rem 2rem;\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  cursor: pointer;\n  transition: all 0.3s;\n  border-left: 4px solid transparent;\n}\n\n.nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.05);\n}\n\n.nav-links[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  background: rgba(0, 206, 201, 0.1);\n  border-left-color: #00cec9;\n  color: #00cec9;\n}\n\n.logout-link[_ngcontent-%COMP%] {\n  margin-top: auto;\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n  color: #ff4757;\n}\n\n.logout-link[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 71, 87, 0.1);\n}\n\n.main-content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n\n.top-header[_ngcontent-%COMP%] {\n  background: white;\n  padding: 1.5rem 2rem;\n  box-shadow: 0 2px 10px rgba(0,0,0,0.05);\n}\n\n.top-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #2d3436;\n  font-size: 1.5rem;\n}\n\n.content-body[_ngcontent-%COMP%] {\n  padding: 2rem;\n  flex: 1;\n  overflow-y: auto;\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 4rem;\n  color: #636e72;\n}\n\n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  margin-bottom: 1rem;\n  color: #b2bec3;\n}\n\n.orders-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n  gap: 1.5rem;\n}\n\n.order-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 1.5rem;\n  box-shadow: 0 4px 15px rgba(0,0,0,0.05);\n  border-top: 4px solid #00cec9;\n}\n\n.order-card.active-delivery[_ngcontent-%COMP%] {\n  border-top-color: #fdcb6e;\n}\n\n.order-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #f1f2f6;\n}\n\n.order-id[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-weight: 700;\n  font-size: 1.1rem;\n  color: #2d3436;\n}\n\n.badge[_ngcontent-%COMP%] {\n  padding: 0.3rem 0.8rem;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: white;\n}\n\n.status-ready[_ngcontent-%COMP%] { background: #00cec9; }\n.status-picked_up[_ngcontent-%COMP%] { background: #fdcb6e; color: #2d3436; }\n.status-delivered[_ngcontent-%COMP%] { background: #00b894; }\n\n.order-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n\n.detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  align-items: flex-start;\n}\n\n.detail-row[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #b2bec3;\n  margin-top: 4px;\n}\n\n.detail-row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #2d3436;\n}\n\n.detail-row[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #636e72;\n  margin-top: 4px;\n}\n\n.detail-row[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  color: #0984e3;\n  font-weight: 500;\n}\n\n.order-footer[_ngcontent-%COMP%], .order-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 1rem;\n  border-top: 1px solid #f1f2f6;\n}\n\n.price[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #2d3436;\n}\n\n.btn[_ngcontent-%COMP%] {\n  border: none;\n  padding: 0.6rem 1.2rem;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  transition: all 0.2s;\n}\n\n.btn-primary[_ngcontent-%COMP%] { background: #00cec9; color: white; }\n.btn-primary[_ngcontent-%COMP%]:hover { background: #01b4af; }\n.btn-warning[_ngcontent-%COMP%] { background: #fdcb6e; color: #2d3436; width: 100%; justify-content: center; }\n.btn-warning[_ngcontent-%COMP%]:hover { background: #e0b35f; }\n.btn-success[_ngcontent-%COMP%] { background: #00b894; color: white; width: 100%; justify-content: center; }\n.btn-success[_ngcontent-%COMP%]:hover { background: #019e7e; }\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9yaWRlci9yaWRlci1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaURBQWlEO0FBQ25EOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixTQUFTO0VBQ1QsT0FBTztBQUNUOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLDBCQUEwQjtFQUMxQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDhDQUE4QztFQUM5QyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsT0FBTztFQUNQLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLFNBQVM7RUFDVCxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLE9BQU87RUFDUCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNERBQTREO0VBQzVELFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHVDQUF1QztFQUN2Qyw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBLGdCQUFnQixtQkFBbUIsRUFBRTtBQUNyQyxvQkFBb0IsbUJBQW1CLEVBQUUsY0FBYyxFQUFFO0FBQ3pELG9CQUFvQixtQkFBbUIsRUFBRTs7QUFFekM7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsU0FBUztFQUNULGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLG9CQUFvQjtBQUN0Qjs7QUFFQSxlQUFlLG1CQUFtQixFQUFFLFlBQVksRUFBRTtBQUNsRCxxQkFBcUIsbUJBQW1CLEVBQUU7QUFDMUMsZUFBZSxtQkFBbUIsRUFBRSxjQUFjLEVBQUUsV0FBVyxFQUFFLHVCQUF1QixFQUFFO0FBQzFGLHFCQUFxQixtQkFBbUIsRUFBRTtBQUMxQyxlQUFlLG1CQUFtQixFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsdUJBQXVCLEVBQUU7QUFDeEYscUJBQXFCLG1CQUFtQixFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiLmRhc2hib2FyZC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjdmNjtcclxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uc2lkZWJhciB7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIGJhY2tncm91bmQ6ICMyZDM0MzY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnNpZGViYXItaGVhZGVyIHtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6ICMwMGNlYzk7XHJcbn1cclxuXHJcbi5uYXYtbGlua3Mge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLm5hdi1saW5rcyBsaSB7XHJcbiAgcGFkZGluZzogMS4ycmVtIDJyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLm5hdi1saW5rcyBsaTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcclxufVxyXG5cclxuLm5hdi1saW5rcyBsaS5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMjA2LCAyMDEsIDAuMSk7XHJcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICMwMGNlYzk7XHJcbiAgY29sb3I6ICMwMGNlYzk7XHJcbn1cclxuXHJcbi5sb2dvdXQtbGluayB7XHJcbiAgbWFyZ2luLXRvcDogYXV0bztcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4gIGNvbG9yOiAjZmY0NzU3O1xyXG59XHJcblxyXG4ubG9nb3V0LWxpbms6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCA3MSwgODcsIDAuMSk7XHJcbn1cclxuXHJcbi5tYWluLWNvbnRlbnQge1xyXG4gIGZsZXg6IDE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4udG9wLWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgcGFkZGluZzogMS41cmVtIDJyZW07XHJcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsMCwwLDAuMDUpO1xyXG59XHJcblxyXG4udG9wLWhlYWRlciBoMiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGNvbG9yOiAjMmQzNDM2O1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG4uY29udGVudC1ib2R5IHtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIGZsZXg6IDE7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLmVtcHR5LXN0YXRlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNHJlbTtcclxuICBjb2xvcjogIzYzNmU3MjtcclxufVxyXG5cclxuLmVtcHR5LXN0YXRlIGkge1xyXG4gIGZvbnQtc2l6ZTogNHJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIGNvbG9yOiAjYjJiZWMzO1xyXG59XHJcblxyXG4ub3JkZXJzLWdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzUwcHgsIDFmcikpO1xyXG4gIGdhcDogMS41cmVtO1xyXG59XHJcblxyXG4ub3JkZXItY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTVweCByZ2JhKDAsMCwwLDAuMDUpO1xyXG4gIGJvcmRlci10b3A6IDRweCBzb2xpZCAjMDBjZWM5O1xyXG59XHJcblxyXG4ub3JkZXItY2FyZC5hY3RpdmUtZGVsaXZlcnkge1xyXG4gIGJvcmRlci10b3AtY29sb3I6ICNmZGNiNmU7XHJcbn1cclxuXHJcbi5vcmRlci1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjJmNjtcclxufVxyXG5cclxuLm9yZGVyLWlkIHtcclxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgY29sb3I6ICMyZDM0MzY7XHJcbn1cclxuXHJcbi5iYWRnZSB7XHJcbiAgcGFkZGluZzogMC4zcmVtIDAuOHJlbTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uc3RhdHVzLXJlYWR5IHsgYmFja2dyb3VuZDogIzAwY2VjOTsgfVxyXG4uc3RhdHVzLXBpY2tlZF91cCB7IGJhY2tncm91bmQ6ICNmZGNiNmU7IGNvbG9yOiAjMmQzNDM2OyB9XHJcbi5zdGF0dXMtZGVsaXZlcmVkIHsgYmFja2dyb3VuZDogIzAwYjg5NDsgfVxyXG5cclxuLm9yZGVyLWRldGFpbHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDFyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG59XHJcblxyXG4uZGV0YWlsLXJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDFyZW07XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi5kZXRhaWwtcm93IGkge1xyXG4gIGNvbG9yOiAjYjJiZWMzO1xyXG4gIG1hcmdpbi10b3A6IDRweDtcclxufVxyXG5cclxuLmRldGFpbC1yb3cgcCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGNvbG9yOiAjMmQzNDM2O1xyXG59XHJcblxyXG4uZGV0YWlsLXJvdyAuYWRkcmVzcyB7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgY29sb3I6ICM2MzZlNzI7XHJcbiAgbWFyZ2luLXRvcDogNHB4O1xyXG59XHJcblxyXG4uZGV0YWlsLXJvdyAucGhvbmUge1xyXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICBjb2xvcjogIzA5ODRlMztcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4ub3JkZXItZm9vdGVyLCAub3JkZXItYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2YxZjJmNjtcclxufVxyXG5cclxuLnByaWNlIHtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAjMmQzNDM2O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogMC42cmVtIDEuMnJlbTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC41cmVtO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnkgeyBiYWNrZ3JvdW5kOiAjMDBjZWM5OyBjb2xvcjogd2hpdGU7IH1cclxuLmJ0bi1wcmltYXJ5OmhvdmVyIHsgYmFja2dyb3VuZDogIzAxYjRhZjsgfVxyXG4uYnRuLXdhcm5pbmcgeyBiYWNrZ3JvdW5kOiAjZmRjYjZlOyBjb2xvcjogIzJkMzQzNjsgd2lkdGg6IDEwMCU7IGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XHJcbi5idG4td2FybmluZzpob3ZlciB7IGJhY2tncm91bmQ6ICNlMGIzNWY7IH1cclxuLmJ0bi1zdWNjZXNzIHsgYmFja2dyb3VuZDogIzAwYjg5NDsgY29sb3I6IHdoaXRlOyB3aWR0aDogMTAwJTsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cclxuLmJ0bi1zdWNjZXNzOmhvdmVyIHsgYmFja2dyb3VuZDogIzAxOWU3ZTsgfVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 1620:
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthGuard: () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 4796);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);



class AuthGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate(route) {
    const currentUser = this.authService.currentUserValue;
    if (!currentUser) {
      this.router.navigate(['/login']);
      return false;
    }
    const allowedRoles = route.data?.['roles'];
    if (allowedRoles && allowedRoles.length > 0 && !allowedRoles.includes(currentUser.role)) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
  static {
    this.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 472:
/*!**************************************************!*\
  !*** ./src/app/interceptors/auth.interceptor.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthInterceptor: () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class AuthInterceptor {
  intercept(req, next) {
    // Get the token from localStorage
    const token = localStorage.getItem('token');
    // Clone the request and add the authorization header if token exists
    if (token) {
      const authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      return next.handle(authReq);
    }
    // If no token, proceed with the original request
    return next.handle(req);
  }
  static {
    this.ɵfac = function AuthInterceptor_Factory(t) {
      return new (t || AuthInterceptor)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthInterceptor,
      factory: AuthInterceptor.ɵfac
    });
  }
}

/***/ }),

/***/ 7945:
/*!*******************************************!*\
  !*** ./src/app/services/admin.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminService: () => (/* binding */ AdminService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);



class AdminService {
  constructor(http) {
    this.http = http;
    this.apiUrl = 'http://localhost:5000/api/admin';
  }
  getHeaders() {
    const token = localStorage.getItem('token');
    return new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }
  getAllUsers() {
    return this.http.get(`${this.apiUrl}/users`, {
      headers: this.getHeaders()
    });
  }
  getAllRestaurants() {
    return this.http.get(`${this.apiUrl}/restaurants`, {
      headers: this.getHeaders()
    });
  }
  updateRestaurantStatus(restaurantId, isActive) {
    return this.http.put(`${this.apiUrl}/restaurant/${restaurantId}/status`, {
      isActive
    }, {
      headers: this.getHeaders()
    });
  }
  getAllOrders() {
    return this.http.get(`${this.apiUrl}/orders`, {
      headers: this.getHeaders()
    });
  }
  getDashboardStats() {
    return this.http.get(`${this.apiUrl}/stats`, {
      headers: this.getHeaders()
    });
  }
  static {
    this.ɵfac = function AdminService_Factory(t) {
      return new (t || AdminService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AdminService,
      factory: AdminService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 4796:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 8764);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 6443);




class AuthService {
  constructor(http) {
    this.http = http;
    this.apiUrl = 'http://localhost:5000/api/auth';
    this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(JSON.parse(localStorage.getItem('currentUser') || 'null'));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  get currentUserValue() {
    return this.currentUserSubject.value;
  }
  register(name, email, password, role) {
    return this.http.post(`${this.apiUrl}/register`, {
      name,
      email,
      password,
      role
    });
  }
  login(email, password) {
    return this.http.post(`${this.apiUrl}/login`, {
      email,
      password
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(response => {
      if (response && response.token && response.user) {
        const authUser = {
          ...response.user,
          token: response.token
        };
        localStorage.setItem('currentUser', JSON.stringify(authUser));
        localStorage.setItem('token', response.token);
        this.currentUserSubject.next(authUser);
      }
    }));
  }
  getToken() {
    return localStorage.getItem('token');
  }
  me() {
    return this.http.get(`${this.apiUrl}/me`);
  }
  updateProfile(profileData) {
    return this.http.put(`${this.apiUrl}/profile`, profileData);
  }
  changePassword(data) {
    return this.http.put(`${this.apiUrl}/password`, data);
  }
  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    this.currentUserSubject.next(null);
  }
  static {
    this.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 8898:
/*!**********************************************!*\
  !*** ./src/app/services/customer.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerService: () => (/* binding */ CustomerService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);



class CustomerService {
  constructor(http) {
    this.http = http;
    this.apiUrl = 'http://localhost:5000/api/customer';
  }
  getHeaders() {
    const token = localStorage.getItem('token');
    return new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }
  getRestaurants() {
    return this.http.get(`${this.apiUrl}/restaurants`);
  }
  getRestaurantMenu(restaurantId) {
    return this.http.get(`${this.apiUrl}/restaurant/${restaurantId}/menu`);
  }
  getRandomMenuItems() {
    return this.http.get(`${this.apiUrl}/menu-items/random`);
  }
  placeOrder(order) {
    return this.http.post(`${this.apiUrl}/order`, order, {
      headers: this.getHeaders()
    });
  }
  getOrders() {
    return this.http.get(`${this.apiUrl}/orders`, {
      headers: this.getHeaders()
    });
  }
  getOrderDetails(orderId) {
    return this.http.get(`${this.apiUrl}/order/${orderId}`, {
      headers: this.getHeaders()
    });
  }
  static {
    this.ɵfac = function CustomerService_Factory(t) {
      return new (t || CustomerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: CustomerService,
      factory: CustomerService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 793:
/*!************************************************!*\
  !*** ./src/app/services/restaurant.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RestaurantService: () => (/* binding */ RestaurantService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);



class RestaurantService {
  constructor(http) {
    this.http = http;
    this.apiUrl = 'http://localhost:5000/api/restaurant';
  }
  getHeaders() {
    const token = localStorage.getItem('token');
    return new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }
  getProfile() {
    return this.http.get(`${this.apiUrl}/profile`, {
      headers: this.getHeaders()
    });
  }
  updateProfile(profile) {
    return this.http.post(`${this.apiUrl}/profile`, profile, {
      headers: this.getHeaders()
    });
  }
  addMenuItem(item) {
    return this.http.post(`${this.apiUrl}/menu`, item, {
      headers: this.getHeaders()
    });
  }
  getMenu() {
    return this.http.get(`${this.apiUrl}/menu`, {
      headers: this.getHeaders()
    });
  }
  updateMenuItem(itemId, item) {
    return this.http.put(`${this.apiUrl}/menu/${itemId}`, item, {
      headers: this.getHeaders()
    });
  }
  getOrders() {
    return this.http.get(`${this.apiUrl}/orders`, {
      headers: this.getHeaders()
    });
  }
  updateOrderStatus(orderId, status) {
    return this.http.put(`${this.apiUrl}/order/${orderId}/status`, {
      status
    }, {
      headers: this.getHeaders()
    });
  }
  static {
    this.ɵfac = function RestaurantService_Factory(t) {
      return new (t || RestaurantService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: RestaurantService,
      factory: RestaurantService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 4750:
/*!*******************************************!*\
  !*** ./src/app/services/rider.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RiderService: () => (/* binding */ RiderService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);



class RiderService {
  constructor(http) {
    this.http = http;
    this.apiUrl = 'http://localhost:5000/api/rider';
  }
  getHeaders() {
    const token = localStorage.getItem('token');
    return new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }
  getAvailableOrders() {
    return this.http.get(`${this.apiUrl}/orders/available`, {
      headers: this.getHeaders()
    });
  }
  getMyDeliveries() {
    return this.http.get(`${this.apiUrl}/orders/my-deliveries`, {
      headers: this.getHeaders()
    });
  }
  acceptOrder(orderId) {
    return this.http.put(`${this.apiUrl}/order/${orderId}/accept`, {}, {
      headers: this.getHeaders()
    });
  }
  updateOrderStatus(orderId, status) {
    return this.http.put(`${this.apiUrl}/order/${orderId}/status`, {
      status
    }, {
      headers: this.getHeaders()
    });
  }
  static {
    this.ɵfac = function RiderService_Factory(t) {
      return new (t || RiderService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: RiderService,
      factory: RiderService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.component */ 92);
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app-routing.module */ 4114);
/* harmony import */ var _app_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/interceptors/auth.interceptor */ 472);







(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, {
  providers: [(0,_angular_router__WEBPACK_IMPORTED_MODULE_4__.provideRouter)(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_1__.routes), (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.withInterceptorsFromDi)()), {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HTTP_INTERCEPTORS,
    useClass: _app_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_2__.AuthInterceptor,
    multi: true
  }]
}).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map