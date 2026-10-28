"use strict";

function mountSubmitForm() {
  const style = document.createElement("style");
  style.textContent = ".submit-form{max-width:460px;margin:40px auto;padding:28px;border:1px solid #dce3eb;border-radius:16px;font:16px/1.5 Arial,sans-serif;box-shadow:0 12px 36px #152c4515}.submit-form h1{margin-top:0}.submit-form label{display:block;margin:16px 0}.submit-form input{box-sizing:border-box;display:block;width:100%;margin-top:6px;padding:11px;border:2px solid #cbd5e1;border-radius:8px}.submit-form input.invalid{border-color:#c83243}.field-error{min-height:20px;margin:4px 0;color:#c83243;font-size:14px}.submit-form button{padding:11px 18px;border:0;border-radius:8px;background:#173f74;color:#fff;font-weight:700;cursor:pointer}.submit-result{color:#16834b;font-weight:700}";
  document.head.append(style);

  const root = document.createElement("main");
  root.className = "submit-form";
  root.innerHTML = `<form novalidate><h1>Create Account</h1><label>Name<input name="name" autocomplete="name" required><span class="field-error" data-error="name" aria-live="polite"></span></label><label>Email<input name="email" type="email" autocomplete="email" required><span class="field-error" data-error="email" aria-live="polite"></span></label><label>Password<input name="password" type="password" autocomplete="new-password" required><span class="field-error" data-error="password" aria-live="polite"></span></label><button type="submit">Submit</button><p class="submit-result" aria-live="polite"></p></form>`;
  document.body.append(root);

  const form = root.querySelector("form");
  const validators = {
    name: (value) => value.trim().length > 0,
    email: (value) => value.includes("@"),
    password: (value) => value.length >= 6
  };
  const errorMessages = {
    name: "Name is required.",
    email: "Email must contain @.",
    password: "Password must be at least 6 characters."
  };

  function validateField(input) {
    const isValid = validators[input.name](input.value);
    const error = form.querySelector(`[data-error="${input.name}"]`);
    input.classList.toggle("invalid", !isValid);
    error.textContent = isValid ? "" : errorMessages[input.name];
    root.querySelector(".submit-result").textContent = "";
    return isValid;
  }

  form.addEventListener("input", (event) => {
    if (event.target.matches("input")) {
      validateField(event.target);
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputs = [...form.querySelectorAll("input")];
    const formIsValid = inputs.map(validateField).every(Boolean);

    if (formIsValid) {
      root.querySelector(".submit-result").textContent = "Form Submitted Successfully";
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mountSubmitForm, { once: true });
} else {
  mountSubmitForm();
}
