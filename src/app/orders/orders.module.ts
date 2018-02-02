import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { OrderItemComponent } from './order-item/order-item.component';
import { OrdersComponent } from './orders/orders.component';
import { OrdersRoutingModule } from './orders-routing.module';

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule
  ],
  declarations: [OrdersComponent, OrdersListComponent, OrderItemComponent, OrdersComponent],
  exports: [OrdersComponent, OrdersListComponent, OrderItemComponent]
})
export class OrdersModule { }
