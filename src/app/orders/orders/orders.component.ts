import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  ordersList: any = [
    {id: 0, name: 'A', description: 'none'},
    {id: 1, name: 'B', description: 'none'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
