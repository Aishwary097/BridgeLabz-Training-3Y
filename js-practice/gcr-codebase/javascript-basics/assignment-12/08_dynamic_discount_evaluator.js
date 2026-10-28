const cart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 2500 },
  { item: "Book", category: "education", price: 600 }
];

const subtotal = cart.reduce((total, product) => total + product.price, 0);
let discountedTotal = 0;

for (const product of cart) {
  let itemDiscount = 0;

  if (product.category === "electronics") {
    itemDiscount = 0.1;
  } else if (product.category === "fashion") {
    itemDiscount = 0.05;
  }

  discountedTotal += product.price * (1 - itemDiscount);
}

const extraDiscount = subtotal > 50000 ? 0.05 : 0;
const finalTotal = discountedTotal * (1 - extraDiscount);

console.table([
  { label: "Cart subtotal", amount: subtotal.toFixed(2) },
  { label: "Total after category discounts", amount: discountedTotal.toFixed(2) },
  { label: "Extra cart discount", amount: `${extraDiscount * 100}%` },
  { label: "Final total", amount: finalTotal.toFixed(2) }
]);
