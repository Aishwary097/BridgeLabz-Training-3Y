"use strict";

function mountMousePathLogger() {
  const style = document.createElement("style");
  style.textContent = ".mouse-logger{max-width:540px;margin:40px auto;padding:24px;border:1px solid #dce3eb;border-radius:16px;font:16px/1.5 Arial,sans-serif}.mouse-logger .tracking-box{position:relative;box-sizing:border-box;width:400px;height:400px;max-width:100%;border:2px solid #173f74;border-radius:12px;background:#f5f8fc;overflow:hidden}.mouse-logger output{display:block;margin:12px 0;font-weight:700}.mouse-dot{position:absolute;width:12px;height:12px;border-radius:50%;background:#e33143;transform:translate(-50%,-50%);pointer-events:none}";
  document.head.append(style);

  const root = document.createElement("main");
  root.className = "mouse-logger";
  root.innerHTML = `<h1>Mouse Coordinates</h1><div class="tracking-box" aria-label="Move or double-click in this box"></div><output aria-live="polite">Move the pointer inside the box.</output>`;
  document.body.append(root);

  const box = root.querySelector(".tracking-box");
  const output = root.querySelector("output");

  box.addEventListener("mousemove", (event) => {
    output.textContent = `clientX: ${event.clientX} | clientY: ${event.clientY}`;
  });

  box.addEventListener("dblclick", (event) => {
    const bounds = box.getBoundingClientRect();
    const dot = document.createElement("span");
    dot.className = "mouse-dot";
    dot.style.left = `${event.clientX - bounds.left}px`;
    dot.style.top = `${event.clientY - bounds.top}px`;
    box.append(dot);
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mountMousePathLogger, { once: true });
} else {
  mountMousePathLogger();
}
