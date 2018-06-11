import {Component} from'@angular/core'
import { ActivatedRoute ,Router} from '@angular/router'

@Component({

    templateUrl:'./product-detail.component.html'
    

})
export class ProductDetailComponent
{
    name:string;
    image:string;
    description:string;
    title:string='Product Detail';
    constructor(private _route:ActivatedRoute,
                private _router:Router){}

    ngOnInit():void{
        let id = +this._route.snapshot.params['id'];
        this.title += `:${id}`

        this._route
            .queryParams
            .subscribe((params)=>{
                this.name=params['name']
                this.image=params['img']
                this.description=params['description']

            })


    }
    onBack():void
    {
        this._router.navigate(['/products'])
    }
}