import { Component, OnInit, Input } from '@angular/core';
import { OdooService } from '../../../services/odoo.service';
import { OrderLine } from '../../../models/order-line.model';
import { Product } from '../../../models/product.model';
import { ProductsList } from '../../../models/products-list.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-line-item',
  templateUrl: './order-line-item.component.html',
  styleUrls: ['./order-line-item.component.css']
})
export class OrderLineItemComponent implements OnInit {

  @Input() orderLineId: number;
  orderLine: OrderLine;
  item: Product;

  constructor(private odoo: OdooService,
    private router: Router) { }

  ngOnInit() {
    this.odoo.getOrderLine(this.orderLineId)
      .flatMap(res => {
        this.orderLine = res;
        console.log(`Order line ${this.orderLineId}: `, this.orderLine)
        return this.odoo.getProduct(this.orderLine.productId[0]);
      })
      .subscribe(res => this.item = res)
  }

  clickHandler() {

  }


}
