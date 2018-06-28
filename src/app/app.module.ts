import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { BasketCheckoutComponent } from './basket-checkout/basket-checkout.component';
import { CheckoutSuccessComponent } from './checkout-success/checkout-success.component';
import { CheckoutFailComponent } from './checkout-fail/checkout-fail.component';
import { MainComponent } from './main/main.component';
import { routes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    BasketCheckoutComponent,
    CheckoutSuccessComponent,
    CheckoutFailComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
