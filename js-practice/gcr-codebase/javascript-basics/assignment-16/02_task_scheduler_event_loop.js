"use strict";

console.log("Start");

setTimeout(() => {
  console.log("Timeout callback (macrotask)");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise callback (microtask)");
});

console.log("Synchronous log");
console.log("End");
Promise.resolve().then(() => {
  console.log("The current script finishes first, then queued Promise microtasks run before timer macrotasks.");
});
