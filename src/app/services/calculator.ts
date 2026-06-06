import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  calculatePercentage(amount: number, percentage: number): number {
    return +(amount * percentage / 100).toFixed(2);
  }

  calculateDiscount(price: number, discountPercent: number): number {
    return +(price - (price * discountPercent / 100)).toFixed(2);
  }

  formatCurrency(amount: number): string {
    return `$${amount.toFixed(2)}`;
  }

  calculateTax(amount: number, taxRate: number = 8): number {
    return +(amount * taxRate / 100).toFixed(2);
  }

  roundToTwoDecimals(num: number): number {
    return +num.toFixed(2);
  }
}