import { Component, OnInit } from '@angular/core';
import { ProductsList } from '../../models/products-list.model';
import { OdooService } from '../../services/odoo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productsList: ProductsList;

  constructor(private odoo: OdooService) { }

  ngOnInit() {
    this.odoo.getProductsList()
      .subscribe((res) => {
        console.log(`Products list: `, res)
        this.productsList = res;
      },
      (err) => {
        console.log(err);
      }
    )
  }

}
