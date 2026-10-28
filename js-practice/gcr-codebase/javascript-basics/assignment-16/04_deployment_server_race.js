"use strict";

function getServerResponse(serverName, duration) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) {
        reject(new Error(`${serverName} failed to respond.`));
        return;
      }

      resolve(`${serverName} responded in ${duration / 1000} seconds.`);
    }, duration);
  });
}

const serverA = getServerResponse("Server A", 2000);
const serverB = getServerResponse("Server B", 3000);

Promise.all([serverA, serverB])
  .then((responses) => console.log(`Deployment completed for all servers: ${responses.join(" | ")}`))
  .catch((error) => console.log(`Deployment status: ${error.message}`));

Promise.race([serverA, serverB])
  .then((response) => console.log(`Fastest response: ${response}`))
  .catch((error) => console.log(`Fastest request failed: ${error.message}`));
