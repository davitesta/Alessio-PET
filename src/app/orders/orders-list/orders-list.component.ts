import { Component, OnInit, Input } from '@angular/core';
import { OrdersList } from '../../models/orders-list.model';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {

  @Input() ordersList: OrdersList;

  constructor() { }

  ngOnInit() {
  }

}
