// src/components/BookForm.tsx
import React  from "react";
import { Book } from "../../types";
import "./AppHeader.css"; // Optional: Import CSS for styling

interface AppHeaderProps {
    books?: Book[];
}



const AppHeader: React.FC<AppHeaderProps> = ({books}) => {
    
    const countUnreadBooks = (books: Book[] | undefined): number => {
        if (!books) return 0;
        return books.filter(book => !book.status).length;
    };

    const countAllBooks = (books: Book[] | undefined): number => {
        if (!books) return 0;
        return books.length;
    };

    return (
        <div className="app__header">
            <div>
                <h1 className="app__header__title">Book Manager</h1>
                <p className="app__header__title_claim">Verwalte deine Bücher einfach und übersichtlich!</p>
            </div>
        </div>
    );
};

export default AppHeader;