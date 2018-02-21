import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Product } from '../../../models/product.model';
import { OdooService } from '../../../services/odoo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

  @Input() item: Product;
  qty: number = 1;

  constructor(private odoo: OdooService,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.odoo.addToCart(this.item, this.qty)
      .subscribe(() => {
        console.log(`Added ${this.qty} units of item ${this.item.id}`);
        this.router.navigate(['/cart'])
      })
  }

}
