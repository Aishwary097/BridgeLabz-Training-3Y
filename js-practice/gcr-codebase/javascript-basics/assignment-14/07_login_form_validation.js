"use strict";

function mountLoginForm() {
  const root = document.createElement("main");
  root.innerHTML = `
    <form class="login-form" novalidate>
      <h1>Account Login</h1>
      <label>Username<input name="username" autocomplete="username" required></label>
      <label>Password<input name="password" type="password" autocomplete="current-password" required></label>
      <button type="submit">Sign in</button>
      <p class="login-message" aria-live="polite"></p>
    </form>`;
  const style = document.createElement("style");
  style.textContent = ".login-form{max-width:440px;margin:40px auto;padding:28px;border:1px solid #dce3eb;border-radius:16px;font:16px/1.5 Arial,sans-serif;box-shadow:0 12px 36px #152c4515}.login-form h1{margin-top:0}.login-form label{display:block;margin:16px 0}.login-form input{box-sizing:border-box;display:block;width:100%;margin-top:6px;padding:11px;border:1px solid #cbd5e1;border-radius:8px}.login-form button{padding:11px 18px;border:0;border-radius:8px;background:#173f74;color:white;font-weight:700}.login-message{white-space:pre-line}";
  document.head.append(style);
  document.body.append(root);

  const form = root.querySelector("form");
  const message = root.querySelector(".login-message");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = form.elements.username.value.trim();
    const password = form.elements.password.value;
    const errors = [];

    if (username.length < 5) {
      errors.push("Username must contain at least 5 characters.");
    }
    if (password.length < 8) {
      errors.push("Password must contain at least 8 characters.");
    }
    if (!/[A-Z]/.test(password)) {
      errors.push("Password must include an uppercase letter.");
    }
    if (!/[a-z]/.test(password)) {
      errors.push("Password must include a lowercase letter.");
    }
    if (!/\d/.test(password)) {
      errors.push("Password must include a number.");
    }
    if (!/[^A-Za-z0-9]/.test(password)) {
      errors.push("Password must include a special character.");
    }

    message.textContent = errors.length === 0 ? "Login details are valid." : errors.join("\n");
    message.style.color = errors.length === 0 ? "#16834b" : "#cf3345";
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mountLoginForm, { once: true });
} else {
  mountLoginForm();
}
