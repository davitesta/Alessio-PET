import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { OdooService } from './services/odoo.service';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OdooRPCService } from 'angular4-odoo-jsonrpc';
import { Http } from '@angular/http/src/http';
import { HttpModule } from '@angular/http';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [OdooService, OdooRPCService],
  bootstrap: [AppComponent]
})
export class AppModule { }
