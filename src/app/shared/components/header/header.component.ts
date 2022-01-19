import { Component, OnInit } from '@angular/core';
import { CartService } from '@core/services/cart.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  //total = 0;
  total$: Observable<number>;
  constructor(private cartService: CartService) {
    
    //Opción 1:
    /* this.cartService.cart$.subscribe(products => {
      this.total = products.length;
    }); */

    //Opción 2:
   /* //Se transforma el valor que llega por uno nuevo
    this.cartService.cart$
    .pipe(
      //Se reciben los productos y se transforman a un valor
      //el cual es el tamaño de la lista 
      map(products => products.length)
    )
    //En el subscribe ya no llega la lista de productos porque se transformó anteriormente
    //si no ahora se obtiene el total de los productos 
    .subscribe(total => {
      this.total = total;
    }); */

    //Opción 2 (mejor performace):
    /* Ya no se hace una suscripción, ya que se retorna un flujo de datos
    de un observable de tipo number (pipe) a un observable (total$) de tipo number.
    La suscripción se realiza directamente desde el template con el pipe async */
    this.total$ = this.cartService.cart$.pipe(map(products => products.length));    
  }

  ngOnInit(): void {
  }

}
