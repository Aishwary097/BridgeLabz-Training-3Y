"use strict";

function getBugs() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldFail = Math.random() < 0.3;

      if (shouldFail) {
        reject(new Error("Bug tracker API request failed."));
        return;
      }

      resolve(["UI glitch", "API timeout", "Login failure"]);
    }, 1000);
  });
}

getBugs()
  .then((bugs) => {
    console.log("Bug report:");
    console.table(bugs.map((bug, index) => ({ number: index + 1, bug })));
  })
  .catch((error) => console.log(`Could not load bugs: ${error.message}`));
