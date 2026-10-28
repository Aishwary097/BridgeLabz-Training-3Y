"use strict";

function mountThemeSwitcher() {
  const style = document.createElement("style");
  style.textContent = "body.theme-light{background:#f7f8fb;color:#17202e}body.theme-dark{background:#171b24;color:#f2f4f8}body.theme-blue{background:#e8f2ff;color:#123a62}.theme-switcher{max-width:620px;margin:60px auto;padding:36px;border-radius:18px;background:color-mix(in srgb,currentColor 5%,transparent);font:16px/1.5 Arial,sans-serif}.theme-buttons{display:flex;flex-wrap:wrap;gap:10px}.theme-buttons button{padding:11px 18px;border:0;border-radius:9px;background:#173f74;color:#fff;font-weight:700;cursor:pointer}body.theme-dark .theme-buttons button{background:#779ee4}";
  document.head.append(style);

  const root = document.createElement("main");
  root.className = "theme-switcher";
  root.innerHTML = `<p>APPEARANCE</p><h1>Choose a theme</h1><p>The selected theme is saved on the body as a data attribute.</p><div class="theme-buttons"><button type="button" data-theme="light">Light</button><button type="button" data-theme="dark">Dark</button><button type="button" data-theme="blue">Blue</button></div><p class="theme-status" aria-live="polite"></p>`;
  document.body.append(root);

  root.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-theme]");
    if (!button) {
      return;
    }

    const theme = button.dataset.theme;
    document.body.setAttribute("class", `theme-${theme}`);
    document.body.setAttribute("data-theme", theme);
    root.querySelector(".theme-status").textContent = `Current theme: ${theme}`;
  });

  const savedTheme = document.body.getAttribute("data-theme");
  if (["light", "dark", "blue"].includes(savedTheme)) {
    document.body.setAttribute("class", `theme-${savedTheme}`);
    root.querySelector(".theme-status").textContent = `Current theme: ${savedTheme}`;
  } else {
    document.body.setAttribute("class", "theme-light");
    document.body.setAttribute("data-theme", "light");
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mountThemeSwitcher, { once: true });
} else {
  mountThemeSwitcher();
}
