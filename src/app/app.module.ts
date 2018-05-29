import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service

import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeTitlePipe } from './employee/employeeTitle.pipe';
import { EmployeeCountComponent } from './employee/employee-count/employee-count.component';
import { SimpleComponent } from './others/simple/simple.component';
import { NgIfComponent } from './others/ng-if/ng-if.component';
import { NgSwitchCaseComponent } from './others/ng-switch-case/ng-switch-case.component';
import { CustomHoverDirective } from './others/custom-hover.directive';
import { PageNotFoundComponent } from './others/page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { TestModule } from './test/test.module';
import { EmployeeService } from './employee/employee.service';
import { UserPreferencesService } from './employee/userPreferences.service';

// Routes is an array of Route objects
// Each route maps a URL path to a component
// The 3rd route specifies the route to redirect to if the path
// is empty. In our case we are redirecting to /home
// The 5th route (**) is the wildcard route. This route is used
// if the requested URL doesn't match any other routes already defined
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'employees/:code', component: EmployeeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
// To let the router know about the routes defined above,
// pass "appRoutes" constant to forRoot(appRoutes) method

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeTitlePipe,
    EmployeeCountComponent,
    SimpleComponent,
    NgIfComponent,
    NgSwitchCaseComponent,
    CustomHoverDirective,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,TestModule,
    RouterModule.forRoot(appRoutes,{ useHash: true })
  ], 
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
