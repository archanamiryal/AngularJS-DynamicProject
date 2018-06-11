
import {Component, OnInit} from '@angular/core';

import {ProductService} from '../products/product.service';
import { IMusic } from './music.model';

@Component({
    templateUrl:'./movies.compnent.html',
    styleUrls:['./movies.component.css']
})

export class MusicComp implements OnInit{
    movies:IMusic[];

    constructor(private _productService: ProductService){

    }
    ngOnInit():void{
        this._productService.getMovies()
            .subscribe(data =>{ this.movies = data; console.log('data',this.movies[0].albums[0].price)});
    }
}