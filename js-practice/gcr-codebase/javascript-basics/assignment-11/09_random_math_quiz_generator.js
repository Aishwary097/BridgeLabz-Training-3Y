const firstNumber = Math.floor(Math.random() * 20) + 1;
const secondNumber = Math.floor(Math.random() * 20) + 1;
const operators = ["+", "-", "*", "/"];
const operator = operators[Math.floor(Math.random() * operators.length)];
let correctAnswer;

switch (operator) {
  case "+":
    correctAnswer = firstNumber + secondNumber;
    break;
  case "-":
    correctAnswer = firstNumber - secondNumber;
    break;
  case "*":
    correctAnswer = firstNumber * secondNumber;
    break;
  case "/":
    correctAnswer = (firstNumber / secondNumber).toFixed(2);
    break;
}

console.log(`Question: ${firstNumber} ${operator} ${secondNumber}`);
console.log(`Correct answer: ${correctAnswer}`);
