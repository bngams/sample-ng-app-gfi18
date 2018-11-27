import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { MaterialModule } from '../material.module';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule
  ],
  declarations: [ProductListComponent, ProductCardComponent, ProductDashboardComponent],
})
export class ProductsModule { }
