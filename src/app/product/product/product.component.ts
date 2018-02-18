import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OdooService } from '../../services/odoo.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  id: number;
  item: Product;

  constructor(route: ActivatedRoute,
    private odoo: OdooService) {
    route.params
      .subscribe(res => {
        this.id = res.id
      })
  }

  ngOnInit() {
    this.odoo.getProduct(this.id)
      .subscribe(res => {
        console.log(`Item ${this.id}: `, res)
        this.item = res
      })
  }

}
