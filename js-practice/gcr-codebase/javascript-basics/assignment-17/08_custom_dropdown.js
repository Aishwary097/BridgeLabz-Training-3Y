"use strict";

function mountCustomDropdown() {
  const style = document.createElement("style");
  style.textContent = ".custom-dropdown{position:relative;max-width:360px;margin:60px auto;font:16px/1.5 Arial,sans-serif}.dropdown-toggle{width:100%;padding:13px 16px;border:1px solid #cbd5e1;border-radius:10px;background:#fff;text-align:left;font:inherit;cursor:pointer}.dropdown-options{position:absolute;top:calc(100% + 6px);left:0;right:0;z-index:5;margin:0;padding:6px;list-style:none;border:1px solid #dce3eb;border-radius:10px;background:#fff;box-shadow:0 12px 30px #152c4520}.dropdown-options[hidden]{display:none}.dropdown-options button{width:100%;padding:10px;border:0;border-radius:7px;background:#fff;text-align:left;font:inherit;cursor:pointer}.dropdown-options button:hover,.dropdown-options button:focus{background:#edf3fa}";
  document.head.append(style);

  const root = document.createElement("div");
  root.className = "custom-dropdown";
  root.innerHTML = `<button class="dropdown-toggle" type="button" aria-expanded="false">Choose a course</button><ul class="dropdown-options" hidden><li><button type="button">HTML</button></li><li><button type="button">CSS</button></li><li><button type="button">JavaScript</button></li><li><button type="button">Web Accessibility</button></li></ul>`;
  document.body.append(root);

  const toggle = root.querySelector(".dropdown-toggle");
  const options = root.querySelector(".dropdown-options");

  toggle.addEventListener("click", () => {
    options.hidden = !options.hidden;
    toggle.setAttribute("aria-expanded", String(!options.hidden));
  });

  options.addEventListener("click", (event) => {
    const option = event.target.closest("button");
    if (!option) {
      return;
    }

    toggle.textContent = option.textContent;
    options.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
  });

  document.addEventListener("click", (event) => {
    if (!root.contains(event.target)) {
      options.hidden = true;
      toggle.setAttribute("aria-expanded", "false");
    }
  }, true);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mountCustomDropdown, { once: true });
} else {
  mountCustomDropdown();
}
