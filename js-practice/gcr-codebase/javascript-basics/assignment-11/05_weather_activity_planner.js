const temperature = 22;
const isRaining = false;
const windSpeed = 12;
let activityAdvice;

if (isRaining || (temperature < 15 && windSpeed > 20)) {
  activityAdvice = isRaining
    ? "Stay indoors with hot coffee."
    : "Too cold and windy — stay home.";
} else if (temperature > 35) {
  activityAdvice = "Go swimming.";
} else {
  activityAdvice = "Perfect day for a walk.";
}

console.log(activityAdvice);
