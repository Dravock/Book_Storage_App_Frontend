// src/types.ts
export interface Book {
    id: number;
    title: string;
    author: string;
    year: number;
    status: boolean; // true = gelesen, false = ungelesen
}
