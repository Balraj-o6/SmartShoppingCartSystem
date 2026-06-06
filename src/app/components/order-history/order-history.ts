import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Order } from '../../models/order';
import { OrderService } from '../../services/order';

@Component({
  selector: 'app-order-history-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-history.html',
  styleUrl: './order-history.css'
})
export class OrderHistoryComponent implements OnInit {

  orders: Order[] = [];

  totalOrders = 0;
  totalSpent = 0;
  averageOrder = 0;

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {

    this.orders =
      this.orderService.getAllOrders();

    this.totalOrders =
      this.orderService.getTotalOrdersCount();

    this.totalSpent =
      this.orderService.getTotalSpent();

    this.averageOrder =
      this.orderService.getAverageOrderValue();
  }

  filterOrders(event: any): void {

    const status = event.target.value;

    if (status === 'all') {

      this.orders =
        this.orderService.getAllOrders();

      return;
    }

    this.orders =
      this.orderService.getOrdersByStatus(
        status
      );
  }

  cancelOrder(orderId: number): void {

    this.orderService.cancelOrder(orderId);

    this.loadOrders();
  }
}