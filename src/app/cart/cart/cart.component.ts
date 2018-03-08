import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ProductsList } from '../../models/products-list.model';
import { Product } from '../../models/product.model';
import { OdooService } from '../../services/odoo.service';
import { OrdersList } from '../../models/orders-list.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  id: string;
  shoppingCart: OrdersList;

  constructor(private odoo: OdooService) {}

  ngOnInit() {
    this.odoo.getShoppingCart()
      .subscribe((res) => {
        console.log(`Shopping cart: `, res)
        this.shoppingCart = res;
      })
  }

}
