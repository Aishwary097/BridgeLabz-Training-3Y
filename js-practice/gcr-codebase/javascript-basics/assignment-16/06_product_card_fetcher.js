"use strict";

async function fetchProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}.`);
    }

    const products = await response.json();

    for (const product of products) {
      console.log(`Product: ${product.title}`);
      console.log(`Price: $${product.price}`);
      console.log(`Image: ${product.image}`);
    }

    if (typeof document !== "undefined") {
      renderProducts(products);
    }
  } catch (error) {
    console.log("Failed to load products. Please try again.", error.message);

    if (typeof document !== "undefined") {
      const status = document.createElement("p");
      status.textContent = "Failed to load products. Please try again.";
      document.body.append(status);
    }
  }
}

function renderProducts(products) {
  const style = document.createElement("style");
  style.textContent = ".product-dashboard{font:14px/1.45 Arial,sans-serif;color:#1d2939;max-width:1100px;margin:32px auto;padding:20px}.product-dashboard h1{text-align:center}.product-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:16px}.product-card{display:flex;flex-direction:column;align-items:center;gap:12px;padding:18px;border:1px solid #e3e8ef;border-radius:12px;box-shadow:0 3px 12px #102a430d;text-align:center}.product-card img{width:100%;height:140px;object-fit:contain}.product-card h2{font-size:14px;margin:0}.product-card p{margin:0;color:#087f5b;font-weight:700}";
  document.head.append(style);

  const dashboard = document.createElement("main");
  dashboard.className = "product-dashboard";
  dashboard.innerHTML = "<h1>Fake Store - Product Dashboard</h1><section class=\"product-grid\" aria-label=\"Products\"></section>";
  const grid = dashboard.querySelector(".product-grid");

  for (const product of products) {
    const card = document.createElement("article");
    card.className = "product-card";
    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.title;
    const title = document.createElement("h2");
    title.textContent = product.title;
    const price = document.createElement("p");
    price.textContent = `$${product.price}`;
    card.append(image, title, price);
    grid.append(card);
  }

  document.body.append(dashboard);
}

fetchProducts();
