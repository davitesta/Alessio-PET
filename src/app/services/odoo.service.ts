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
export class OdooService {

  /* **************************************** */
  resource: Array<Order> = [
    {
      id: 3,
      productsList: new ProductsList([
        new Product(0, 'A', 'none'),
        new Product(1, 'B', 'none')]),
      description: 'none'
    },
    {
      id: 4, productsList: new ProductsList([
        new Product(2, 'C', 'none')
      ]),
      description: 'none'
    },
  ];

  ordersList: OrdersList = new OrdersList(this.resource)

  /* **************************************** */

  shoppingCart: ProductsList = new ProductsList([]);

  constructor(private odooRPC: OdooRPCService) {
    this.odooRPC.init({
      odoo_server: "http://localhost:8069",
      http_auth: "username:password"
    });
    this.odooRPC.login('AlessioPET', 'davi.testa94@gmail.com', 'odoo').then(res => {
      console.log('Login succeeded: ', res);
    }).catch(err => {
      console.error('Login failed: ', err);
    })
  }

  getProductsList(): Observable<ProductsList> {
    return new Observable((observer) => {
      this.odooRPC.call('product.product', 'search_read', {}, { limit: 0 })
        .then((res) => {
          console.log('Odoo products: ', res);
          observer.next(res)
        })
    }).map((res) => {
      return new ProductsList(res)
    })
  }

  getProduct(id): Observable<Product> {
    console.log(`Getting product ${id}...`)
    return this.getProductsList()
      .map((res) => {
        let product = res.items.filter(item => item.id == id);
        return new Product(product[0].id,
          product[0].name,
          product[0].description)
      })
  }

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

  getShoppingCart(): Observable<ProductsList> {
    return new Observable((observer => {
      this.odooRPC.call('sale.order', 'search_read', [[['state', '=', 'draft']]], {})
        .then((res) => {
          console.log('Odoo Shopping cart: ', res);
          observer.next(res);
        })
    })).map((res) => {
      return new ProductsList(res)
    })
  }

  addToCart(product): Observable<any> {
    return new Observable((observer) => {
      this.odooRPC.call('sale.order', 'create', [{
        //'currency_id': 1,
        //'date_order': "2018-02-10 17:21:48",
        //'name': "SO005",
        'partner_id': 3,
        //'partner_invoice_id': 3,
        //'partner_shipping_id': 3,
        //'picking_policy': "direct",
        //'pricelist_id': 1,
        //'warehouse_id': 1
      }], {})
        .then(res => {
          observer.next(res);
        })
    })
  }

}

