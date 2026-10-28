"use strict";

class FormBuilder {
  constructor(fields, onSubmit) {
    this.fields = fields;
    this.onSubmit = onSubmit;
  }

  getFormData(form) {
    return Object.fromEntries(new FormData(form).entries());
  }

  render(container) {
    const form = document.createElement("form");
    form.className = "form-builder";
    form.innerHTML = `
      <h1>Profile Details</h1>
      ${this.fields.map((field) => `
        <label>${field.label}
          <input type="${field.type}" name="${field.name}" required>
        </label>`).join("")}
      <button type="submit">Submit</button>
      <pre aria-live="polite"></pre>`;
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const values = this.getFormData(form);
      form.querySelector("pre").textContent = JSON.stringify(values, null, 2);
      this.onSubmit(values);
    });
    container.append(form);
  }
}

function mountCustomForm() {
  const style = document.createElement("style");
  style.textContent = ".form-builder{max-width:440px;margin:40px auto;padding:28px;border:1px solid #dce3eb;border-radius:16px;font:16px/1.5 Arial,sans-serif;box-shadow:0 12px 36px #152c4515}.form-builder h1{margin-top:0}.form-builder label{display:block;margin:16px 0}.form-builder input{box-sizing:border-box;width:100%;margin-top:6px;padding:11px;border:1px solid #cbd5e1;border-radius:8px}.form-builder button{padding:11px 18px;border:0;border-radius:8px;background:#173f74;color:white;font-weight:700}.form-builder pre{white-space:pre-wrap}";
  document.head.append(style);
  new FormBuilder(
    [
      { type: "text", label: "Username", name: "username" },
      { type: "email", label: "Email", name: "email" },
      { type: "text", label: "Course", name: "course" }
    ],
    (values) => console.log("Submitted form data:", values)
  ).render(document.body);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mountCustomForm, { once: true });
} else {
  mountCustomForm();
}
