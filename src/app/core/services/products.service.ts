import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Product } from '../../models/product';
import { throwError } from 'rxjs'
import { HandleHttpResponseError } from 'src/app/utils/handleError';
import * as Sentry from "@sentry/angular";

interface User {
  email: string;
  gender: string;
  phone: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {  

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.url_api}/products`);
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${environment.url_api}/products/${id}`);
  }

  createProduct(product: Product) {
    return this.http.post(`${environment.url_api}/products`, product)
  }

  /* Con partial solo se envía una parte de lo que se modificó y los demás
  atributos se quedan como opcionales */
  updateProduct(id: string, changes: Partial<Product>) {
    return this.http.put(`${environment.url_api}/products/${id}`, changes)
    .pipe(
      catchError(HandleHttpResponseError)
    );
  }

  deleteProduct(id: string) {
    return this.http.delete(`${environment.url_api}/products/${id}`)
    .pipe(
      catchError(this.handleError)
    );
  }

  getRandomUsers(): Observable<User[]> {
    return this.http.get('https://randomuser---.me/api/?results=2')
    .pipe(
      retry(3),
      /* El catch error siempre va antes de procesar la data ya que el error ocurre antes,
      si no hay error continua con la siguiente la cual es la de mapeo */
      catchError(this.handleError),
      map((response: any) => response.results as User[])
    );
  }

  getRandomUsersExample2(): Observable<User[]> {
    return this.http.get('https://randomuser.me/api/?results=2').pipe(
      map((response: any) => response.results.map(user => {
        return {
          email: user.email,
          gender: user.gender,
          phone: user.phone,
        } as User;
      }))
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error(error);
    Sentry.captureException(error);
    /* Como un observable es parte de un flujo de datos se 
    retorna un observable de tipo error */
    return throwError('ups algo salio mal');
  }





}
