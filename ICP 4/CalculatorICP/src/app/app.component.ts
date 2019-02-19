import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculatorApp';
  firstString = '';
  secondString = '';
  caculateArray = [];

  clear() {
    this.secondString = '';
    this.firstString = '';
    this.caculateArray = [];
  }


  addAll(symbol) {
    this.caculateArray.push(this.firstString);
    this.caculateArray.push(symbol);
    this.secondString += this.firstString + symbol;
  }
  add(a, b) {
    const c = Number(this.caculateArray[a]) + Number(this.caculateArray[b]);
    this.caculateArray[a] = c.toString();
    this.caculateArray.splice(a + 1, 2);
  }

  substractAll(a, b) {
    const c = Number(this.caculateArray[a]) - Number(this.caculateArray[b]);
    this.caculateArray[a] = c.toString();
    this.caculateArray.splice(a + 1, 2);
  }
  clearAll() {
    this.firstString = '';
  }

  modulus(a, b) {
    const c = Number(this.caculateArray[a]) % Number(this.caculateArray[b]);
    this.caculateArray[a] = c.toString();
    this.caculateArray.splice(a + 1, 2);
  }

  multiplyAll(a, b) {
    const c = Number(this.caculateArray[a]) * Number(this.caculateArray[b]);
    this.caculateArray[a] = c.toString();
    this.caculateArray.splice(a + 1, 2);
  }

  divideAll(a, b) {
    const c = Number(this.caculateArray[a]) / Number(this.caculateArray[b]);
    this.caculateArray[a] = c.toString();
    this.caculateArray.splice(a + 1, 2);
  }





  calculate() {
    for (var i = 0; i < this.caculateArray.length; i++) {
      if (this.caculateArray[i] == "+") {
        this.add(i - 1, i + 1);
        i = i - 2;
      } else if (this.caculateArray[i] == "-") {
        this.substractAll(i - 1, i + 1);
        i = i - 2;
      }
    }
    for ( i = 0; i < this.caculateArray.length; i++) {
      if (this.caculateArray[i] == "*") {
        this.multiplyAll(i - 1, i + 1);
        i = i - 2;
      } else if (this.caculateArray[i] == "/") {
        this.divideAll(i - 1, i + 1);
        i = i - 2;
      } else if (this.caculateArray[i] == "%") {
        this.modulus(i - 1, i + 1);
        i = i - 2;
      }
    }
  }

  calculateAll(num) {
    switch (num) {
      case 'Clear':
      {
        this.clear();
        break;

      }
      case '*':
      {
        this.addAll('*');
        this.clearAll();
        break;
      }
      case '-':
      {
        this.addAll('-');
        this.clearAll();
        break;
      }
      case '+':
      {
        this.addAll('+');
        this.clearAll();
        break;
      }
      case '/':
      {
        this.addAll('/');
        this.clearAll();
        break;
      }

      case '%':
      {
        this.addAll('%');
        this.clearAll();
        break;
      }
      case '=':
      {
        this.addAll('=');
        this.caculateArray.pop();
        this.calculate();
        this.firstString = this.caculateArray[0];
        this.secondString = '';
        this.caculateArray.pop();
        break;
      }

      default:
      {
        this.firstString += num;
        break;
      }

    }

  }
}
