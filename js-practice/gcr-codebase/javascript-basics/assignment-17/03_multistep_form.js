"use strict";

function mountMultistepForm() {
  const style = document.createElement("style");
  style.textContent = ".multistep-form{max-width:480px;margin:40px auto;padding:28px;border:1px solid #dce3eb;border-radius:16px;font:16px/1.5 Arial,sans-serif;box-shadow:0 12px 36px #152c4515}.multistep-form h1{margin-top:0}.multistep-form label{display:block;margin:18px 0}.multistep-form input{box-sizing:border-box;display:block;width:100%;margin-top:6px;padding:11px;border:1px solid #cbd5e1;border-radius:8px}.multistep-form button{padding:10px 15px;border:0;border-radius:8px;background:#173f74;color:white;cursor:pointer}.multistep-form button:disabled{opacity:.5}.step-actions{display:flex;justify-content:space-between}.step-message{min-height:24px;color:#bd2738}";
  document.head.append(style);

  const root = document.createElement("main");
  root.className = "multistep-form";
  root.innerHTML = `<h1>Registration</h1><p class="step-indicator" aria-live="polite"></p><form novalidate><div class="step-content"></div><p class="step-message" aria-live="polite"></p><div class="step-actions"><button type="button" data-action="back">Back</button><button type="button" data-action="next">Next</button></div></form>`;
  document.body.append(root);

  const steps = [
    { label: "Name", name: "name", type: "text", validate: (value) => value.trim().length >= 2, error: "Enter your name (at least 2 characters)." },
    { label: "Email", name: "email", type: "email", validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()), error: "Enter a valid email address." },
    { label: "Password", name: "password", type: "password", validate: (value) => value.length >= 6, error: "Password must contain at least 6 characters." }
  ];
  const values = {};
  const content = root.querySelector(".step-content");
  const message = root.querySelector(".step-message");
  const indicator = root.querySelector(".step-indicator");
  const backButton = root.querySelector('[data-action="back"]');
  const nextButton = root.querySelector('[data-action="next"]');
  let currentStep = 0;
  let isComplete = false;

  function renderStep() {
    const step = steps[currentStep];
    indicator.textContent = `Step ${currentStep + 1} of ${steps.length}`;
    content.innerHTML = `<label>${step.label}<input name="${step.name}" type="${step.type}" autocomplete="${step.name}" required></label>`;
    content.querySelector("input").value = values[step.name] ?? "";
    backButton.disabled = currentStep === 0;
    nextButton.textContent = currentStep === steps.length - 1 ? "Finish" : "Next";
    nextButton.hidden = false;
    message.textContent = "";
    isComplete = false;
  }

  nextButton.addEventListener("click", () => {
    const step = steps[currentStep];
    const input = content.querySelector("input");
    values[step.name] = input.value;

    if (!step.validate(input.value)) {
      message.textContent = step.error;
      input.focus();
      return;
    }

    if (currentStep < steps.length - 1) {
      currentStep += 1;
      renderStep();
      return;
    }

    indicator.textContent = "Registration complete";
    content.replaceChildren();
    const heading = document.createElement("h2");
    heading.textContent = "Summary";
    content.append(heading);
    for (const [label, value] of Object.entries(values)) {
      const detail = document.createElement("p");
      detail.textContent = `${label}: ${label === "password" ? "•".repeat(value.length) : value}`;
      content.append(detail);
    }
    message.textContent = "All three steps are complete.";
    isComplete = true;
    nextButton.hidden = true;
  });

  backButton.addEventListener("click", () => {
    if (isComplete) {
      currentStep = steps.length - 1;
      renderStep();
      return;
    }

    if (currentStep > 0) {
      const step = steps[currentStep];
      values[step.name] = content.querySelector("input").value;
      currentStep -= 1;
      renderStep();
    }
  });

  renderStep();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mountMultistepForm, { once: true });
} else {
  mountMultistepForm();
}
