"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

interface AuthProviderProps {
    children: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const router = useRouter();
    useEffect(() => {
        if (typeof window !== "undefined") {
            const customerInfo = localStorage.getItem("customer_info");

            if (!customerInfo) {
                router.push("/login");
            }
        }
    }, [router]);
    return <div>{children}</div>;
};

export default AuthProvider;
