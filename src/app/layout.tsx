import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toast, ToastProvider } from "../providers/ToasttProviders";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Bookstore",
    description: "Bookstore | Muhammad Tangguh Riyadi",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ToastProvider>
                    {children}
                    <Toast />
                </ToastProvider>
            </body>
        </html>
    );
}
