import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styles: [
  ]
})
export class DemoComponent implements OnInit {
  title = 'platzi-store';
  power = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
