import {Component} from'@angular/core'
import { Employee } from '../forms/models/employeeform.model';
import { FormPoster } from './service/form.poster';
import { NgForm } from '@angular/forms';


@Component(
    {
        templateUrl:'./form.component.html'

    }
)
export class FormComponent
{
    hasCodeLang:boolean=false;
    languages=["AngularJS","NodeJS","ReactJS","MongoDB"]
    model=new Employee("Arch","Miry","a@a.com","harsika",true,"female","NodeJS");

    constructor(private formPosterObj:FormPoster)
    {

    }
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
    validateCodeLang(event):void{
        if(this.model.codeLang=="default")
        {
            this.hasCodeLang=true;
        }
        else{
            this.hasCodeLang=false;
        }

    }
    submitForm(form:NgForm)
    {
        console.log(this.model)
        this.formPosterObj.postEmployeeForm(this.model)
        .subscribe((data)=>console.log('success',data),
                    (error)=>console.log('error',error))
        
    }
}