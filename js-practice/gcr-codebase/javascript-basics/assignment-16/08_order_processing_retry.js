"use strict";

function submitOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        reject(new Error("Order submission failed."));
        return;
      }

      resolve("Order submitted successfully.");
    }, 500);
  });
}

async function processOrder() {
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const result = await submitOrder();
      console.log(`Attempt ${attempt}: Success - ${result}`);
      return result;
    } catch (error) {
      console.log(`Attempt ${attempt}: Failed - ${error.message}`);
    }
  }

  throw new Error("Order could not be processed.");
}

processOrder().catch((error) => console.log(`Order status: ${error.message}`));
