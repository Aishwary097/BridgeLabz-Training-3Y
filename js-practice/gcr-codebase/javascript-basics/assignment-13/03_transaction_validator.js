"use strict";

class TransactionValidationError extends Error {
  constructor(message, category) {
    super(message);
    this.name = "TransactionValidationError";
    this.category = category;
  }
}

const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];
const validTransactions = [];
const invalidTransactions = [];

for (let index = 0; index < transactions.length; index += 1) {
  const transaction = transactions[index];
  debugger;

  try {
    if (transaction === null || transaction === undefined) {
      throw new TransactionValidationError("Transaction entry is null or undefined.", "null-entry");
    }
    if (transaction.id === undefined || transaction.amount === undefined) {
      throw new TransactionValidationError("Transaction is missing an id or amount.", "missing-field");
    }
    if (typeof transaction.amount !== "number" || !Number.isFinite(transaction.amount)) {
      throw new TransactionValidationError("Transaction amount must be a finite number.", "invalid-amount");
    }
    if (transaction.amount < 0) {
      throw new TransactionValidationError("Transaction amount cannot be negative.", "negative-amount");
    }

    validTransactions.push(transaction);
  } catch (error) {
    invalidTransactions.push({
      line: index + 1,
      id: transaction?.id ?? "unknown",
      category: error.category ?? error.name,
      message: error.message
    });
  }
}

console.log("Valid transactions:", validTransactions);
console.log("Invalid transactions:", invalidTransactions);
console.log(`Successful transactions: ${validTransactions.length}`);
console.log(`Failed transactions: ${invalidTransactions.length}`);
