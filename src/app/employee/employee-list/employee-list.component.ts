import { UserPreferencesService } from './../userPreferences.service';
import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { IEmployee } from './../employee';

@Component({
    selector: 'app-employee-list',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {


    employees: IEmployee[];

    statusMessage: string = 'Loading data. Please wait...';

    // This property keeps track of which radio button is selected
    /// We have set the default value to All, so all the employees
    // are displayed in the table by default
    selectedEmployeeCountRadioButton: string = 'All';
    
    constructor(
        private _employeeService: EmployeeService,
        private _userPreferencesService: UserPreferencesService) {
        
    }

    ngOnInit() {
        // ngOnInit is called after the constructor and is generally used to perform tasks related to Angular bindings. 
        // For example, ngOnInit is the right place to call a service method to fetch data from a remote server. 
        // We can also do the same using a class constructor, but the general rule of thumb is, 
        // tasks that are time consuming should use ngOnInit instead of the constructor. 
        // As fetching data from a remote server is time consuming, 
        // the better place for calling the service method is ngOnInit. So

        // http service module subscribe data        
        this._employeeService.getEmployees()
            .subscribe(
                (employeesData) => this.employees = employeesData,
                (error) => {
                    this.statusMessage =
                        'Problem with the service. Please try again after sometime';
                    // Notice here we are logging the error to the browser console
                    console.error(error);
                },
                () => {
                    //console.error('completed');
                });

    }

    // singleton demonstration
    get colour(): string {
        return this._userPreferencesService.colourPreference;
    }
    
    set colour(value: string) {
        this._userPreferencesService.colourPreference = value;
    }
    

    getTotalEmployeesCount(): number {
        return this.employees.length;
    }

    getMaleEmployeesCount(): number {
        return this.employees.filter(e => e.code === 'Male').length;
    }

    getFemaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender === 'Female').length;
    }

    // Depending on which radio button is selected, this method updates
    // selectedEmployeeCountRadioButton property declared above
    // This method is called when the child component (EmployeeCountComponent)
    // raises the custom event - countRadioButtonSelectionChanged
    // The event binding is specified in employeeList.component.html
    onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
        console.log(this.selectedEmployeeCountRadioButton, " From parent");
    }

}
