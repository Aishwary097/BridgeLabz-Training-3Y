"use strict";

function mountStudentForm() {
  const root = document.createElement("main");
  root.innerHTML = `
    <form class="student-form" novalidate>
      <h1>Student Registration</h1>
      <label>Name<input name="name" autocomplete="name" required></label>
      <label>Email<input name="email" type="email" autocomplete="email" required></label>
      <label>Phone<input name="phone" type="tel" inputmode="numeric" maxlength="10" required></label>
      <label>Password<input name="password" type="password" autocomplete="new-password" required></label>
      <button type="submit">Register</button>
      <p class="form-message" aria-live="polite"></p>
    </form>`;
  const style = document.createElement("style");
  style.textContent = ".student-form{max-width:440px;margin:40px auto;padding:28px;border:1px solid #dce3eb;border-radius:16px;font:16px/1.5 Arial,sans-serif;box-shadow:0 12px 36px #152c4515}.student-form h1{margin-top:0}.student-form label{display:block;margin:16px 0}.student-form input{box-sizing:border-box;display:block;width:100%;margin-top:6px;padding:11px;border:2px solid #cbd5e1;border-radius:8px}.student-form input.valid{border-color:#16834b}.student-form input.invalid{border-color:#cf3345}.student-form button{padding:11px 18px;border:0;border-radius:8px;background:#173f74;color:white;font-weight:700}.form-message{min-height:24px;margin-bottom:0;color:#cf3345}";
  document.head.append(style);
  document.body.append(root);

  const form = root.querySelector("form");
  const message = root.querySelector(".form-message");
  const validators = {
    name: /^[A-Za-z]+(?:[ '\u2019-][A-Za-z]+)*$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^\d{10}$/,
    password: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let formIsValid = true;

    for (const input of form.querySelectorAll("input")) {
      const isValid = validators[input.name].test(input.value.trim());
      input.classList.toggle("valid", isValid);
      input.classList.toggle("invalid", !isValid);
      formIsValid = isValid && formIsValid;
    }

    message.textContent = formIsValid ? "Registration details are valid." : "Check the highlighted fields and try again.";
    message.style.color = formIsValid ? "#16834b" : "#cf3345";
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mountStudentForm, { once: true });
} else {
  mountStudentForm();
}
