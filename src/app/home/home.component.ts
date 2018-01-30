import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productsList: Array<any>;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProductsList()
      .subscribe((res) => {
        console.log('Products list: ', res);
        this.productsList = res;
      },
      (err) => {
        console.log(err);
      }
    )
  }

}
