"use strict";

class Book {
  constructor(title, author, ISBN) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.isIssued = false;
  }

  issueBook() {
    if (this.isIssued) {
      return `${this.title} is already issued.`;
    }

    this.isIssued = true;
    return `${this.title} has been issued.`;
  }

  returnBook() {
    if (!this.isIssued) {
      return `${this.title} was not issued.`;
    }

    this.isIssued = false;
    return `${this.title} has been returned.`;
  }
}

const books = [
  new Book("The Alchemist", "Paulo Coelho", "9780061122415"),
  new Book("Atomic Habits", "James Clear", "9780735211292"),
  new Book("Deep Work", "Cal Newport", "9781455586691")
];

function showAvailableBooks() {
  const availableBooks = books.filter((book) => !book.isIssued);
  console.log("Available books:");
  for (const book of availableBooks) {
    console.log(`${book.title} by ${book.author} (ISBN ${book.ISBN})`);
  }
}

function issueBookByISBN(ISBN) {
  const book = books.find((entry) => entry.ISBN === ISBN);
  console.log(book ? book.issueBook() : `No book found for ISBN ${ISBN}.`);
}

showAvailableBooks();
issueBookByISBN("9780735211292");
showAvailableBooks();
console.log(books[1].returnBook());
