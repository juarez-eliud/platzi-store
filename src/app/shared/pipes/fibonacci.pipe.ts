import { Pipe, PipeTransform } from '@angular/core';

 /*La función de fibonacci se pasa a un pipe para que no se ejecute 
 por cada evento y se eproveche el cache de los resultados de los pipes puros */

const fibonacci = (num: number): number => {
  if (num === 1 || num === 2) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
};

@Pipe({
  name: 'fibonacci',
  pure: true
})
export class FibonacciPipe implements PipeTransform {

  transform(value: number): number {
    console.log('fibonacci');
    return fibonacci(value);
  }

}
