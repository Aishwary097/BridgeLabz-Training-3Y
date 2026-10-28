"use strict";

function outer() {
  console.log(`Outer count before declaration: ${count}`);
  var count = 5;

  function innerWithOwnCount() {
    console.log(`Inner local count before assignment: ${count}`);
    var count = 10;
  }

  const innerArrowUsingOuterCount = () => {
    console.log(`Arrow closure reads outer count: ${count}`);
  };

  console.log("Call stack: outer -> inner function");
  innerWithOwnCount();
  console.log("Call stack: outer -> inner arrow function");
  innerArrowUsingOuterCount();
  console.log(`Outer count after inner calls: ${count}`);
}

outer();
console.log("The inner function's var is hoisted in its own scope; the arrow without a local count closes over the outer binding.");
