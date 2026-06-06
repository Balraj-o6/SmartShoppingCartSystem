import { Component } from '@angular/core';
import { ProductListComponent } from '../../components/product-list/product-list';

@Component({
  selector: 'app-product-catalog',
  imports: [ProductListComponent],
  templateUrl: './product-catalog.html',
  styleUrl: './product-catalog.css',
})
export class ProductCatalog {}
