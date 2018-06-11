import{Injectable} from '@angular/core';
import { IProduct } from './product.model';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { IMusic } from '../music/music.model';


@Injectable()

export class ProductService
{
    private _productUrl = "https://ngapi4.herokuapp.com/api/getProducts";
    private _musicsUrl="https://ngmusicdb.herokuapp.com/api/getmusic";

    constructor(private _http:Http){}
    
      getMovies():Observable<IMusic[]>{
        return this._http.get(this._musicsUrl)
                .map((response:Response)=>  <IMusic[]> response.json()[0].artists)
                .catch(this.handleError);
    }
    
    getProductsData() :Observable<IProduct[]>{
        return this._http.get(this._productUrl)
                .map((response:Response) => <IProduct[]>response.json())
                .catch(this.handleError)
    }

    private handleError(error:Response){
        return Observable.throw(error.statusText)
    }
}