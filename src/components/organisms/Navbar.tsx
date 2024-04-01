import React from "react";

const Navbar = () => {
    return (
        <header>
            <nav className="bg-galaxy-purple-500 w-full py-6 px-6 flex justify-between items-center">
                <h1 className="text-white font-semibold text-2xl">
                    {" "}
                    Bookstore
                </h1>
                <div className="text-white font-semibold text-xl cursor-pointer">
                    Orders
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
