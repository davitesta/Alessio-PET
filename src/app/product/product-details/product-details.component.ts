import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  id: string;
  item: any;

  constructor(route: ActivatedRoute,
    private productService: ProductService) {
    route.params
      .subscribe(params => {
        this.id = params.id
      })
  }

  ngOnInit() {
    this.productService.getProduct(this.id)
      .subscribe(res => {
        console.log(`Product ${this.id}: `, res)
        this.item = res
      })
  }

  ngOnChanges() {
  }

}
