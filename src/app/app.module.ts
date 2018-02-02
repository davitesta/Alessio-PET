import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OdooRPCService } from 'angular4-odoo-jsonrpc';
import { Http } from '@angular/http/src/http';
import { HttpModule } from '@angular/http';
import { SharedModule } from './shared/shared.module';
import { ProductModule } from './product/product.module';
import { ProductRoutingModule } from './product/product-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    AppRoutingModule,
    SharedModule
  ],
  providers: [ProductService, OdooRPCService],
  bootstrap: [AppComponent]
})
export class AppModule { }
