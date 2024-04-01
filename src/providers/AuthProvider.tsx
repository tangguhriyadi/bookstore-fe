"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface AuthProviderProps {
    children: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const customerInfo = localStorage.getItem("customer_info");

    const router = useRouter();

    if (!customerInfo) {
        router.push("/login");
    }

    return <div>{children}</div>;
};

export default AuthProvider;
