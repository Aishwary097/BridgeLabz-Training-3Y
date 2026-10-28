"use strict";

function runDeliveryStep(step, duration) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.15) {
        reject(new Error(`${step.label} failed.`));
        return;
      }

      console.log(step.message);
      resolve();
    }, duration);
  });
}

async function runPipeline() {
  const steps = [
    { label: "Take order", message: "Step 1: Order taken" },
    { label: "Prepare food", message: "Step 2: Food prepared" },
    { label: "Pack order", message: "Step 3: Package ready" },
    { label: "Dispatch order", message: "Step 4: Out for delivery" },
    { label: "Deliver order", message: "Delivery completed!" }
  ];

  console.log("Start Pipeline");

  try {
    for (const step of steps) {
      const duration = 1000 + Math.floor(Math.random() * 1001);
      await runDeliveryStep(step, duration);
    }
  } catch (error) {
    console.log(`Pipeline failed! ${error.message}`);
  }
}

runPipeline();
