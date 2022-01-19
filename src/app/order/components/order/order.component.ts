import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CartService } from '@core/services/cart.service';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  products$: Observable<Product[]>;
  firstFormGroup: FormGroup;
  
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) { 
    this.products$ = this.cartService.cart$;
    this.firstFormGroup = {} as FormGroup;
  }

  ngOnInit(): void {
    this.firstFormGroup = this.formBuilder.group({});
  }

  addCart(product: Product): void {
    console.log('Agregar al carrito');
    this.cartService.addCart(product);
  }

  removeFromCart(productId: String) {
    this.cartService.removeFromCart(productId);
  }

  remove(productId: String) {
    this.cartService.remove(productId);
  }

  totalAmount(): number {
    let counter: number = 0;

    this.products$.subscribe((products) => {
      products.forEach((product) => {
        counter = counter + product.price;
      });
    });

    return counter;
  }

}
