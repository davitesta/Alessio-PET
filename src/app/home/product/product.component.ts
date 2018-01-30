import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() item: Product;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  clickHandler() {
    console.log(`Going to product ${this.item.id} details...`)
    this.router.navigate(['/product', this.item.id])
  }



}
