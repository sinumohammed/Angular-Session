// Step 1 : Import OnChanges and SimpleChanges
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

// The selector "app-simple" will be used as the directive
// where we want to use this component. Notice we are
// also using the simpleInput property with interpolation
// to display the value it receives from the parent
// component

@Component({
  selector: 'app-simple',
  template: `You entered : {{simpleInput}}`,
  //templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})

// Step 2 : Implement OnChanges Life Cycle Hook interface
export class SimpleComponent implements OnInit {

  // Input property. As and when this property changes
  // ngOnChanges life cycle hook method is called

  @Input()
  simpleInput: string;

  constructor() { }

  ngOnInit() {
  }
  // Step 3 : Implementation for the hook method
  // This code logs the current and previous value
  // to the console.
  ngOnChanges(changes: SimpleChanges) {
    for (let propertyName in changes) {
      let change = changes[propertyName];
      let current = JSON.stringify(change.currentValue);
      let previous = JSON.stringify(change.previousValue);
      console.log(propertyName + ': currentValue = '
        + current + ', previousValue = ' + previous);
      // The above line can be rewritten using
      // placeholder syntax as shown below
      // console.log(`${propertyName}: currentValue
      // = ${current }, previousValue = ${previous }`);
    }
  }
}
