// src/services/api.ts
import { Book } from "../types";

// Später ersetzen wir das mit echten API-Requests!
let books: Book[] = [
  {
    id: 1,
    title: "React in Action",
    author: "Mark T.",
    year: 2018,
    status: true,
  },
  {
    id: 2,
    title: "Clean Code",
    author: "R. Martin",
    year: 2008,
    status: false,
  },
];

export function fetchBooks(): Promise<Book[]> {
  return Promise.resolve(books);
}
export function addBook(book: Omit<Book, "id">): Promise<Book> {
  const newBook = { ...book, id: Date.now() };
  books.push(newBook);
  return Promise.resolve(newBook);
}
export function updateBook(id: number, book: Omit<Book, "id">): Promise<Book> {
  const idx = books.findIndex((b) => b.id === id);
  if (idx >= 0) {
    books[idx] = { ...books[idx], ...book };
    return Promise.resolve(books[idx]);
  }
  return Promise.reject("Book not found");
}
export function deleteBook(id: number): Promise<void> {
  books = books.filter((b) => b.id !== id);
  return Promise.resolve();
}
