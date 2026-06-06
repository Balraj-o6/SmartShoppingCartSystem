import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from '../../services/product';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-details',
  standalone: true,
  templateUrl: './product-details.html'
})
export class ProductDetails {

  product?: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {

    const id =
      Number(
        this.route.snapshot.paramMap.get('id')
      );

    this.product =
      this.productService.getProductById(id);
  }
}