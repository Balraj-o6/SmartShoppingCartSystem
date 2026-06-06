import { Injectable } from '@angular/core';
import { Order, ShippingInfo } from '../models/order';
import { CartService } from './cart';
import { NotificationService } from './notification';
import { LocalStorageService } from './local-storage';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orders: Order[] = [];
  private nextOrderId = 1;

  constructor(
    private cartService: CartService,
    private notificationService: NotificationService,
    private localStorageService: LocalStorageService
  ) {
    this.loadOrders();
  }

  createOrder(
    shippingInfo: ShippingInfo,
    paymentMethod: string,
    orderNotes: string
  ): Order | null {

    const cartItems =
      this.cartService.getCartItems();

    if (cartItems.length === 0) {

      this.notificationService.showError(
        'Cart is empty'
      );

      return null;
    }

    const order: Order = {

      orderId: Date.now(),

      orderDate: new Date(),

      items: [...cartItems],

      shippingInfo,

      paymentMethod,

      orderNotes,

      subtotal:
        this.cartService.calculateSubtotal(),

      discount:
        this.cartService.getDiscount(),

      tax:
        this.cartService.calculateTax(),

      total:
        this.cartService.calculateTotal(),

      status: 'pending'
    };

    this.orders.push(order);

    this.saveOrders();

    this.cartService.clearCart();

    this.notificationService.showSuccess(
      'Order placed successfully'
    );

    return order;
  }

  getAllOrders(): Order[] {
    return [...this.orders];
  }

  cancelOrder(orderId: number): boolean {

    const order = this.orders.find(
      o => o.orderId === orderId
    );

    if (!order || order.status !== 'pending') {
      return false;
    }

    order.status = 'cancelled';

    return true;
  }

  getOrdersByStatus(status: string): Order[] {

    return this.orders.filter(
      order => order.status === status
    );
  }

  getTotalOrdersCount(): number {
    return this.orders.length;
  }

  getTotalSpent(): number {

    return this.orders.reduce(
      (total, order) => total + order.total,
      0
    );
  }

  getAverageOrderValue(): number {

    if (this.orders.length === 0) {
      return 0;
    }

    return this.getTotalSpent() / this.orders.length;
  }

  private saveOrders(): void {

    this.localStorageService.setItem(
      'orders',
      this.orders
    );
  }

  private loadOrders(): void {

    const savedOrders =
      this.localStorageService.getItem<Order[]>(
        'orders'
      );

    if (savedOrders) {
      this.orders = savedOrders;
    }
  }
}