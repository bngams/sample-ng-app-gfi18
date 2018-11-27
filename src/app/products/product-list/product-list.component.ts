import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: any = new Array();

  constructor() { }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.products = this.products.concat([
      {
        id: 1,
        name: 'Surface'
      },
      {
        id: 2,
        name: 'iMac'
      }
    ]);
  }

}
