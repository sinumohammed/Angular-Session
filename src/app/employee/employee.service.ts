import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from '../employee/employee';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
// import toPromise operator
// import 'rxjs/add/operator/toPromise';
// import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService {

  constructor(private _httpClient: HttpClient) { } //DI

  getEmployees(): Observable<IEmployee[]> {
    let _url = 'https://damp-bastion-45968.herokuapp.com/api/employees/';
    return this._httpClient.get(_url)
      .catch(this.handleError);
  }

  getEmployeeByCode(empCode):Observable<IEmployee>{
    let _url='https://damp-bastion-45968.herokuapp.com/api/employees/'+empCode;
    return this._httpClient.get<IEmployee>(_url)
    .catch(this.handleError);
  }

  // Notice we changed the return type of the method to Promise<IEmployee>
  // from Observable<IEmployee>. We are using toPromise() operator to
  // return a Promise. When an exception is thrown handlePromiseError()
  // logs the error to the console and throws the exception again
//   getEmployeeByCode(empCode: string): Promise<IEmployee> {
//     return this._httpClient.get("https://damp-bastion-45968.herokuapp.com/api/employees/" + empCode)
//         .map((response: any) => <any>response.json())
//         .toPromise()
//         .catch(this.handlePromiseError);
// }

  // This method is introduced to handle exceptions
  handlePromiseError(error: any) {
    console.error(error);
    throw (error);
  }

  handleError(error: any) {
    console.error(error);
    return Observable.throw(error);
  }
}
