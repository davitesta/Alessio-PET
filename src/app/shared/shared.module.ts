import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { WrapperComponent } from './wrapper/wrapper.component';
import { AddToCartComponent } from './forms/add-to-cart/add-to-cart.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [AddToCartComponent, NavbarComponent, FooterComponent, WrapperComponent],
  exports: [AddToCartComponent, NavbarComponent, FooterComponent, WrapperComponent]
})
export class SharedModule { }
