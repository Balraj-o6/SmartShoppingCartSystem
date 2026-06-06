import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart';
import { OrderService } from '../../services/order';
import { ShippingInfo } from '../../models/order';
import { CanComponentDeactivate } from '../../models/can-deactivate';

@Component({
  selector: 'app-checkout-component',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css'
})
export class CheckoutComponent implements OnInit, CanComponentDeactivate {

  cartItems: any[] = [];

  subtotal = 0;
  tax = 0;
  total = 0;

  paymentMethod = 'Credit Card';

  orderNotes = '';

  shippingInfo: ShippingInfo = {

    fullName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    phone: ''
  };

  hasUnsavedChanges = false;

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.cartItems =
      this.cartService.getCartItems();

    this.subtotal =
      this.cartService.calculateSubtotal();

    this.tax =
      this.cartService.calculateTax();

    this.total =
      this.cartService.calculateTotal();
  }

  placeOrder(): void {

    const order =
      this.orderService.createOrder(
        this.shippingInfo,
        this.paymentMethod,
        this.orderNotes
      );

    if (order) {

      this.router.navigate(
        ['/orders']
      );
      this.hasUnsavedChanges = false;
    }
  }

  onFormChange() {
    this.hasUnsavedChanges = true;
  }

  canDeactivate(): boolean {
    if (
      this.hasUnsavedChanges
    ) {

      return confirm(
        'Unsaved changes. Leave page?'
      );
    }

    return true;
  }
}