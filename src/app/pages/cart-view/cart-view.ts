import { Component } from '@angular/core';
import { ShoppingCartComponent } from '../../components/shopping-cart/shopping-cart';

@Component({
  selector: 'app-cart-view',
  imports: [ShoppingCartComponent],
  templateUrl: './cart-view.html',
  styleUrl: './cart-view.css',
})
export class CartView {}
