import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { HomeRoutingModule } from './home-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  declarations: [HomeComponent, ProductsListComponent, ProductItemComponent],
  exports: [HomeComponent, ProductsListComponent, ProductItemComponent]
})
export class HomeModule { }
