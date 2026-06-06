import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CartItem } from '../../models/cart';
import { CartService } from '../../services/cart';
import { LoggerService } from '../../services/logger';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [LoggerService],
  templateUrl: './shopping-cart.html',
  styleUrl: './shopping-cart.css'
})
export class ShoppingCartComponent implements OnInit {

  cartItems: CartItem[] = [];

  cartCount = 0;
  subtotal = 0;
  tax = 0;
  total = 0;
  discount = 0;

  discountCode = '';

  constructor(
    private cartService: CartService,
    private logger: LoggerService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.logger.setComponentName('ShoppingCart');

    this.refreshCart();
  }

  refreshCart(): void {

    this.cartItems =
      this.cartService.getCartItems();

    this.cartCount =
      this.cartService.getCartCount();

    this.subtotal =
      this.cartService.calculateSubtotal();

    this.tax =
      this.cartService.calculateTax();

    this.total =
      this.cartService.calculateTotal();

    this.discount =
      this.cartService.getDiscount();
  }

  removeItem(productId: number): void {

    this.cartService.removeFromCart(productId);

    this.refreshCart();
  }

  updateQuantity(
    productId: number,
    event: any
  ): void {

    this.cartService.updateQuantity(
      productId,
      Number(event.target.value)
    );

    this.refreshCart();
  }

  applyDiscount(): void {

    this.cartService.applyDiscount(
      this.discountCode
    );

    this.refreshCart();
  }

  clearCart(): void {

    this.cartService.clearCart();

    this.refreshCart();
  }

  checkout() {
    this.router.navigate(
      ['/checkout']
    );
  }
}