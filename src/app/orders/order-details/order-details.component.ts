import { Component, OnInit } from '@angular/core';
import { OdooService } from '../../services/odoo.service';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../../models/order.model';
import { Customer } from '../../models/customer.model';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  id: string;
  order: Order;
  customer: Customer;

  constructor(route: ActivatedRoute,
    private odoo: OdooService) {
    route.params
      .subscribe(params => {
        this.id = params.id
      })
  }

  ngOnInit() {
    this.odoo.getOrder(this.id)
      .flatMap(res => {
        this.order = res;
        console.log(`Order ${this.id}: `, res)
        return this.odoo.getCustomer(this.order.partnerShippingId[0]);
      })
      .subscribe(res => this.customer = res)
  }

  ngOnChanges() {
  }

}
