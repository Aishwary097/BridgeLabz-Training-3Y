const numberResults = [];

for (let number = 1; number <= 30; number += 1) {
  let classification;

  if (number % 3 === 0 && number % 5 === 0) {
    classification = "FizzBuzz";
  } else if (number % 2 === 0) {
    classification = "Even";
  } else {
    classification = "Odd";
  }

  numberResults.push({ number, classification });
}

console.table(numberResults);
