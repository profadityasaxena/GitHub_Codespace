// Library Management System

class Library {
    constructor() {
        this.books = [];
    }

    // Add a new book to the library
    addBook(title, author, copies) {
        const book = {
            id: this.books.length + 1,
            title,
            author,
            copies,
        };
        this.books.push(book);
        console.log(`Book "${title}" added to the library.`);
    }

    // Borrow a book from the library
    borrowBook(title) {
        const book = this.books.find(b => b.title === title);
        if (book && book.copies > 0) {
            book.copies--;
            console.log(`You borrowed "${title}".`);
        } else {
            console.log(`Sorry, "${title}" is not available.`);
        }
    }

    // Return a book to the library
    returnBook(title) {
        const book = this.books.find(b => b.title === title);
        if (book) {
            book.copies++;
            console.log(`You returned "${title}".`);
        } else {
            console.log(`"${title}" does not belong to this library.`);
        }
    }

    // Display all books in the library
    displayBooks() {
        console.log("Books in the library:");
        this.books.forEach(book => {
            console.log(
                `ID: ${book.id}, Title: "${book.title}", Author: ${book.author}, Copies: ${book.copies}`
            );
        });
    }
}

// Example usage
const library = new Library();
library.addBook("The Great Gatsby", "F. Scott Fitzgerald", 3);
library.addBook("1984", "George Orwell", 2);
library.displayBooks();
library.borrowBook("1984");
library.displayBooks();
library.returnBook("1984");
library.displayBooks();