import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { EmployeeData } from 'src/app/models/employee.model';

const fibonacci = (num: number): number => {
  if (num === 1 || num === 2) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
};

/* Com ChangeDetectionStrategy.OnPush escucha los eventos solo de la lista
que está cambiando a diferencia del ChangeDetectionStrategy.Default que 
escucha continuamente a las dos listas */
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  @Input() title: string;
  @Input() data: EmployeeData[] = [];
  @Output() add = new EventEmitter<string>();
  label: string;

  constructor() { }

  ngOnInit(): void {
  }

  addItem() {
    this.add.emit(this.label);
    this.label = '';
  }

  calc(item: EmployeeData) {
    console.log('list', this.title);
    return fibonacci(item.num);
  }

}
