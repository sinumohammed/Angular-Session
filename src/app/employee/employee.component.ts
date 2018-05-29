import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { ActivatedRoute,Router } from '@angular/router';
import { IEmployee } from './employee';

@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.css'],
    providers:[EmployeeService]   
})
export class EmployeeComponent implements OnInit {
   
    columnSpan: number = 2;

    showDetails: boolean = false;

    toggleDetails(): void {
        this.showDetails = !this.showDetails;
    }

    employee: IEmployee;
    statusMessage: string = 'Loading data. Please wait...';

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
    onBackButtonClick() :void {
        this._router.navigate(['/employees']);
    } 
    

}
