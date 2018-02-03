import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
