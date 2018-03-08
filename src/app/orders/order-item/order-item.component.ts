import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../../models/order.model';
import { OdooService } from '../../services/odoo.service';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {

  @Input() order: Order;

  constructor(private router: Router,
    private odoo: OdooService) { }

  ngOnInit() {
  }

  clickHandler() {
    console.log(`Going to order ${this.order.id} details...`)
    this.router.navigate(['/orders', this.order.id])
  }

}
