import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Product } from '../../models/product';
import { ProductService } from '../../services/product';
import { CartService } from '../../services/cart';
import { LoggerService } from '../../services/logger';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [LoggerService],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  categories: string[] = [];
  searchText = '';

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private logger: LoggerService
  ) { }

  ngOnInit(): void {

    this.logger.setComponentName('ProductList');

    this.products =
      this.productService.getAllProducts();

    this.categories =
      this.productService.getCategories();
  }

  loadAllProducts(): void {
    this.products =
      this.productService.getAllProducts();
  }

  searchProducts(): void {

    this.products =
      this.productService.searchProducts(
        this.searchText
      );
  }

  filterCategory(category: string): void {

    this.products =
      this.productService.getProductsByCategory(
        category
      );
  }

  showFeaturedProducts(): void {

    this.products =
      this.productService.getFeaturedProducts();
  }

  addToCart(product: Product): void {

    this.cartService.addToCart(product);

    this.logger.log(
      `${product.name} added to cart`
    );
  }
}