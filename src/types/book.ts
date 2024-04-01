import { Author } from "./common";

export type Book = {
    id: number;
    title: string;
    price: string;
    cover_image: string;
    genres: string[];
    author: Author;
};
