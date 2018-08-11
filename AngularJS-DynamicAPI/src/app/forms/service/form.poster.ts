import { Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

import { Employee } from '../models/employeeform.model';

@Injectable()

export class FormPoster{
    constructor(private httpObj:Http)
    {

    }

    private extractData(res:Response)
    {
        let body=res.json();
        return body.fields || {}

    }
    private handleError(error:any)
    {
        return Observable.throw(error.statusText)
    }
    postEmployeeForm(employee:Employee):Observable<any>
    {
           //console.log("Data is coming from Service",employee)
           let body=JSON.stringify(employee);
           let headers=new Headers({'Content-Type':'application/json'});
           let options=new RequestOptions({headers:headers});

           return this.httpObj.post('http://localhost:3100/postemployee',body,options)
                      .map(this.extractData)
                      .catch(this.handleError)
    }

    

}