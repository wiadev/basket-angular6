import { Component, OnInit } from '@angular/core';
import { BasketService } from '../services/basket/basket.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  count = 0;

  constructor(
    private basetService: BasketService,
  ) {
    this.basetService.getProducts().subscribe(products => {
      let c = 0;
      products.map(product => {
        c += product.count || 0;
      });

      this.count = c;
    });
  }

  ngOnInit() {
  }

}
