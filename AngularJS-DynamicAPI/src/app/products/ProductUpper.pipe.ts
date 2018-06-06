import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name:'prodUpper'
})

export class ProductPipe implements PipeTransform
{

    transform(value:string,typeRequired:string):string{
        //let outPut=value.toUpperCase()
        //return outPut;

        if(typeRequired=="upper")
        {
             value=value.toUpperCase()
        }
        else{
            value=value.toLowerCase()
        }

        return value
    }

}