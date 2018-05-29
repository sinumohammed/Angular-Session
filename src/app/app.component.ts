import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  
  // directives [<app-ng-if></app-ng-if>,<app-ng-switch-case></app-ng-switch-case>]
  //template: `<app-ng-switch-case></app-ng-switch-case>`,

  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'John Doe';
  
  
  onClick(){
    console.log("clicked");
  }
}
