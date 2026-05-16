import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const allowedRoles = route.data?.['roles'] as string[] | undefined;
    
    // If no specific roles required, allow access (e.g. Guest browsing)
    if (!allowedRoles || allowedRoles.length === 0) {
      return true;
    }

    // Check if user is logged in as ANY of the allowed roles for this portal
    const hasAccess = allowedRoles.some(role => !!this.authService.getUserRoleValue(role));

    if (hasAccess) {
      return true;
    }

    // Not logged in for the required role: Redirect to that role's login page
    const primaryRole = allowedRoles[0];
    this.router.navigate([`/login/${primaryRole}`]);
    return false;
  }
}
