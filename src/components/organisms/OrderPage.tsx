"use client";
import React, { useMemo } from "react";
import { Customer } from "../../types/customer";
import { useOrder, useOrderList } from "../../hooks/order";
import { Button } from "@motiolibs/motio-js";

const OrderPage: React.FC = () => {
    const customer = useMemo(() => {
        if (typeof window !== "undefined") {
            const customer = localStorage.getItem("customer_info") as string;
            return JSON.parse(customer) as Customer;
        }
    }, []);

    const { cancelOrder } = useOrder();

    const { isLoading, data } = useOrderList(customer ? customer.id : 1);
    
    if (isLoading) return <div>Loading...</div>;
    return (
        <ul>
            {!data ||
                (data.length === 0 && <h3>You have not bought any book</h3>)}
            {data &&
                data.map((order, index) => (
                    <li key={index} className="border-b border-neutral-200">
                        <div className="flex gap-x-20 items-center justify-between">
                            {order.book.title}
                            <Button
                                buttonType="text"
                                label="Cancel"
                                onClick={() => cancelOrder(order.id)}
                            />
                        </div>
                    </li>
                ))}
        </ul>
    );
};

export default OrderPage;
