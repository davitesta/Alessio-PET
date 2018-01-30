import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {

  productsUrl = "api/productsList";

  constructor(private http: HttpClient) { }

  getProductsList(): Observable<any> {
    console.log('Getting products list...')
    return this.http.get<any>(this.productsUrl);
  }

  getProduct(id: number): Observable<any> {
    return this.getProductsList()
      .filter(item => item.id == id);
  }

}
