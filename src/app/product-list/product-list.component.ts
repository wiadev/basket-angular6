import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api/api.service';
import { BasketService } from '../services/basket/basket.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Array<any>;

  constructor(
    private apiService: ApiService,
    private basetService: BasketService,
  ) {

  }

  ngOnInit() {
    this.apiService.getProducts().subscribe((results: any) => {
      this.products = results;
    });
  }

  add(product) {
    this.basetService.addProduct(product);
  }

}
