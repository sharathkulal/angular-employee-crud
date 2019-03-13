import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
    //Since directives are used like attributes, we need to use square brackets with selector name.
    selector: '[appSelectValidator]',
    //Register our validator with Angular validators 
    providers: [{
        provide: NG_VALIDATORS,//Opaque Token (contains list of all validators)
        useExisting: SelectRequiredValidatorDirective, //our custom validator
        multi: true //add this validator to its list
    }]
})
export class SelectRequiredValidatorDirective implements Validator {
    //input properties mostly will have same name as selector, else we need to specify an alias
    @Input('appSelectValidator') defaultValue : string;

    //the returned value will be in errors collection and we can use this in angular forms
    validate(control: AbstractControl): {[key:string]: any} | null {
        console.log("checking "+control.value+" against "+this.defaultValue)
        return control.value === this.defaultValue ? {'defaultSelected': true} : null;
    }
}