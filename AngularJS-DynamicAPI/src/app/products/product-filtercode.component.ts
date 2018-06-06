import {Pipe,PipeTransform} from '@angular/core';
import { IProduct } from './product.model';
@Pipe({
    name:'ProductFilterCode'
})

export class ProductFilterCodePipe implements PipeTransform
{
   transform(value:IProduct[],filterBy:string):IProduct[]{

    filterBy=filterBy ? filterBy.toLowerCase():null
    return filterBy? value.filter((product:IProduct)=>
           product.productCode.toLowerCase().indexOf(filterBy)!==-1):value

   }
}