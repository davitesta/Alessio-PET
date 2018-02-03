import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { ProductsList } from '../models/products-list.model';
import 'rxjs/add/operator/map';
import { OdooRPCService } from 'angular4-odoo-jsonrpc';
import { OrdersList } from '../models/orders-list.model';
import { Order } from '../models/order.model';

@Injectable()
export class OrdersService {

  product0: Product = new Product(0, 'A', 'none');
  product1: Product = new Product(1, 'B', 'none');
  product2: Product = new Product(2, 'C', 'none');

  productsList0: ProductsList = new ProductsList([this.product0, this.product1])
  productsList1: ProductsList = new ProductsList([this.product2])

  resource : Array<Order> = [
    {id: 3, productsList: this.productsList0, description: 'none' },
    {id: 4, productsList: this.productsList1, description: 'none' },
  ];

  ordersList : OrdersList = new OrdersList(this.resource)

  constructor() { }

  getOrdersList(): Observable<OrdersList> {
    return new Observable((observer) => {
      observer.next(this.ordersList)
    })
  }

  getOrder(id): Observable<any> {
    return this.getOrdersList()
      .map((res) => {
        return res.items.filter(item => item.id == id)
      })
  }

}
