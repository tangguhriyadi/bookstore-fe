"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
    const router = useRouter();
    return (
        <header>
            <nav className="bg-galaxy-purple-500 w-full py-6 px-6 flex justify-between items-center">
                <h1
                    onClick={() => router.push("/")}
                    className="text-white font-semibold text-2xl cursor-pointer"
                >
                    {" "}
                    Bookstore
                </h1>
                <div
                    onClick={() => router.push("/orders")}
                    className="text-white font-semibold text-xl cursor-pointer"
                >
                    My Orders
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
