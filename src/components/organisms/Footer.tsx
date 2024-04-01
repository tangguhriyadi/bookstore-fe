"use client";
import { Paragraph } from "@motiolibs/motio-js";
import React from "react";

const Footer = () => {
    return (
        <footer className="w-full px-6">
            <div className="w-full h-[6px] rounded-full bg-neutral-700"></div>
            <Paragraph
                type="medium"
                className="font-normal my-4 w-full text-center"
            >
                Copyright &copy;{" "}
                <a
                    href="https://tangguhriyadi.vercel.app"
                    target="_blank"
                    className="hover:text-galaxy-purple-500"
                >
                    Muhammad Tangguh Riyadi.
                </a>{" "}
                All rights reserved.
            </Paragraph>
        </footer>
    );
};

export default Footer;
