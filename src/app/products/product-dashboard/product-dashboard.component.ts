import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent implements OnInit {

  @ViewChild(ProductListComponent) productList: ProductListComponent;

  constructor() { }

  ngOnInit() {
    this.addProduct({ id: 3, name: 'lenovo' });
  }

  addProduct(product) {
    this.productList.products.push(product);
  }
}
