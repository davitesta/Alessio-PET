import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders/orders.component';
import { Routes, RouterModule } from '@angular/router';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { WrapperComponent } from '../shared/wrapper/wrapper.component';

const routes: Routes = [
  {
    path: '', component: WrapperComponent,
    children: [
      { path: 'all', component: OrdersComponent },
      { path: ':id', component: OrderDetailsComponent }
    ]
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
