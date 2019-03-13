import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[appConfirmEqualValidator]',
    providers: [{
        provide: NG_VALIDATORS,//Opaque Token (contains list of all validators)
        useExisting: ConfirmEqualvalidatorDirective, //our custom validator
        multi: true //add this validator to its list
    }]
})
export class ConfirmEqualvalidatorDirective implements Validator {
    //Holds name of field
    @Input() appConfirmEqualValidator : string;

    validate(control: AbstractControl) : {[key:string]: any} | null {
        //traverse to 1 step above (i.e. form) and fetch the form control
        const controltoCompare = control.parent.get(this.appConfirmEqualValidator);
        if(controltoCompare && controltoCompare.value !== control.value) {
            return {'notEqual': true};
        }
        return null;
    }
}