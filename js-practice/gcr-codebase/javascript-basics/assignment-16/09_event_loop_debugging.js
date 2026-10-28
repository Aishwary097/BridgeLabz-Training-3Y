"use strict";

console.log("Script start");

setTimeout(() => {
  console.log("Timeout callback");
  console.log("Promise callbacks run in the microtask queue before the event loop proceeds to timer macrotasks.");
}, 0);
Promise.resolve().then(() => console.log("Promise callback"));

console.log("Script end");
console.log("Expected order: Script start, Script end, Promise callback, Timeout callback.");
