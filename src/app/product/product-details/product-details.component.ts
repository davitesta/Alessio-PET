import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OdooService } from '../../services/odoo.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  id: string;
  item: Product;

  constructor(route: ActivatedRoute,
    private odoo: OdooService,
    private router: Router) {
    route.params
      .subscribe(res => {
        this.id = res.id
      })
  }

  ngOnInit() {
    this.odoo.getProduct(this.id)
      .subscribe(res => {
        console.log(`Product ${this.id}: `, res)
        this.item = res
      })
  }

  clickHandler() {
    this.odoo.addToCart(this.item)
      .subscribe((res) => {
        console.log('Shopping cart updated: ', res);
        this.router.navigate(['/cart'])
      })
  }

}
