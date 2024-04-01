import Image from "next/image";
import Navbar from "../components/organisms/Navbar";
import dynamic from "next/dynamic";
import AuthProvider from "../providers/AuthProvider";

const Books = dynamic(() => import("../components/organisms/Books"), {
    ssr: false,
});
const Footer = dynamic(() => import("../components/organisms/Footer"), {
    ssr: false,
});

export default function Home() {
    return (
        <AuthProvider>
            <Navbar />
            <main className="min-h-[70vh]">
                <Books />
            </main>
            <Footer />
        </AuthProvider>
    );
}
