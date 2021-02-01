import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProduct } from '../models/product.interface';
import { ProductService } from '../services/products.service';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css'],
})
export class TestComponentComponent implements OnInit {
  productService: ProductService;
  productList: IProduct[];
  constructor() {
    this.productService = ProductService.getServiceInstance();
  }
  ngOnInit(): void {
    this.productList = this.productService.getProducts();
  }

  refreshTestData() {
    this.productList = this.productService.getProducts();
  }
}
