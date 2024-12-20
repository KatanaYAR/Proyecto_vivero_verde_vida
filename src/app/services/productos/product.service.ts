import { Injectable } from '@angular/core';
import { PRODUCTS } from 'src/app/data/mock-products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts() {
    return PRODUCTS; // Devuelve los productos mock
  }
}
