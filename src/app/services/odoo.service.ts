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

  getProduct(id): Observable<Product> {   //più correttamente da eseguire con una chiamata ad Odoo
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
      this.odooRPC.call('sale.order.line', 'search_read', [[['state', '=', 'draft']]], {})
        .then((res) => {
          console.log('Odoo Shopping cart: ', res);
          observer.next(res);
        })
    })).map((res) => {
      return new ProductsList(res)
    })
  }

  addToCart(item, qty): Observable<any> {
    return new Observable((observer) => {
      this.odooRPC.call('sale.order', 'create', [{
        'partner_id': 3,
      }], {})
        .then(orderId => {
          console.log(`Created order ${orderId}`);
          this.odooRPC.call('sale.order.line', 'create', [{
            'product_uom': 1,
            'product_uom_qty': qty,
            'order_id': orderId,
            'product_id': item.id
          }], {})
            .then(orderLineId => {
              console.log(`Created order line ${orderLineId}`);
              observer.next({
                orderId: orderId,
                orderLineId: orderLineId
              });
            })
        })
    })
  }

}

