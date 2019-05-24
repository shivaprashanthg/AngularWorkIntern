import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee} from './employee';
import { Observable } from 'rxjs/Observable'; 
import 'rxjs/add/operator/catch'; 
import 'rxjs/add/observable/throw'; 


@Injectable()
export class EmployeeService {

  private _url : string  = "/assets/data/employees.json"

  constructor(private http : HttpClient ) { }

  getEmployees() : Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url)
                    .catch(this.errorHandler);  
    
  }

  errorHandler(error : HttpErrorResponse){
    return Observable.throw(error.message || "ServerError");
  }
    /*[
      {"id":1, "name": "andrew", "age":22},
      {"id":2, "name": "brad", "age":28},
      {"id":3, "name": "chris", "age":26},
      {"id":4, "name": "eklin", "age":25}
    ];*/
}
