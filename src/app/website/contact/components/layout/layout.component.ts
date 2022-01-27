import { Component, OnInit, OnDestroy } from '@angular/core';
import { GeneratorService } from '@core/services/generator.service';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { EmployeeData } from 'src/app/models/employee.model';

const names = ['nicolas', 'juan', 'felipe', 'maria'];

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {

  
  salesList: EmployeeData[] = [];
  bList: EmployeeData[] = [];
  valueSuscribe: number;
  valueAsync$: Observable<number>;
  subs$: Subscription;

  constructor(
    private generatorService: GeneratorService
  ) {
    /* Como no se solicitan datos que dependan de un tiempo y es un Observable
    que solo se suscribe en el render (HTML) se realiza en el constructor */
    //Se asigna la referencia del Observable
    this.valueAsync$ = this.generatorService.getData()
    .pipe(
      //Intercepta el flujo de datos para poder visualizar la data que llega
      tap(num => console.log('tap num', num))
    );
  }

  ngOnInit() {
    this.salesList = this.generatorService.generate(names, [10, 20], 10);
    this.bList = this.generatorService.generate(names, [10, 20], 10);

    /* Si no se realiza un unsubscribe de este observable continua 
    emitiendo datos aun cuando el componente ya se haya eliminado */
    //Se guarda la referencia de la suscripción para poder hacer el unsubscribe 
    this.subs$ = this.generatorService.getData().subscribe(value => {
      this.valueSuscribe = value;
      console.log('valueSuscribe', this.valueSuscribe );
    });
  }

  addItem(list: EmployeeData[], label: string) {
    list.unshift({
      label,
      num: this.generatorService.generateNumber([10, 20]),
    });
  }

  //Se cancela la suscripción cuando se elimine el componente
  ngOnDestroy() {
    this.subs$.unsubscribe();
  }

}
