// src/components/BookForm.tsx
import React, { useState, useEffect } from "react";
import { Book } from "../../types";
import "./BookForm.css"; // Optional: Import CSS for styling

interface BookFormProps {
    initialData?: Book | null;
    onSave: (book: Omit<Book, "id">) => void;
    onCancel: () => void;
}

const emptyBook: Omit<Book, "id"> = {
    title: "",
    author: "",
    year: new Date().getFullYear(),
    status: false,
};

const BookForm: React.FC<BookFormProps> = ({ initialData, onSave, onCancel }) => {
    const [form, setForm] = useState<Omit<Book, "id">>(emptyBook);

    useEffect(() => {
        if (initialData) setForm(initialData);
        else setForm(emptyBook);
    }, [initialData]);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        onSave(form);
    }

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: 16 }}>
            <input
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Buchtitel"
                required
            />
            <input
                name="author"
                value={form.author}
                onChange={handleChange}
                placeholder="Autor"
                required
            />
            <input
                name="year"
                type="number"
                value={form.year}
                onChange={handleChange}
                placeholder="Jahr"
                required
            />
            <label>
                Gelesen
                <input
                    name="status"
                    type="checkbox"
                    checked={form.status}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Speichern</button>
            <button type="button" onClick={onCancel} style={{ marginLeft: 8 }}>
                Abbrechen
            </button>
        </form>
    );
};

export default BookForm;
