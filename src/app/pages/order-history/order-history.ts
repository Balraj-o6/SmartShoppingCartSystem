import { Component } from '@angular/core';
import { OrderHistoryComponent } from '../../components/order-history/order-history';

@Component({
  selector: 'app-order-history',
  imports: [OrderHistoryComponent],
  templateUrl: './order-history.html',
  styleUrl: './order-history.css',
})
export class OrderHistory {}
