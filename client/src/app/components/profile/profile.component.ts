import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any = null;
  isLoading = false;
  isEditing = false;
  showPasswordChange = false;

  profileData = {
    name: '',
    address: '',
    phone: ''
  };

  passwordData = {
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  };

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadProfile();
  }

  loadProfile() {
    this.isLoading = true;
    this.authService.me().subscribe({
      next: (user: any) => {
        this.user = user;
        this.profileData = {
          name: user.name || '',
          address: user.address || '',
          phone: user.phone || ''
        };
        this.isLoading = false;
      },
      error: (err: any) => {
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
      next: (updatedUser: any) => {
        this.user = updatedUser;
        this.isEditing = false;
        this.isLoading = false;
        alert('Profile updated successfully!');
      },
      error: (err: any) => {
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
      next: (response: any) => {
        this.isLoading = false;
        this.showPasswordChange = false;
        this.passwordData = {
          currentPassword: '',
          newPassword: '',
          confirmPassword: ''
        };
        alert('Password changed successfully!');
      },
      error: (err: any) => {
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
}