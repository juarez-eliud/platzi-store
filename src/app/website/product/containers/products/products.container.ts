import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from '@core/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.container.html'
})
export class ProductsContainer implements OnInit {

  products: Product[];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.fetchProducts();
    
  }

  fetchProducts() {
    this.productsService.getAllProducts().subscribe(products => {
      this.products = products;
    });
  }

  clickProduct(id: number) {
    console.log('product', id);
  }

  test() {
    let a = 3;
    let ad = 3;
    let av: boolean = ad == 3;
    console.log(av);
    //shitf+alt+f
  }

}
