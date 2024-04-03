"use client";
import React from "react";
import { useBooks } from "../../hooks/books";
import BookItem from "../molecules/BookItem";
import Brands from "../molecules/Brands";
import AuthProvider from "../../providers/AuthProvider";
import Skeleton from "react-loading-skeleton";

const LIMIT = 10;
const Books = () => {
    const { data, observerTarget, isLoading } = useBooks({ limit: LIMIT });
    return (
        <AuthProvider>
                <div className="py-6 px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4">
                        {data &&
                            data.map((book, index) => (
                                <BookItem key={index} book={book} />
                            ))}
                    </div>
                    {isLoading && (
                        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6">
                            <Skeleton className="w-full h-[300px]" />
                            <Skeleton className="w-full h-[300px]" />
                            <Skeleton className="w-full h-[300px]" />
                        </div>
                    )}
                    <Brands />
                    <div>
                        <div ref={observerTarget}></div>
                    </div>
                </div>
        </AuthProvider>
    );
};

export default Books;
