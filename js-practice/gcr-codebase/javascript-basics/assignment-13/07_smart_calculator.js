"use strict";

class InvalidOperationError extends Error {
  constructor(operation) {
    super(`Unsupported operation: ${operation}`);
    this.name = "InvalidOperationError";
  }
}

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;

function calculate(operation, firstNumber, secondNumber) {
  switch (operation) {
    case "add":
      return firstNumber + secondNumber;
    case "divide":
      if (secondNumber === 0) {
        throw new RangeError("Cannot divide by zero.");
      }
      return firstNumber / secondNumber;
    case "power":
      return Math.pow(firstNumber, secondNumber);
    case "root":
      if (firstNumber < 0) {
        throw new RangeError("Cannot calculate the square root of a negative number.");
      }
      return Math.sqrt(firstNumber);
    case "subtract":
      return firstNumber - secondNumber;
    default:
      throw new InvalidOperationError(operation);
  }
}

for (const operation of operations) {
  try {
    const result = calculate(operation, num1, num2);
    console.log(`${operation}: ${result}`);
  } catch (error) {
    console.log(`${operation}: ${error.name} - ${error.message}`);
  }
}

try {
  calculate("multiply", num1, num2);
} catch (error) {
  console.log(`Unknown operation: ${error.name} - ${error.message}`);
}

try {
  calculate("root", -num1, num2);
} catch (error) {
  console.log(`Invalid root: ${error.name} - ${error.message}`);
}
