"use strict";

function buildPyramidWithLet(rowLimit = 5) {
  const rows = [];

  for (let row = 1; row <= rowLimit; row += 1) {
    let pattern = "";

    for (let star = 1; star <= row; star += 1) {
      pattern += star === 1 ? "*" : " *";
    }

    rows.push(pattern);
  }

  return rows;
}

function buildPyramidWithVar(rowLimit = 5) {
  var rows = [];

  for (var row = 1; row <= rowLimit; row += 1) {
    var pattern = "";

    for (var star = 1; star <= row; star += 1) {
      pattern += star === 1 ? "*" : " *";
    }

    rows.push(pattern);
  }

  return { rows, finalRowValue: row };
}

const userInput = 5;
const letPattern = buildPyramidWithLet(userInput);
const varPattern = buildPyramidWithVar(userInput);

console.log("Pyramid with let:");
for (const row of letPattern) {
  console.log(row);
}
console.log("Pyramid with var:");
for (const row of varPattern.rows) {
  console.log(row);
}
console.log(`Both patterns match: ${JSON.stringify(letPattern) === JSON.stringify(varPattern.rows)}`);
console.log(`The var loop counter remains available after the loop: ${varPattern.finalRowValue}`);

try {
  for (undeclaredRow = 0; undeclaredRow < 1; undeclaredRow += 1) {
    console.log(undeclaredRow);
  }
} catch (error) {
  console.log(`Strict mode caught the undeclared loop variable: ${error.name}`);
}
