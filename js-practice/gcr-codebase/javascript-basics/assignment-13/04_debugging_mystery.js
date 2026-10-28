"use strict";

function showMessage() {
  const greeting = "Welcome!";
  debugger;
  console.log(greeting);
}

try {
  greeting = "Welcome!";
} catch (error) {
  console.log(`Strict mode rejected the undeclared assignment: ${error.name}`);
}

showMessage();
console.log("Declaring greeting inside the function keeps it in the correct scope.");
