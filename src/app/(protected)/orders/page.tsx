import dynamic from "next/dynamic";
import React from "react";
const OrderPage = dynamic(() => import("@/components/organisms/OrderPage"), {
    ssr: false,
});

const Page: React.FC = () => {
    return (
        <main className="min-h-[70vh] py-6 px-6">
            <OrderPage />
        </main>
    );
};

export default Page;
