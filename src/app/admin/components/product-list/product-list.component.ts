import {
  Component,
  OnInit
} from '@angular/core';
import {
  ProductsService
} from 'src/app/core/services/products.service';
import {
  Product
} from 'src/app/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products!: Product[];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productsService.getAllProducts().subscribe(productsAPI => {
      this.products = productsAPI;
    });
  }


  deleteProduct(id: string): void {
    this.productsService.deleteProduct(id).subscribe((rta) => {
      console.log('Product deleted rta::::', rta);
      if (rta) {
        const index = this.products.findIndex((product) => product.id === id);
        this.products.splice(index, 1);
        /* When passing an array to the table, it will only re - render
        if the array reference is changed because it is based on the principle of using an immutable data array. */
        this.products = [...this.products];// <-- Linea clave
      }
    });
  }

}



