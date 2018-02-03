import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  id: string;
  item: any;

  constructor(route: ActivatedRoute,
    private ordersService: OrdersService) {
    route.params
      .subscribe(params => {
        this.id = params.id
      })
  }

  ngOnInit() {
    this.ordersService.getOrder(this.id)
      .subscribe(res => {
        console.log(`Order of product ${this.id}: `, res)
        this.item = res
      })
  }

  ngOnChanges() {
  }

}
