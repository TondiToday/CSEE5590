import { Component } from '@angular/core';
import { ICalculation } from './Interfaces';
import { ICalculator } from './Interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements ICalculator {
  title = 'CalculatorICP';
  public lastResult: number;

  constructor() {
    this.lastResult = 0;
  }

  add = function (op1: number, op2: number) {
    var calculation: ICalculation = new Calculation(op1, op2, 'add');
    this.lastResult = calculation.result;
    return calculation;
  }

  subtract = function (op1: number, op2: number) {
    var calculation: ICalculation = new Calculation(op1, op2, 'subtract');
    this.lastResult = calculation.result;
    return calculation;
  }

  multiply = function (op1: number, op2: number) {
    var calculation: ICalculation = new Calculation(op1, op2, 'multiply');
    this.lastResult = calculation.result;
    return calculation;
  }

  divide = function (op1: number, op2: number) {
    var calculation: ICalculation = new Calculation(op1, op2, 'divide');
    this.lastResult = calculation.result;
    return calculation;
  };
  function calculateAll( a ){
  }
}
