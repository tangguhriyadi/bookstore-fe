"use client";
import { axios } from "../plugins/axios";
import { BaseApiResponse } from "../types/common";
import { Customer } from "../types/customer";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface AuthHook {
    login: (email: string, name: string) => Promise<void>;
    isLoading: boolean;
}

export const useAuth = (): AuthHook => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const router = useRouter();
    const login = async (email: string, name: string) => {
        setIsLoading(true);
        try {
            const data: BaseApiResponse<Customer> = await axios
                .post("/customers", { name, email })
                .then((res) => res.data);

            localStorage.setItem("customer_info", JSON.stringify(data.data));
            router.push("/");
            alert("login success");
        } catch (error) {
            alert("login failed");
        } finally {
            setIsLoading(false);
        }
    };

    return { login, isLoading };
};
