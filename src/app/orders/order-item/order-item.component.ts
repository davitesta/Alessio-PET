import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../../models/order.model';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {

  @Input() item: Order;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  clickHandler() {
    console.log(`Going to product ${this.item.id} details...`)
    this.router.navigate(['/orders', this.item.id])
  }

}
