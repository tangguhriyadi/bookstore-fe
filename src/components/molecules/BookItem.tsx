"use client";
import React from "react";
import { Book } from "../../types/book";
import Image from "next/image";
import { Paragraph } from "@motiolibs/motio-js";

interface BookItemProps {
    book: Book;
}

const BookItem: React.FC<BookItemProps> = (props) => {
    const { book } = props;
    const { cover_image, title, genres } = book;
    return (
        <div className="flex justify-center items-center flex-col border border-neutral-200 p-6 gap-y-2">
            <div className="flex gap-x-2">
            {genres.map((genre, index) => (
                <div key={index} className="bg-vale-yellow-500 px-2 py-1 rounded-md">
                    <Paragraph type="xsmall" className="font-semibold">{genre}</Paragraph>
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
                />
            </div>
            <div>
                <Paragraph type="small" maxLine={2}>
                    {title}
                </Paragraph>
            </div>
        </div>
    );
};

export default BookItem;
