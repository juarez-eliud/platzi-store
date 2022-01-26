import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '@core/services/products.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product$:  Observable<Product>;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
   /* Para simplificar la data que se obtiene de  para producto
    se pasa directamente a la variable tipo observable 
    para hacer una suscripción async en el template directamente */
    this.product$ = this.route.params
    .pipe(
      switchMap((params: Params) => {
        return this.productsService.getProduct(params.id);
      })
    )
  }

  createProduct() {
    
  }

  updateProduct(){
   
  }

  deleteProduct() {
    
  }

  getRandomUsers() {
    this.productsService.getRandomUsers()
    .subscribe(users => {
      console.log(users);
    }, error => {
      console.log(error);
    }
    );
  }

  getRandomUsersExample2() {
    this.productsService.getRandomUsersExample2()
    .subscribe(users => {
      console.log(users);
    });
  }

}
