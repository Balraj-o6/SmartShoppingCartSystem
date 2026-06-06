import { Component } from '@angular/core';
import { NotificationComponent } from '../../components/notification/notification';
import { QuickStats } from '../../components/quick-stats/quick-stats';
import { ProductService } from '../../services/product';
import { Product } from '../../models/product';
import { CartService } from '../../services/cart';
import { LoggerService } from '../../services/logger';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [NotificationComponent, QuickStats, CommonModule, FormsModule],
  providers: [ProductService, CartService, LoggerService],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  products: Product[] = [];

  constructor(private productService: ProductService, private cartService: CartService, private logger: LoggerService) { }

  ngOnInit() {
    this.products = this.productService.getFeaturedProducts();
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    this.logger.log(
      `${product.name} added to cart`
    );
  }

}
