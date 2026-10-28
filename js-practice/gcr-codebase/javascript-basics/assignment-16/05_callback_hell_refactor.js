"use strict";

function runCallbackPipeline() {
  setTimeout(() => {
    console.log("Callback pipeline: design");
    setTimeout(() => {
      console.log("Callback pipeline: build");
      setTimeout(() => {
        console.log("Callback pipeline: test");
        setTimeout(() => {
          console.log("Callback pipeline: deploy");
          setTimeout(() => {
            console.log("Callback pipeline: celebrate");
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}

function waitForStage(stage) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Async pipeline: ${stage}`);
      resolve();
    }, 1000);
  });
}

async function runAsyncPipeline() {
  for (const stage of ["design", "build", "test", "deploy", "celebrate"]) {
    await waitForStage(stage);
  }
  console.log("Async/await keeps each step in a readable sequence without deeply nested callbacks.");
}

runCallbackPipeline();
runAsyncPipeline().catch((error) => console.log(`Async pipeline failed: ${error.message}`));
