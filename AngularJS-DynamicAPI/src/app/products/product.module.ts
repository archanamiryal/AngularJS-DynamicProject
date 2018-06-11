import {NgModule} from '@angular/core'
import { RouterModule } from '@angular/router';

import { ProductComponent } from './product.component';
import { ProductPipe } from './ProductUpper.pipe';
import { ProducutAddValue } from './productAddvalue.pipe';
import { ProductFilterPipe } from './product-filter.component';
import { ProductFilterCodePipe } from './product-filtercode.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductService } from './product.service';
import { SharedModule } from '../shared/shared.mo/shared.module';



@NgModule({

    imports:[
        SharedModule,
        RouterModule.forChild([
            {path:'products', component:ProductComponent},
            {path:'products/:id', component:ProductDetailComponent}
        ])
    ],
    declarations:[
        ProductComponent,
        ProductPipe,
        ProducutAddValue,
        ProductFilterPipe,
        ProductDetailComponent
    ],
    providers:[
        ProductService
    ]

})

export class ProductModule
{

}