import { Component, OnInit, Input } from '@angular/core';
import { OdooService } from '../../../services/odoo.service';
import { OrderLine } from '../../../models/order-line.model';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-order-line-details',
  templateUrl: './order-line-details.component.html',
  styleUrls: ['./order-line-details.component.css']
})
export class OrderLineDetailsComponent implements OnInit {

  @Input() orderLineId: number;
  orderLine: OrderLine;
  item: Product;

  constructor(private odoo: OdooService) { }

  ngOnInit() {
    this.odoo.getOrderLine(this.orderLineId)
      .flatMap(res => {
        console.log(`Order line ${this.orderLineId}: `, res)
        this.orderLine = res;
        return this.odoo.getProduct(this.orderLine.productId[0])
      })
      .subscribe(res => this.item = res)
  }

}
