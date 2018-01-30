import { Component, OnInit, Input } from '@angular/core';
import { ProductsList } from '../../models/products-list.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  @Input() productsList: ProductsList;

  constructor() { }

  ngOnInit() {
  }

}
