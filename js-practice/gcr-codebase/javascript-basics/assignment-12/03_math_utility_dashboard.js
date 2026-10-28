const x = 16.75;
const roundedValue = Math.round(x);
const squareRoot = Math.sqrt(x);
const cube = Math.pow(x, 3);
const randomNumber = Math.floor(Math.random() * 41) + 10;

console.log(`Math Dashboard for ${x}`);
console.log(`Rounded value: ${roundedValue}`);
console.log(`Square root: ${squareRoot.toFixed(2)}`);
console.log(`Power of three: ${cube.toFixed(2)}`);
console.log(`Random number from 10 to 50: ${randomNumber}`);
