import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { EmpComponent } from './emp.component';
import { StudentComponent } from './Std.component';
import { StarComponent } from './shared/star.component';
import { ProductService } from './products/product.service';

import { HomeComponent } from './home/home.component';
import { OrderComponent } from './orders/order.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { NotFoundComponent } from './notfound/notfound.component';
import { MusicComp } from './music/music.component';
import { ProductComponent } from './products/product.component';
import { ProductModule } from './products/product.module';
import { FormComponent } from './forms/form.component';
import { FormPoster } from './forms/service/form.poster';





@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        HttpModule,
        ProductModule,
        RouterModule.forRoot([
            {path:'orders', component:OrderComponent},
            {path:'form', component:FormComponent},
            {path:'home',component:HomeComponent},
            {path:'', redirectTo:'home', pathMatch:'full'},
            {path:'**', component:NotFoundComponent}
        ])
    ],
    //All componenet and Pipes declare here
    declarations:[
        AppComponent,
        HomeComponent,
        OrderComponent,
        NotFoundComponent,
        FormComponent
 
    ],
    //One main componenet come here
    bootstrap:[
        AppComponent
        
    ],
    //All the Injectable go here service comes here
    providers:[
        FormPoster
        
    ]

})

export class AppModule
{

}