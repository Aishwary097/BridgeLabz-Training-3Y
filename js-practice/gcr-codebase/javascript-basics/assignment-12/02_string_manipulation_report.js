const productName = "  wireless headphones PRO  ";
const trimmedProductName = productName.trim();
const lowercaseProductName = trimmedProductName.toLowerCase();
const titleCasedProductName = lowercaseProductName
  .split(" ")
  .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
  .join(" ");
const cleanedProductTitle = titleCasedProductName.replace("Pro", "Pro Edition");

console.log(`Product title: ${cleanedProductTitle}`);
console.log(`Title length: ${cleanedProductTitle.length}`);
