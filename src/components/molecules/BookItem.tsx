"use client";
import React, { useEffect, useMemo } from "react";
import { Book } from "../../types/book";
import Image from "next/image";
import { ButtonWithIcon, Paragraph } from "@motiolibs/motio-js";
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

    const { order, isLoading } = useOrder();
    
    if(isLoading){
        return <div className="loading"></div>
    }
    return (
        <div className="flex justify-center items-center flex-col border border-neutral-200 px-6 pt-6 pb-2 gap-y-2">
            <div className="flex gap-2">
                {genres.map((genre, index) => (
                    <div
                        key={index}
                        className="bg-vale-yellow-500 px-2 py-1 rounded-md"
                    >
                        <Paragraph type="xsmall" className="font-semibold capitalize">
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
                />
            </div>
            <div>
                <Paragraph type="small" maxLine={2}>
                    {title}
                </Paragraph>
            </div>
            <table className="table-auto">
                <tr>
                    <td>Author</td>
                    <td className="px-2">:</td>
                    <td>
                        <strong>{auhtor.name}</strong>
                    </td>
                </tr>
                <tr>
                    <td>Price</td>
                    <td className="px-2">:</td>
                    <td>
                        <strong>{price} Point</strong>
                    </td>
                </tr>
            </table>

            <ButtonWithIcon
                icon="cart"
                label="Order Now"
                position="left"
                onClick={() => order(id, 1, customer.id)}
                disabled={isLoading}
            />
        </div>
    );
};

export default BookItem;
