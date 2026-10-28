"use strict";

function mountProductListManager() {
  const style = document.createElement("style");
  style.textContent = ".product-manager{max-width:620px;margin:40px auto;padding:28px;border:1px solid #dce3eb;border-radius:16px;font:16px/1.5 Arial,sans-serif;box-shadow:0 12px 36px #152c4515}.product-manager h1{margin-top:0}.product-entry{display:flex;gap:8px}.product-entry input,.product-item input{min-width:0;flex:1;padding:10px;border:1px solid #cbd5e1;border-radius:8px}.product-entry button,.product-item button{padding:9px 13px;border:0;border-radius:8px;background:#173f74;color:white;cursor:pointer}.product-list{padding:0;list-style:none}.product-item{display:flex;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid #e6eaf0}.product-name{flex:1}.product-item .delete-product{background:#ad2d3c}";
  document.head.append(style);

  const root = document.createElement("main");
  root.className = "product-manager";
  root.innerHTML = `<h1>Product List</h1><form class="product-entry"><input name="product" aria-label="New product" placeholder="Add a product" required><button type="submit">Add</button></form><ul class="product-list" aria-label="Products"></ul>`;
  document.body.append(root);

  const form = root.querySelector("form");
  const list = root.querySelector("ul");
  let editingItem = null;

  function saveEdit(item) {
    const input = item?.querySelector("input");
    if (!input) {
      return;
    }

    const name = input.value.trim() || item.dataset.previousName;
    const label = document.createElement("span");
    label.className = "product-name";
    label.textContent = name;
    input.replaceWith(label);
    item.dataset.previousName = name;
    editingItem = null;
  }

  function beginEdit(item) {
    if (editingItem && editingItem !== item) {
      saveEdit(editingItem);
    }

    const label = item.querySelector(".product-name");
    const input = document.createElement("input");
    input.value = label.textContent;
    item.dataset.previousName = label.textContent;
    label.replaceWith(input);
    input.focus();
    editingItem = item;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = form.elements.product.value.trim();
    if (!name) {
      return;
    }

    const item = document.createElement("li");
    item.className = "product-item";
    item.dataset.previousName = name;
    const label = document.createElement("span");
    label.className = "product-name";
    label.textContent = name;
    item.append(label);
    item.insertAdjacentHTML("beforeend", '<button type="button" data-action="edit">Edit</button><button type="button" class="delete-product" data-action="delete">Delete</button>');
    list.append(item);
    form.reset();
  });

  list.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action]");
    if (!button) {
      return;
    }

    const item = button.closest("li");
    if (button.dataset.action === "delete") {
      if (editingItem === item) {
        editingItem = null;
      }
      item.remove();
    } else {
      beginEdit(item);
    }
  });

  document.addEventListener("click", (event) => {
    if (editingItem && !editingItem.contains(event.target)) {
      saveEdit(editingItem);
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mountProductListManager, { once: true });
} else {
  mountProductListManager();
}
