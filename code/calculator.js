const calculator = {
    sum: (num1, num2) => num1 + num2,
    sub: (num1, num2) => num1 - num2,
    div: (num1, num2) => parseFloat((num1 / num2).toFixed(1)),
    mul: (num1, num2) => parseFloat((num1 * num2).toFixed(1)),
  };

module.exports = calculator;