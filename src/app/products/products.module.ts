import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { MaterialModule } from '../material.module';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductService } from './product.service';
import { ShareModule } from '../share/share.module';
import { PromoDirective } from './directives/promo.directive';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ProductsRoutingModule,
    MaterialModule,
    ShareModule
  ],
  declarations: [
    ProductListComponent,
    ProductCardComponent,
    ProductDashboardComponent,
    ProductFormComponent,
    PromoDirective
  ],
  providers: [
    ProductService
  ]
})
export class ProductsModule { }
