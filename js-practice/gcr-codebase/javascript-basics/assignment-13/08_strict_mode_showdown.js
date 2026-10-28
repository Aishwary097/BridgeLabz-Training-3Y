"use strict";

try {
  const sloppyFunction = new Function(
    "a",
    "a",
    "total = 10; const deleted = delete total; return { total, deleted };"
  );
  const sloppyResult = sloppyFunction(5, 10);
  console.log(`Without strict mode: ${JSON.stringify(sloppyResult)}`);
  delete globalThis.total;
} catch (error) {
  console.log(`Without strict mode error: ${error.name} - ${error.message}`);
}

try {
  new Function("a", "a", '"use strict"; return a;');
} catch (error) {
  console.log(`Strict mode duplicate parameters: ${error.name} - ${error.message}`);
}

try {
  const strictAssignment = new Function('"use strict"; total = 10;');
  strictAssignment();
} catch (error) {
  console.log(`Strict mode undeclared assignment: ${error.name} - ${error.message}`);
}

try {
  new Function('"use strict"; let total = 10; delete total;');
} catch (error) {
  console.log(`Strict mode delete restriction: ${error.name} - ${error.message}`);
}

function correctedDemo(firstValue, secondValue) {
  const total = firstValue + secondValue;
  return total;
}

console.log(`Correct ES6 version: ${correctedDemo(5, 10)}`);
