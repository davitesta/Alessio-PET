import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { OrderItemComponent } from './order-item/order-item.component';
import { OrdersComponent } from './orders/orders.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { SharedModule } from '../shared/shared.module';
import { OrderLineItemComponent } from './order-item/order-line-item/order-line-item.component';
import { OrderLineListComponent } from './order-item/order-line-list/order-line-list.component';
import { AsyncPipe } from '@angular/common';
import { ProductModule } from '../product/product.module';
import { OrderLineDetailsComponent } from './order-details/order-line-details/order-line-details.component';

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule,
  ],
  declarations: [OrdersComponent, OrdersListComponent, OrderItemComponent, OrderDetailsComponent, OrderLineItemComponent, OrderLineListComponent, OrderLineDetailsComponent],
  exports: [OrdersComponent, OrdersListComponent, OrderItemComponent, OrderDetailsComponent]
})
export class OrdersModule { }
