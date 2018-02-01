import { Component, OnInit } from '@angular/core';
import { OdooRPCService } from 'angular4-odoo-jsonrpc';

@Component({
  selector: 'app-odoo',
  templateUrl: './odoo.component.html',
  styleUrls: ['./odoo.component.css']
})
export class OdooComponent implements OnInit {

  success: any;

  constructor(odooRPC: OdooRPCService) {
    odooRPC.init({
      odoo_server: "http://localhost:8069",
      /*
        http_auth: "username:password" //optional
      */
    });
    odooRPC.login('AlessioPET', 'davi.testa94@gmail.com', 'odoo').then(res => {
      console.log('Login success: ', res);
      this.success = res;
    }).catch(err => {
      console.error('Login failed: ', err);
    })
  }

  ngOnInit() {
  }

}
