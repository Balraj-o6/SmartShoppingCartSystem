import { Injectable } from '@angular/core';
import { CartItem, CartSummary } from '../models/cart';
import { Product } from '../models/product';
import { ProductService } from './product';
import { NotificationService } from './notification';
import { LocalStorageService } from './local-storage';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: CartItem[] = [];
  private discountPercentage = 0;

  constructor(
    private productService: ProductService,
    private notificationService: NotificationService,
    private localStorageService: LocalStorageService
  ) {
    this.loadCart();
  }

  addToCart(product: Product, quantity: number = 1): boolean {

    if (product.stock < quantity) {
      this.notificationService.showError('Not enough stock');
      return false;
    }

    const existingItem = this.cartItems.find(
      item => item.productId === product.id
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.cartItems.push({
        productId: product.id,
        product,
        quantity
      });
    }

    product.stock -= quantity;

    this.saveCart();

    this.notificationService.showSuccess('Item added to cart');

    return true;
  }

  removeFromCart(productId: number): boolean {

    const index = this.cartItems.findIndex(
      item => item.productId === productId
    );

    if (index === -1) {
      return false;
    }

    const item = this.cartItems[index];

    item.product.stock += item.quantity;

    this.cartItems.splice(index, 1);

    this.saveCart();

    return true;
  }

  updateQuantity(productId: number, quantity: number): boolean {

    const item = this.cartItems.find(
      item => item.productId === productId
    );

    if (!item) {
      return false;
    }

    item.quantity = quantity;

    this.saveCart();

    return true;
  }

  clearCart(): void {

    this.cartItems.forEach(item => {
      item.product.stock += item.quantity;
    });

    this.cartItems = [];
    this.discountPercentage = 0;

    this.saveCart();

    this.notificationService.showInfo('Cart cleared');
  }

  getCartItems(): CartItem[] {
    return [...this.cartItems];
  }

  getCartCount(): number {
    return this.cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
  }

  applyDiscount(code: string): boolean {

    const subtotal = this.calculateSubtotal();

    if (code === 'SAVE10') {
      this.discountPercentage = 10;
      return true;
    }

    if (code === 'SAVE20' && subtotal > 100) {
      this.discountPercentage = 20;
      return true;
    }

    if (code === 'SAVE25' && subtotal > 200) {
      this.discountPercentage = 25;
      return true;
    }

    this.notificationService.showError('Invalid discount code');

    return false;
  }

  getDiscount(): number {
    return this.discountPercentage;
  }

  calculateSubtotal(): number {

    return this.cartItems.reduce(
      (total, item) =>
        total + (item.product.price * item.quantity),
      0
    );
  }

  calculateTax(): number {
    return this.calculateSubtotal() * 0.08;
  }

  calculateTotal(): number {

    const subtotal = this.calculateSubtotal();

    const discount =
      subtotal * this.discountPercentage / 100;

    return subtotal - discount + this.calculateTax();
  }

  getCartSummary(): CartSummary {

    return {
      items: this.getCartItems(),
      itemCount: this.getCartCount(),
      subtotal: this.calculateSubtotal(),
      discount: this.discountPercentage,
      discountPercentage: this.discountPercentage,
      tax: this.calculateTax(),
      total: this.calculateTotal()
    };
  }

  private saveCart(): void {
    this.localStorageService.setItem(
      'cart',
      this.cartItems
    );
  }

  private loadCart(): void {

    const cart =
      this.localStorageService.getItem<CartItem[]>('cart');

    if (cart) {
      this.cartItems = cart;
    }
  }
}