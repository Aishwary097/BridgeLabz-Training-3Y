"use strict";

function prepareStep(stepName, duration) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.1) {
        reject(new Error(`${stepName} failed.`));
        return;
      }

      console.log(`${stepName} complete.`);
      resolve(stepName);
    }, duration);
  });
}

prepareStep("Water boiled", 1000)
  .then(() => prepareStep("Coffee brewed", 1200))
  .then(() => prepareStep("Coffee poured", 1000))
  .then(() => console.log("Coffee ready for the team!"))
  .catch((error) => console.log(`Coffee process failed: ${error.message}`));
