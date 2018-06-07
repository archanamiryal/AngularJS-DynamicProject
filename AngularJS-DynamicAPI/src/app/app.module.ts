import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router'

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

import { HomeComponent } from './home/home.component';
import { OrderComponent } from './orders/order.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { NotFoundComponent } from './notfound/notfound.component';




@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            {path:'products', component:ProductComponent},
            {path:'products/:id', component:ProductDetailComponent},
            {path:'orders', component:OrderComponent},
            {path:'home',component:HomeComponent},
            {path:'', redirectTo:'home', pathMatch:'full'},
            {path:'**', component:NotFoundComponent}
        ])
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
        StarComponent,
        HomeComponent,
        OrderComponent,
        ProductDetailComponent,
        NotFoundComponent
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