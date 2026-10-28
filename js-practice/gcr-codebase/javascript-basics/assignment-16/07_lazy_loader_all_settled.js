"use strict";

function loadModule(moduleName, duration, shouldReject) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject(new Error(`${moduleName} failed to load.`));
        return;
      }

      resolve(`${moduleName} Loaded`);
    }, duration);
  });
}

async function loadDashboardModules() {
  const startedAt = Date.now();
  const modules = ["Profile", "Posts", "Messages"];
  const failedModuleIndex = Math.floor(Math.random() * modules.length);
  const results = await Promise.allSettled([
    loadModule("Profile", 2000, failedModuleIndex === 0),
    loadModule("Posts", 1500, failedModuleIndex === 1),
    loadModule("Messages", 1000, failedModuleIndex === 2)
  ]);

  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`${modules[index]} succeeded: ${result.value}`);
    } else {
      console.log(`${modules[index]} failed: ${result.reason.message}`);
    }
  });

  console.log(`Total time: ${Date.now() - startedAt} ms`);
}

loadDashboardModules().catch((error) => console.log(`Dashboard loading failed: ${error.message}`));
