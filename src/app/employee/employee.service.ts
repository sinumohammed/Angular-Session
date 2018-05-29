import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { IEmployee } from '../employee/employee';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class EmployeeService {

  constructor(private _httpClient:HttpClient) { } 

  getEmployees(): Observable<IEmployee[]> {
    let _url='https://damp-bastion-45968.herokuapp.com/api/employees/';
    return this._httpClient.get(_url)
    .catch(this.handleError);
  }
  getEmployeeByCode(empCode):Observable<IEmployee>{
    let _url='https://damp-bastion-45968.herokuapp.com/api/employees/'+empCode;
    return this._httpClient.get(_url)
    .catch(this.handleError);
  }
  handleError(error:any){
    console.error(error);
    return Observable.throw(error);
  }
}
