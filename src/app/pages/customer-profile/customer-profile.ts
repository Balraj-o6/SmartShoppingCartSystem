import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Customer } from '../../models/customer';

@Component({
  selector: 'app-customer-profile',
  standalone: true,

  imports: [FormsModule, CommonModule],

  templateUrl: './customer-profile.html',
  styleUrl: './customer-profile.css'
})
export class CustomerProfile {

  defaultProfileImage =
    'https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=';

  showEmailAsText = false;

  isEditMode = false;

  isProfileComplete = true;

  originalCustomer!: Customer;

  categories = [
    'Electronics',
    'Accessories',
    'Audio',
    'Computers'
  ];

  customer: Customer = {

    id: 1,

    firstName: 'John',

    lastName: 'Doe',

    email: 'john@example.com',

    phone: '9999999999',

    address: 'New Delhi',

    membershipLevel: 'Premium',

    loyaltyPoints: 1250,

    totalOrders: 15,

    joinDate: new Date(),

    profileImageUrl: '',

    isActive: true,

    subscribeNewsletter: true,

    preferredCategory: 'Electronics'
  };

  isFormValid(): boolean {

    return (
      this.customer.firstName.length > 0 &&
      this.customer.lastName.length > 0 &&
      this.customer.email.includes('@')
    );
  }

  getMembershipColor(): string {

    switch (this.customer.membershipLevel) {

      case 'Premium':
        return 'gold';

      case 'Gold':
        return 'orange';

      case 'Silver':
        return 'silver';

      default:
        return '#CD7F32';
    }
  }

  toggleEditMode() {

    this.isEditMode = !this.isEditMode;

    this.originalCustomer =
      JSON.parse(JSON.stringify(this.customer));
  }

  saveProfile() {

    this.isEditMode = false;

    alert('Profile Saved');
  }

  cancelEdit() {

    this.customer =
      JSON.parse(JSON.stringify(this.originalCustomer));

    this.isEditMode = false;
  }

  onPhotoUpload(event: any) {

    const file = event.target.files[0];

    if (file) {

      this.customer.profileImageUrl =
        URL.createObjectURL(file);
    }
  }

  validateField(event: Event) {
    console.log('Field validated');
  }

  updateNewsletterPreference(event: Event) {
    console.log('Newsletter updated');
  }
}