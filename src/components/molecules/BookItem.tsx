"use client";
import React, { useEffect, useMemo } from "react";
import { Book } from "../../types/book";
import Image from "next/image";
import { Paragraph } from "@motiolibs/motio-js";
import { useOrder } from "../../hooks/order";
import { Customer } from "../../types/customer";

interface BookItemProps {
    book: Book;
}

const BookItem: React.FC<BookItemProps> = (props) => {
    const { book } = props;
    const { cover_image, title, genres, auhtor, price, id } = book;

    const customer = useMemo(() => {
        if (typeof window !== "undefined") {
            const customer = localStorage.getItem("customer_info") as string;
            return JSON.parse(customer);
        }
    }, []) as Customer;

    const { order } = useOrder();
    return (
        <div className="flex justify-center items-center flex-col border border-neutral-200 p-6 gap-y-2">
            <div className="flex gap-2">
                {genres.map((genre, index) => (
                    <div
                        key={index}
                        className="bg-vale-yellow-500 px-2 py-1 rounded-md"
                    >
                        <Paragraph type="xsmall" className="font-semibold">
                            {genre}
                        </Paragraph>
                    </div>
                ))}
            </div>
            <div className="w-[100px] h-[127px] relative">
                <Image
                    src={cover_image}
                    alt="book"
                    fill
                    priority
                    className="cursor-pointer"
                    onClick={() => order(id, 1, customer.id)}
                />
            </div>
            <div>
                <Paragraph type="small" maxLine={2}>
                    {title}
                </Paragraph>
            </div>
            <div>
                <Paragraph type="small" maxLine={2}>
                    Author: {auhtor.name}
                </Paragraph>
            </div>
            <div>
                <Paragraph type="small" maxLine={2}>
                    ${price}
                </Paragraph>
            </div>
        </div>
    );
};

export default BookItem;
