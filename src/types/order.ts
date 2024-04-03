import { Book } from "./book";

export type Order = {
    id: number;
    book: Partial<Book>;
    total_amount: string;
    is_canceled: boolean;
    order_date: string;
};
