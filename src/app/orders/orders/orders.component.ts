import { Component, OnInit } from '@angular/core';
import { OdooService } from '../../services/odoo.service';
import { OrdersList } from '../../models/orders-list.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  ordersList: OrdersList;

  constructor(private odoo: OdooService) {
    this.odoo.getOrdersList()
      .subscribe(res => {
        console.log('Orders list: ', res);
        this.ordersList = res;
      })
  }

  ngOnInit() {
  }

}
