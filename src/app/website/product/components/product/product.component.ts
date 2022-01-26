import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  DoCheck,
  OnDestroy
} from '@angular/core';
import { CartService } from '@core/services/cart.service';
import { Product } from 'src/app/models/product';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnChanges, OnDestroy {

  @Input() product: Product;
  // Se tiene que especificar el tipo de valor que tiene que emitir EventEmitter
  // Se puede inficar el valor por defecto que puede emitit en el new
  @Output() productClicked: EventEmitter<string> = new EventEmitter();

  today = new Date();

  constructor(private cartService: CartService) {
    console.log('1. constructor');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('2. ngOnChanges');
    console.log(changes);
  }
  // Se ejecuta solo una vez cuando el componente ha sido renderizado
  ngOnInit(): void {
    console.log('3. ngOnInit');
  }

  // ngDoCheck() {
  //   console.log('4. ngDoCheck');
  // }

  // Se visualiza cuando es removido desde la interfaz
  ngOnDestroy(){
    console.log('5. ngDoCheck');
  }

  addCart() {
    console.log('añadir al carrito');
    this.productClicked.emit(this.product.id);
    this.cartService.addCart(this.product);
  }


  /* La forma en que Angular opera su ciclo de vida es
    * Primero se crea el constructor
    * Detecta cambios
    * Setea valor iniciales y lo pinta en pantalla */


}
