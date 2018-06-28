import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  private subject = new BehaviorSubject<any>([]);

  private _products = [];

  constructor() { }

  addProduct(product) {
    let exist = false;
    this._products.map(item => {
      if (item.sku === product.sku) {
        item.count++;
        exist = true;
      }
    });

    if (!exist) {
      const obj = {
        ...product,
        count: 1
      };
      this._products.push(obj);
    }

    this.subject.next(this._products);
  };

  getProducts() {
    return this.subject;
  }

  setBasket(products) {
    this._products = products;
    this.subject.next(this._products);
  }

}
