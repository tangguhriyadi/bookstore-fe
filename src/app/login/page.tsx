import React from "react";
import dynamic from "next/dynamic";
const LoginForm = dynamic(
    () => import("../../components/organisms/LoginForm"),
    { ssr: false }
);

const Login: React.FC = () => {
    return (
        <section className="w-full mt-16 flex justify-center items-center flex-col gap-y-8">
            <h2 className="font-medium">Plase Login To Your Account</h2>

            <LoginForm />
        </section>
    );
};

export default Login;
