"use strict";

console.log(`Hoisted var before assignment: ${score}`);
announce();

var score = 50;
let status = "ready";

function announce() {
  console.log("Game started");
}

function startGame() {
  console.log(`Game status: ${status}`);
}

startGame();

const announceWithArrow = () => console.log("Arrow function initialized before use.");
announceWithArrow();

console.log("Function declarations are hoisted with their definitions; var is initialized as undefined until assignment.");
console.log("The let binding is unavailable before initialization, and the arrow function must be initialized before it is called.");
