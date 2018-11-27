import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  @Output() out = new EventEmitter<any>();

  product: any = {
    id: null,
    name: ''
  };

  constructor() { }

  ngOnInit() {
  }

  submit() {
    this.out.emit(Object.assign({}, this.product));
  }

}
