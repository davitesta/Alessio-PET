import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { HomeRoutingModule } from './home-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent, ProductsListComponent, ProductItemComponent],
  exports: [HomeComponent, ProductsListComponent, ProductItemComponent]
})
export class HomeModule { }
