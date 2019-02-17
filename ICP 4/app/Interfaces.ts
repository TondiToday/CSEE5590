
export interface ICalculation {
  operation?: string;
  operand1: number;
  operand2?: number;
  result: number;
}

export interface ICalculator {
  add: (operand1: number, operand2: number) => ICalculation;
  subtract: (operand1: number, operand2: number) => ICalculation;
  multiply: (operand1: number, operand2: number) => ICalculation;
  divide: (operand1: number, operand2: number) => ICalculation;

  lastResult: number;
}
