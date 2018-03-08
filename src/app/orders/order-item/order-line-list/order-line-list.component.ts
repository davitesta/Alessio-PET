import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order-line-list',
  templateUrl: './order-line-list.component.html',
  styleUrls: ['./order-line-list.component.css']
})
export class OrderLineListComponent implements OnInit {

  @Input() orderLineList: Array<number>;

  constructor() { }

  ngOnInit() {
  }

}
