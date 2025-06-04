// src/components/BookList.tsx
import React from "react";
import { Book } from "../../types";
import "./BookList.css"; // Optional: Import CSS for styling


interface BookListProps {
    books: Book[];
    onEdit: (book: Book) => void;
    onDelete: (id: number) => void;
}

const BookList: React.FC<BookListProps> = ({ books, onEdit, onDelete }) => (
    <div>
        <h2>Bücherliste</h2>
        <ul>
            {books.map((book) => (
                <li key={book.id}>
                    <b>{book.title}</b> von {book.author} ({book.year}){" "}
                    {book.status ? "✅" : "❌"}
                    <button onClick={() => onEdit(book)}>Bearbeiten</button>
                    <button onClick={() => onDelete(book.id)}>Löschen</button>
                </li>
            ))}
        </ul>
    </div>
);

export default BookList;
