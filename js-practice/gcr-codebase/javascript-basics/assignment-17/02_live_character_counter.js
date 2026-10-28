"use strict";

function mountCharacterCounter() {
  const style = document.createElement("style");
  style.textContent = ".character-counter{max-width:560px;margin:40px auto;padding:28px;border:1px solid #dce3eb;border-radius:16px;font:16px/1.5 Arial,sans-serif;box-shadow:0 12px 36px #152c4515}.character-counter textarea{box-sizing:border-box;width:100%;min-height:170px;padding:14px;border:1px solid #cbd5e1;border-radius:10px;font:inherit;resize:vertical}.character-counter output{display:block;margin:10px 0;font-weight:700}.character-counter button{padding:10px 16px;border:0;border-radius:8px;background:#173f74;color:white;cursor:pointer}.counter-normal{color:#176b45}.counter-warning{color:#a46900}.counter-limit{color:#c3293c}";
  document.head.append(style);

  const root = document.createElement("main");
  root.className = "character-counter";
  root.innerHTML = `<h1>Message Composer</h1><textarea maxlength="100" aria-label="Message" placeholder="Write up to 100 characters"></textarea><output class="counter-normal" aria-live="polite">100 characters remaining</output><button type="button">Reset</button>`;
  document.body.append(root);

  const textarea = root.querySelector("textarea");
  const counter = root.querySelector("output");

  function updateCounter() {
    const remaining = 100 - textarea.value.length;
    counter.textContent = `${remaining} character${remaining === 1 ? "" : "s"} remaining`;
    counter.className = remaining === 0 ? "counter-limit" : remaining <= 20 ? "counter-warning" : "counter-normal";
  }

  textarea.addEventListener("beforeinput", (event) => {
    if (textarea.value.length >= 100 && event.inputType.startsWith("insert")) {
      event.preventDefault();
    }
  });
  textarea.addEventListener("input", updateCounter);
  root.querySelector("button").addEventListener("click", () => {
    textarea.value = "";
    updateCounter();
    textarea.focus();
  });
  updateCounter();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mountCharacterCounter, { once: true });
} else {
  mountCharacterCounter();
}
