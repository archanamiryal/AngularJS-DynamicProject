import {Component} from'@angular/core'
import { Employee } from '../forms/employeeform.model';

@Component(
    {
        templateUrl:'./form.component.html'

    }
)
export class FormComponent
{
    languages=["AngularJS","NodeJS","ReactJS","MongoDB"]
    model=new Employee("Arch","asert",true,"female","NodeJS");

    firstToUpper(value:string)
    {
        if(value.length>0)
        {
            this.model.fname=value.charAt(0).toUpperCase()+value.slice(1)
        }
        else{
            this.model.fname=value

        }
    }
}