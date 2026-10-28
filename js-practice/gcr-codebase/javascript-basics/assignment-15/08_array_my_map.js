"use strict";

Object.defineProperty(Array.prototype, "myMap", {
  configurable: true,
  writable: true,
  value(callback, thisArg) {
    if (this === null || this === undefined) {
      throw new TypeError("myMap cannot be called on null or undefined.");
    }
    if (typeof callback !== "function") {
      throw new TypeError("myMap callback must be a function.");
    }

    const source = Object(this);
    const length = Math.min(Math.max(Number(source.length) || 0, 0), Number.MAX_SAFE_INTEGER);
    const result = new Array(length);

    for (let index = 0; index < length; index += 1) {
      if (index in source) {
        result[index] = callback.call(thisArg, source[index], index, source);
      }
    }

    return result;
  }
});

const doubledNumbers = [1, 2, 3].myMap((number) => number * 2);
console.log("myMap result:", doubledNumbers);
