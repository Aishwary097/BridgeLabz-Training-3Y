"use strict";

class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  applyDiscount(percent) {
    if (!Number.isFinite(percent) || percent < 0 || percent > 100) {
      throw new RangeError("Discount must be between 0 and 100 percent.");
    }

    this.price *= 1 - percent / 100;
    return this.price;
  }

  getDetails() {
    return `#${this.id} ${this.name} | ${this.category} | $${this.price.toFixed(2)}`;
  }
}

const products = [
  new Product(1, "Wireless Headphones", 1599, "Audio"),
  new Product(2, "Notebook Set", 349, "Stationery"),
  new Product(3, "Mechanical Keyboard", 2899, "Accessories")
];

products[0].applyDiscount(10);

for (const product of products) {
  console.log(product.getDetails());
}

console.log("Products priced above 1000:");
for (const product of products.filter((item) => item.price > 1000)) {
  console.log(product.getDetails());
}
