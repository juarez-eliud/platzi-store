import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  emailField: FormControl;
  constructor() {
    this.emailField = new FormControl('',[
      Validators.required,
      Validators.email
    ]);
    /* Los cambios de este control los retorna en forma de stream de datos es decir
    con el patrón observable que va escuchando los cambios de este campo */
    // this.emailField.valueChanges.subscribe(value => console.log(value));
  }

  ngOnInit(): void {
  }

  registerMail(){
    
  }

}
