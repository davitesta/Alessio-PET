import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { ProductsList } from '../models/products-list.model';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  productsUrl = "api/productsList";

  constructor(private http: HttpClient) { }

  getProductsList(): Observable<ProductsList> {
    console.log('Getting products list...')
    return this.http.get<any>(this.productsUrl, {})
      .map((res) => { return new ProductsList(res) })
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
