import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ProductListComponent } from './product-list/product-list.component';
import { BasketCheckoutComponent } from './basket-checkout/basket-checkout.component';
import { CheckoutSuccessComponent } from './checkout-success/checkout-success.component';
import { CheckoutFailComponent } from './checkout-fail/checkout-fail.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'products', component: ProductListComponent },
      { path: 'checkout', component: BasketCheckoutComponent },
      { path: 'checkout/success', component: CheckoutSuccessComponent },
      { path: 'checkout/fail', component: CheckoutFailComponent },
      { path: '**', redirectTo: 'products' }
    ]
  }
];
