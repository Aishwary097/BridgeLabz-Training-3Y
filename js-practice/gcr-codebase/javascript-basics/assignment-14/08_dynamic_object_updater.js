"use strict";

function mountUserEditor() {
  const user = { name: "John", email: "john@mail.com", age: 21 };
  const root = document.createElement("main");
  root.innerHTML = `
    <form class="user-editor">
      <h1>Edit Profile</h1>
      <label>Name<input name="name" required></label>
      <label>Email<input name="email" type="email" required></label>
      <label>Age<input name="age" type="number" min="1" required></label>
      <button type="submit">Save changes</button>
    </form>
    <section class="user-output" aria-live="polite"></section>`;
  const style = document.createElement("style");
  style.textContent = ".user-editor,.user-output{max-width:440px;margin:30px auto;padding:26px;border:1px solid #dce3eb;border-radius:16px;font:16px/1.5 Arial,sans-serif;box-shadow:0 12px 36px #152c4515}.user-editor h1{margin-top:0}.user-editor label{display:block;margin:16px 0}.user-editor input{box-sizing:border-box;display:block;width:100%;margin-top:6px;padding:11px;border:1px solid #cbd5e1;border-radius:8px}.user-editor button{padding:11px 18px;border:0;border-radius:8px;background:#173f74;color:white;font-weight:700}.user-output h2{margin-top:0}";
  document.head.append(style);
  document.body.append(root);

  const form = root.querySelector("form");
  const output = root.querySelector(".user-output");

  function renderUser() {
    output.replaceChildren();
    const heading = document.createElement("h2");
    heading.textContent = "Updated User";
    output.append(heading);

    for (const [label, value] of Object.entries(user)) {
      const detail = document.createElement("p");
      detail.textContent = `${label[0].toUpperCase()}${label.slice(1)}: ${value}`;
      output.append(detail);
    }

    console.log("Current user:", { ...user });
  }

  form.elements.name.value = user.name;
  form.elements.email.value = user.email;
  form.elements.age.value = user.age;
  renderUser();

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    user.name = form.elements.name.value.trim();
    user.email = form.elements.email.value.trim();
    user.age = Number(form.elements.age.value);
    renderUser();
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mountUserEditor, { once: true });
} else {
  mountUserEditor();
}
