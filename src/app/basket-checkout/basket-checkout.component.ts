import { Component, OnInit } from '@angular/core';
import { BasketService } from '../services/basket/basket.service';

@Component({
  selector: 'app-basket-checkout',
  templateUrl: './basket-checkout.component.html',
  styleUrls: ['./basket-checkout.component.css']
})
export class BasketCheckoutComponent implements OnInit {

  products = [];

  constructor(
    private basketService: BasketService,
  ) {
    basketService.getProducts().subscribe(results => this.products = results);
  }

  LuhnCheck() {
    var luhnArr = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];
    return function(str)
    {
      var counter = 0;
      var incNum;
      var odd = false;
      var temp = String(str).replace(/[^\d]/g, "");
      if ( temp.length == 0)
        return false;
      for (var i = temp.length-1; i >= 0; --i)
      {
        incNum = parseInt(temp.charAt(i), 10);
        counter += (odd = !odd)? incNum : luhnArr[incNum];
      }
      return (counter%10 == 0);
    }
  }

  get getSubTotal() {
    let price = 0;
    this.products.map(product => {
      console.log(product, price, product.price * product.number);
      price += parseFloat(product.price) * product.count;
    });
    return price;
  }

  ngOnInit() {
  }

  remove(idx) {
    this.products.splice(idx, 1);
    this.basketService.setBasket(this.products);
  }

  change() {
    this.basketService.setBasket(this.products);
  }

  checkout() {}

  applyPromoCode() {}

}
