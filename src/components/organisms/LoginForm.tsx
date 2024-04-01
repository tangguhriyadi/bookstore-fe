"use client";
import { Button, Input, Toast } from "@motiolibs/motio-js";
import React, { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { useAuth } from "../../hooks/auth";
import dynamic from "next/dynamic";

const ToastProvider = dynamic(
    () => import("@motiolibs/motio-js").then((mod) => mod.ToastProvider),
    {
        ssr: false,
    }
);

const LoginForm: React.FC = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    const { login, isLoading } = useAuth();

    const handleChangeName = useCallback((e: ChangeEvent) => {
        const target = e.target as HTMLInputElement;
        setName(target.value);
    }, []);
    const handleChangeEmail = useCallback((e: ChangeEvent) => {
        const target = e.target as HTMLInputElement;
        setEmail(target.value);
    }, []);

    const handleSubmit = useCallback(
        (e: FormEvent) => {
            e.preventDefault();

            login(email, name);
        },
        [name, email, login]
    );

    return (
        <ToastProvider>
            <form
                onSubmit={handleSubmit}
                className="border border-neutral-500 rounded-md shadow-sm px-8 py-6 flex flex-col gap-y-4 min-w-[350px]"
            >
                <Input
                    onChange={handleChangeName}
                    label="Name"
                    className="w-full"
                    required
                />
                <Input
                    onChange={handleChangeEmail}
                    label="Email"
                    className="w-full"
                    required
                />
                <Button
                    buttonType="primary"
                    baseColor="yellow"
                    type="submit"
                    label="Log In"
                    disabled={isLoading}
                />
            </form>
            <Toast />
        </ToastProvider>
    );
};

export default LoginForm;
