"use client";
import React, { useEffect } from "react";
import { useBooks } from "../../hooks/books";
import BookItem from "../molecules/BookItem";
import Brands from "../molecules/Brands";

const LIMIT = 10;
const Books = () => {
    const { data, observerTarget, isLoading } = useBooks({ limit: LIMIT });
    return (
        <div className="py-6 px-6">
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                {data &&
                    data.map((book, index) => (
                        <BookItem key={index} book={book} />
                    ))}
            </div>
            {isLoading && <div>loading....</div>}
            <div>
                <div ref={observerTarget}></div>
            </div>
            <Brands />
        </div>
    );
};

export default Books;
