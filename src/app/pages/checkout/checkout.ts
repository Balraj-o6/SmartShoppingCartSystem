import { Component } from '@angular/core';
import { CheckoutComponent } from '../../components/checkout/checkout';

@Component({
  selector: 'app-checkout',
  imports: [CheckoutComponent],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export class Checkout {}
