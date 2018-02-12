import { Component, OnInit } from '@angular/core';
import { OdooService } from '../../services/odoo.service';
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
    private odoo: OdooService) {
    route.params
      .subscribe(params => {
        this.id = params.id
      })
  }

  ngOnInit() {
    this.odoo.getOrder(this.id)
      .subscribe(res => {
        console.log(`Order of product ${this.id}: `, res)
        this.item = res
      })
  }

  ngOnChanges() {
  }

}
