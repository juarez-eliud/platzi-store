import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products: Product[] = [];
  private cart = new BehaviorSubject<Product[]>([]);
  cart$ = this.cart.asObservable();
  constructor() { }

  addCart(product: Product) {
   /*  Cada vez que se agregue un elemento al carrito se hace con la práctica 
    de no mutación, es decir no utilizar push si cada vez que se haga una inserción
    se haga una nueva referencia del arreglo para evitar problemas de inmutabilidad,
    se crea un nuevo estado del arreglo */
    this.products = [...this.products, product];
    //Se les notifica a todos los componentes que esten suscritos que hubo un cambio con next
    this.cart.next(this.products);
  }
}
