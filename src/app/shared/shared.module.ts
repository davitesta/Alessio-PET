import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { WrapperComponent } from './wrapper/wrapper.component';
import { AddToCartComponent } from './forms/add-to-cart/add-to-cart.component';
import { FormsModule } from '@angular/forms';
import { ConcatPipe } from './pipes/concat.pipe';
import { SanitizerPipe } from './pipes/sanitizer.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [AddToCartComponent, NavbarComponent, FooterComponent, WrapperComponent, ConcatPipe, SanitizerPipe],
  exports: [AddToCartComponent, NavbarComponent, FooterComponent, WrapperComponent, ConcatPipe, SanitizerPipe]
})
export class SharedModule { }
