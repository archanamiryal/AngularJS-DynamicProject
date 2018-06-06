import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmpComponent } from './emp.component';
import { StudentComponent } from './Std.component';
import { ProductComponent } from './products/product.component';
import { ProductPipe } from './products/ProductUpper.pipe';
import { ProducutAddValue } from './products/productAddvalue.pipe';
import { ProductFilterPipe } from './products/product-filter.component';
import { ProductFilterCodePipe } from './products/product-filtercode.component';
import { StarComponent } from './shared/star.component';
import { ProductService } from './products/product.service';
import { HttpModule } from '@angular/http';




@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    //All componenet and Pipes declare here
    declarations:[
        AppComponent,
        EmpComponent,
        StudentComponent,
        ProductComponent,
        ProductPipe,
        ProducutAddValue,
        ProductFilterPipe,
        ProductFilterCodePipe,
        StarComponent
    ],
    //One main componenet come here
    bootstrap:[
        AppComponent
        
    ],
    //All the Injectable go here service comes here
    providers:[
        ProductService
    ]

})

export class AppModule
{

}