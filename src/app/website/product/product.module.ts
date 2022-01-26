import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './components/product/product.component';
import { ProductsContainer} from './containers/products/products.container';
import { SharedModule } from '@shared/shared.module';
import { MaterialModule } from '@material/material.module';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailComponent,
    ProductsContainer
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class ProductModule { }
