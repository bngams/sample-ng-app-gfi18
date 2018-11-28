import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { AuthGuard } from '../security/guards/auth.guard';

const routes: Routes = [
  { path: 'products', component: ProductDashboardComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
