import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductRoutingModule } from './product-routing.module';
import { AppModule } from '../app.module';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './product/product.component';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule
  ],
  declarations: [ProductDetailsComponent, ProductComponent],
  exports: [ProductDetailsComponent, ProductComponent]
})
export class ProductModule { }
