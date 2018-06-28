import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:9001/';

  constructor(
    private http: HttpClient,
  ) { }

  getProducts() {
    const apiUrl = `${this.baseUrl}products`;

    return this.http.get(apiUrl);
  }

  getPromoCode(promoCode) {
    const apiUrl = `${this.baseUrl}promocode`;

    return this.http.post(apiUrl, {promoCode});
  }
}
