import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ProductsService } from '@core/services/products.service';
import { MyValidators } from 'src/app/utils/validators';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  form: FormGroup;
  id: string;
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { 
    this.buildForm();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id =  params.id;
      this.productService.getProduct(this.id).subscribe(product => {
        /* Como los campos del objeto product coinciden con los del formulario
        se pasa directamente, en caso de que no sea el caso se pasa en forma de objeto
        haciendo coincidir las propiedades del objeto con las del formulario:
        this.form.patchValue({ id: product.id, description: product.description }); */
        this.form.patchValue(product);
      });
    });
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      price: [0, [Validators.required, MyValidators.isPriceValid]],
      image: [''],
      description: ['', Validators.required]
    });
  }

  saveProduct(event: Event) {
    
    event.preventDefault();
    if(this.form.valid) {
      const product = this.form.value;
      this.productService.updateProduct(this.id, product).subscribe(productAPI => {
        console.log(productAPI);
        this.router.navigate(['./admin/products']);
      });
    }
    console.log(this.form.value);
  }

 
  get priceField() {
    return this.form.get('price');
  }

  get hasErrorPriceInvalid(): boolean {
    return this.form.get('price').hasError('price_invalid');
  }

}
