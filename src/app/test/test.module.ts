import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPreferencesService } from '../employee/userPreferences.service';
import { EmployeeService } from '../employee/employee.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers:[EmployeeService,UserPreferencesService]
})
export class TestModule { }
