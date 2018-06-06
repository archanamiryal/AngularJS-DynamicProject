import {Component,OnInit} from '@angular/core';
import {IProduct} from './product.model'
import {ProductService} from './product.service'

@Component({
    selector:'prod-comp',
    templateUrl:'./product.component.html',
    //styles: ['thead{color:red}']
    styleUrls:['./product.component.css']

})

export class ProductComponent implements OnInit
{
    title:String="@@@@ProductList";
    showTable:boolean=true;
    imageWidth:number=50;
    showImage:boolean=false;
    filteredData:String;
    errorMessage:string
    products:IProduct[]

    constructor(private productService_obj:ProductService)
    {

    }
    toggleimage():void{
        this.showImage=!this.showImage
    }

    ngOnInit():void{
           
       this.productService_obj.getProductsData()
        .subscribe((data)=>this.products=data,
                   (err)=>this.errorMessage=err)
                   
    }
    onDataRecive(message: string):void{
        this.title = "Product List >>>>>>"+message
    }
}


