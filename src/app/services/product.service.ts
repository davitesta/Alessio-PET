import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { ProductsList } from '../models/products-list.model';
import 'rxjs/add/operator/map';
import { OdooRPCService } from 'angular4-odoo-jsonrpc';

@Injectable()
export class ProductService {

  productsUrl = "api/productsList";

  constructor(private odooRPC: OdooRPCService) {
    this.odooRPC.init({
      odoo_server: "http://localhost:8069",
      /*
        http_auth: "username:password" //optional
      */
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
        let item = res.items.filter(item => item.id == id);
        return new Product(item[0].id,
          item[0].name,
          item[0].description)
      })
  }

}
