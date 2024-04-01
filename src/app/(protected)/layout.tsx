import React from "react";
import Navbar from "../../components/organisms/Navbar";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("../../components/organisms/Footer"), {
    ssr: false,
});

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="min-h-[70vh]">
            <Navbar />
            {children}
            <Footer />
        </main>
    );
};

export default layout;
