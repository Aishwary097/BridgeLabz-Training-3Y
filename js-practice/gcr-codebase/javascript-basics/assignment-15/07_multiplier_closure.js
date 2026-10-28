"use strict";

function makeMultiplier(multiplier) {
  return function multiply(number) {
    return number * multiplier;
  };
}

const triple = makeMultiplier(3);
console.log(`Triple of 5: ${triple(5)}`);
console.log("The returned function closes over and retains the multiplier value.");
