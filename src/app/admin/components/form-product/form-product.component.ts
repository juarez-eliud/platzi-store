import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products.service';
import { MyValidators } from 'src/app/utils/validators';


@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductsService,
    private router: Router
  ) { 
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      price: [0, [Validators.required, MyValidators.isPriceValid]],
      image: [''],
      description: ['', Validators.required]
    });
  }

  saveProduct(event: Event) {
    /* Para evitar que un formulario al enviar la data recargue la página 
    se envía el evento y se evita ese comportamiento con preventDefault() */
    event.preventDefault();
    if(this.form.valid) {
      const product = this.form.value;
      this.productService.createProduct(product).subscribe(productAPI => {
        console.log(productAPI);
        this.router.navigate(['./admin/products']);
      });
    }
    console.log(this.form.value);
  }

  /* Para evitar repetir muchas veces la instrucción: form.get('price') en el template
  se realiza un metodo que lo obtiene directamente y solo se manda llamar la función */
  get priceField() {
    return this.form.get('price');
  }

  get hasErrorPriceInvalid(): boolean {
    return this.form.get('price').hasError('price_invalid');
  }

}
