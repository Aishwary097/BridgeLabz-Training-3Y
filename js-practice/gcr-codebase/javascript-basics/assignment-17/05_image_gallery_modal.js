"use strict";

function mountImageGallery() {
  const images = [
    { src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=700&q=80", alt: "Mountain lake" },
    { src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=700&q=80", alt: "Mountain peaks" },
    { src: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=700&q=80", alt: "Green valley" },
    { src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=700&q=80", alt: "Forest path" },
    { src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=80", alt: "Coastline" },
    { src: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=700&q=80", alt: "Ocean waves" }
  ];
  const style = document.createElement("style");
  style.textContent = ".image-gallery{max-width:1000px;margin:36px auto;padding:20px;font:16px/1.5 Arial,sans-serif}.gallery-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:14px}.gallery-grid button{padding:0;border:0;border-radius:12px;overflow:hidden;background:#e9edf2;cursor:zoom-in}.gallery-grid img{display:block;width:100%;height:190px;object-fit:cover;transition:transform .2s}.gallery-grid button:hover img{transform:scale(1.04)}.gallery-modal{position:fixed;inset:0;z-index:9999;display:grid;place-items:center;padding:30px;background:#08111de6}.gallery-modal[hidden]{display:none}.gallery-modal img{max-width:min(100%,1000px);max-height:85vh;object-fit:contain;border-radius:12px;box-shadow:0 20px 80px #0008}";
  document.head.append(style);

  const root = document.createElement("main");
  root.className = "image-gallery";
  root.innerHTML = `<h1>Travel Gallery</h1><div class="gallery-grid"></div><div class="gallery-modal" role="dialog" aria-modal="true" aria-label="Image preview" hidden><img alt=""></div>`;
  document.body.append(root);

  const grid = root.querySelector(".gallery-grid");
  const modal = root.querySelector(".gallery-modal");
  const preview = modal.querySelector("img");

  for (const imageData of images) {
    const button = document.createElement("button");
    button.type = "button";
    const image = document.createElement("img");
    image.src = imageData.src;
    image.alt = imageData.alt;
    button.append(image);
    grid.append(button);
  }

  grid.addEventListener("click", (event) => {
    const image = event.target.closest("img");
    if (!image) {
      return;
    }

    preview.src = image.src;
    preview.alt = image.alt;
    modal.hidden = false;
  });

  modal.addEventListener("click", () => {
    modal.hidden = true;
    preview.removeAttribute("src");
  });
  preview.addEventListener("click", (event) => event.stopPropagation());
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mountImageGallery, { once: true });
} else {
  mountImageGallery();
}
