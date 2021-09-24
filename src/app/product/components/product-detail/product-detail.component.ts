import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Product } from 'src/app/models/product';
import { ProductsService} from '../../../core/services/products.service';



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

}
