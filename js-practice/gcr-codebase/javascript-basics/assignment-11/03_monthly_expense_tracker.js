const expenses = [
  { category: "Food", amount: 6800 },
  { category: "Travel", amount: 2400 },
  { category: "Rent", amount: 12000 },
  { category: "Bills", amount: 3100 },
  { category: "Leisure", amount: 1700 }
];

let totalExpenses = 0;

for (const expense of expenses) {
  totalExpenses += expense.amount;
}

const averageExpense = totalExpenses / expenses.length;
const taxRate = 0.1;
const finalAmountAfterTax = totalExpenses + totalExpenses * taxRate;

console.table([
  { label: "Total expenses", amount: totalExpenses.toFixed(2) },
  { label: "Average expense", amount: averageExpense.toFixed(2) },
  { label: "Final amount after 10% tax", amount: finalAmountAfterTax.toFixed(2) }
]);
