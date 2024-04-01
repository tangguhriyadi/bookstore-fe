import Image from "next/image";
import Navbar from "../components/organisms/Navbar";
import dynamic from "next/dynamic";

const Books = dynamic(() => import("../components/organisms/Books"), {
    ssr: false,
});
const Footer = dynamic(() => import("../components/organisms/Footer"), {
    ssr: false,
});

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="min-h-[70vh]">
                <Books />
            </main>
            <Footer />
        </>
    );
}
