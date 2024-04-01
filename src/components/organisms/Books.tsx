"use client";
import React from "react";
import { useBooks } from "../../hooks/books";
import BookItem from "../molecules/BookItem";
import Brands from "../molecules/Brands";
import dynamic from "next/dynamic";
import { Toast, ToastProvider } from "@motiolibs/motio-js";
import AuthProvider from "../../providers/AuthProvider";

const LIMIT = 10;
const Books = () => {
    const { data, observerTarget, isLoading } = useBooks({ limit: LIMIT });
    return (
        <AuthProvider>
            <ToastProvider>
                <div className="py-6 px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4">
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
                <Toast />
            </ToastProvider>
        </AuthProvider>
    );
};

export default Books;
