import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IEmployee } from './employee';
// Import rxjs retry operator
// import { Observable } from 'rxjs/Rx';
// import 'rxjs/add/operator/retrywhen';
// import 'rxjs/add/operator/delay';
// import 'rxjs/add/operator/scan';


@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

    columnSpan: number = 2;

    showDetails: boolean = false;

    toggleDetails(): void {
        this.showDetails = !this.showDetails;
    }

    employee: IEmployee;
    statusMessage: string = 'Loading data. Please wait...';
    retryCount: number = 1;

    constructor(
        private _employeeService: EmployeeService,
        private _activatedRoute: ActivatedRoute,
        private _router: Router) { }


    ngOnInit() {
        let empCode: string = this._activatedRoute.snapshot.params['code'];

        this._employeeService.getEmployeeByCode(empCode)
            .subscribe((employeeData) => {
                if (employeeData == null) {
                    this.statusMessage =
                        'Employee with the specified Employee Code does not exist';
                }
                else {
                    this.employee = employeeData;
                }
            },
                (error) => {
                    this.statusMessage =
                        'Problem with the service. Please try again after sometime';
                    console.error(error);
                });
    }

    // using subscriberetry

    //     this._employeeService.getEmployeeByCode(empCode)
    //         // Retry 5 times maximum with a delay of 1 second
    //         // between each retry attempt
    //         .retryWhen((err) => {
    //             return err.scan((retryCount, val) => {
    //                 retryCount += 1;
    //                 if (retryCount < 6) {
    //                     this.statusMessage = 'Retrying...Attempt #' + retryCount;
    //                     return retryCount;
    //                 }
    //                 else {
    //                     throw (err);
    //                 }
    //             }, 0).delay(1000)
    //         })
    //         .subscribe((employeeData) => {
    //             if (employeeData == null) {
    //                 this.statusMessage =
    //                     'Employee with the specified Employee Code does not exist';
    //             }
    //             else {
    //                 this.employee = employeeData;
    //             }
    //         },
    //             (error) => {
    //                 this.statusMessage =
    //                     'Problem with the service. Please try again after sometime';
    //                 console.error(error);
    //             });
    // }




    // promise based
    // The only change that we need to make here is use
    // then() method instead of subscribe() method
    //     this._employeeService.getEmployeeByCode1(empCode)
    //         .then((employeeData) => {
    //             if (employeeData == null) {
    //                 this.statusMessage =
    //                     'Employee with the specified Employee Code does not exist';
    //             }
    //             else {
    //                 this.employee = employeeData;
    //             }
    //         },
    //             (error) => {
    //                 this.statusMessage =
    //                     'Problem with the service. Please try again after sometime';
    //                 console.error(error);
    //             });
    // }


    onBackButtonClick(): void {
        this._router.navigate(['/employees']);
    }


}
