"use strict";

class Cart {
  constructor() {
    this.items = [];
  }

  addItem(name, price, quantity) {
    if (!name || !Number.isFinite(price) || price < 0 || !Number.isInteger(quantity) || quantity < 1) {
      throw new TypeError("Add an item with a name, non-negative price, and positive whole-number quantity.");
    }

    this.items.push({ name, price, quantity });
  }

  getTotal() {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  applyCoupon(code) {
    const match = /^(SAVE|DISC)(\d{1,2})$/.exec(code.trim().toUpperCase());

    if (!match) {
      return { valid: false, message: "Coupon must match SAVE20 or DISC10 format." };
    }

    const discountPercent = Number(match[2]);

    if (discountPercent < 1 || discountPercent > 90) {
      return { valid: false, message: "Coupon discount must be between 1% and 90%." };
    }

    const total = this.getTotal();
    const finalTotal = total * (1 - discountPercent / 100);
    return { valid: true, discountPercent, total, finalTotal };
  }
}

const cart = new Cart();
cart.addItem("Wireless Headphones", 2499, 1);
cart.addItem("Notebook", 180, 3);

const couponResult = cart.applyCoupon("SAVE20");
console.log(`Cart total: ${cart.getTotal().toFixed(2)}`);

if (couponResult.valid) {
  console.log(`Coupon discount: ${couponResult.discountPercent}%`);
  console.log(`Final total: ${couponResult.finalTotal.toFixed(2)}`);
} else {
  console.log(couponResult.message);
}
