// src/App.tsx
import React, { useEffect, useState } from "react";
import { Book } from "./types";
import BookList from "./components/BookList/BookList";
import BookForm from "./components/BookForm/BookForm";
import { fetchBooks, addBook, updateBook, deleteBook } from "./services/api";

function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [editingBook, setEditingBook] = useState<Book | null>(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchBooks().then(setBooks);
  }, []);

  function handleAdd() {
    setEditingBook(null);
    setShowForm(true);
  }

  function handleEdit(book: Book) {
    setEditingBook(book);
    setShowForm(true);
  }

  function handleDelete(id: number) {
    deleteBook(id).then(() => setBooks((b) => b.filter((x) => x.id !== id)));
  }

  function handleSave(bookData: Omit<Book, "id">) {
    if (editingBook) {
      updateBook(editingBook.id, bookData).then((updated) =>
        setBooks((b) =>
          b.map((x) => (x.id === updated.id ? updated : x))
        )
      );
    } else {
      addBook(bookData).then((newBook) => setBooks((b) => [...b, newBook]));
    }
    setShowForm(false);
  }

  function handleCancel() {
    setShowForm(false);
    setEditingBook(null);
  }

  return (
    <div style={{ padding: 32 }}>
      <h1>Book Manager</h1>
      {showForm ? (
        <BookForm
          initialData={editingBook}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      ) : (
        <button onClick={handleAdd}>+ Neues Buch</button>
      )}
      <BookList books={books} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default App;
