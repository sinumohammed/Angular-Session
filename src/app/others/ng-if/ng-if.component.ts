import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  courses:any;

  constructor() { 
    this.courses=[];
    //this.courses=[1,2,3];
  }

  ngOnInit() {
  }

}
