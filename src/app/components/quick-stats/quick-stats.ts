import { Component } from '@angular/core';
import { ProductService } from '../../services/product';

@Component({
  selector: 'app-quick-stats',
  imports: [],
  templateUrl: './quick-stats.html',
  styleUrl: './quick-stats.css',
})
export class QuickStats {
  totalProducts: number = 0;
  totalCategories: string[] = [];

  constructor( private productService: ProductService
  ) {} 

  ngOnInit(): void {
    const products = this.productService.getAllProducts();
    this.totalProducts = products.length;
    this.totalCategories = this.productService.getCategories();
  }
}
