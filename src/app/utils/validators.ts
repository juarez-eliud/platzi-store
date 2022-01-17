import { AbstractControl } from "@angular/forms";

//Custom validator
export class MyValidators {
    static isPriceValid(control: AbstractControl) {
        const value = control.value;
        //console.log(value);
        if(value > 10000) {
            //Se envía un objeto con el error si y solo sí es inválido
            return {price_invalid: true};
        }
        return null;
    }
}