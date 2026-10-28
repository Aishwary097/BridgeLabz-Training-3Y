const secretNumber = Math.floor(Math.random() * 50) + 1;
const userGuess = 24;
let guessMessage;

if (userGuess === secretNumber) {
  guessMessage = "Correct guess!";
} else if (Math.abs(userGuess - secretNumber) <= 3) {
  guessMessage = "Very close!";
} else if (userGuess > secretNumber) {
  guessMessage = "Too high.";
} else {
  guessMessage = "Too low.";
}

console.log(guessMessage);
