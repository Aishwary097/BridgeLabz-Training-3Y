const purchaseTotal = 6800;
let discountPercentage;

if (purchaseTotal >= 10000) {
  discountPercentage = 25;
} else if (purchaseTotal >= 5000) {
  discountPercentage = 15;
} else if (purchaseTotal >= 2000) {
  discountPercentage = 5;
} else {
  discountPercentage = 0;
}

const discountAmount = Math.round(purchaseTotal * discountPercentage) / 100;
const finalPrice = Math.round((purchaseTotal - discountAmount) * 100) / 100;

console.table([
  { label: "Original total", amount: purchaseTotal.toFixed(2) },
  { label: "Discount percentage", amount: `${discountPercentage}%` },
  { label: "Final price after discount", amount: finalPrice.toFixed(2) }
]);
