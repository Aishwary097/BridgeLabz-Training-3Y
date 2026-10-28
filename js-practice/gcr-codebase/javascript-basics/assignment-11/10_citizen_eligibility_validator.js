const age = 22;
const isCitizen = true;
let eligibilityMessage;

if (isCitizen) {
  if (age >= 21) {
    eligibilityMessage = "Eligible for all services.";
  } else if (age >= 18 && age <= 20) {
    eligibilityMessage = "Eligible to vote only.";
  } else {
    eligibilityMessage = "Not eligible yet.";
  }
} else if (age >= 18) {
  eligibilityMessage = "Only age criteria met.";
} else {
  eligibilityMessage = "Not eligible yet.";
}

console.log(eligibilityMessage);
