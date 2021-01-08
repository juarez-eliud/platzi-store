import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{
  //ElementRef modifica el comportamiento del elemento por defecto del dom
  constructor(
    private element: ElementRef
  ) {  }

  //Custom directive with params
  @Input() backgroundColor: string;
  @Input() color: string;

  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = this.backgroundColor;
    this.element.nativeElement.style.color = this.color;
  }


}
