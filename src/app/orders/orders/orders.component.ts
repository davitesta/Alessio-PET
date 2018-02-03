import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { OrdersService } from '../../services/orders.service';
import { OrdersList } from '../../models/orders-list.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  ordersList: OrdersList;

  constructor(private ordersService: OrdersService) {
    this.ordersList = this.ordersService.ordersList;
  }

  ngOnInit() {
  }

}
