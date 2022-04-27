class Calculator {
  constructor(operand) {
    this.operand = operand;
  }
  // TODO: answer here
  add(num) {
    this.operand += num;
    return this;
  }
  subtract(num) {
    this.operand -= num;
    return this;
  }
  multiply(num) {
    this.operand *= num;
    return this;
  }
  divide(num) {
    this.operand /= num;
    return this;
  }
  square(num) {
    this.operand = Math.pow(this.operand, num);
    return this;
  }
  squareRoot(num) {
    this.operand = Math.sqrt(this.operand, num);
    return this;
  }
}

module.exports = Calculator;