import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/productos/product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements  OnInit{
  products: any[] = [];
  filteredProducts: any[] = [];
  filterText: string = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredProducts = [...this.products];
  }

  filterProducts(): void {
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }

}
