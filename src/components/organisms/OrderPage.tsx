"use client";
import React, { useMemo } from "react";
import { Customer } from "../../types/customer";
import { useOrder, useOrderList } from "../../hooks/order";
import { Button, Paragraph } from "@motiolibs/motio-js";
import { formatDate } from "../../lib/utils";

const OrderPage: React.FC = () => {
    const customer = useMemo(() => {
        if (typeof window !== "undefined") {
            const customer = localStorage.getItem("customer_info") as string;
            return JSON.parse(customer) as Customer;
        }
    }, []);

    const { cancelOrder, cancelLoading } = useOrder();

    const { isLoading, data } = useOrderList(customer ? customer.id : 1);

    if (isLoading) return <div>Loading...</div>;
    if (cancelLoading) return <div className="loading"></div>;

    return (
        // <ul>
        //     {!data ||
        //         (data.length === 0 && <h3>You have not bought any book</h3>)}
        //     {data &&
        //         data.map((order, index) => (
        //             <li key={index} className="border-b border-neutral-200">
        //                 <div className="flex gap-x-20 items-center justify-between">
        //                     {order.book.title}
        // <Button
        //     buttonType="text"
        //     label="Cancel"
        //     onClick={() => cancelOrder(order.id)}
        // />
        //                 </div>
        //             </li>
        //         ))}
        // </ul>

        <table className="table-fixed w-full">
            <thead className="border-b border-b-black">
                {data && data?.length > 0 && (
                    <tr>
                        <th>Title</th>
                        <th>Order Date</th>
                        <th>Action</th>
                    </tr>
                )}
            </thead>
            <tbody>
                {!data ||
                    (data.length === 0 && (
                        <h3>You have not bought any book</h3>
                    ))}
                {data &&
                    data.map((order, index) => (
                        <tr key={index} className="text-center">
                            <td>
                                <Paragraph type="small" maxLine={1}>
                                    {order.book.title}
                                </Paragraph>
                            </td>
                            <td>
                                <Paragraph type="small" maxLine={1}>
                                    {formatDate(order.order_date)}
                                </Paragraph>
                            </td>
                            <td>
                                {" "}
                                <Button
                                    buttonType="text"
                                    label="Cancel"
                                    onClick={() => cancelOrder(order.id)}
                                />
                            </td>
                        </tr>
                    ))}
            </tbody>
        </table>
    );
};

export default OrderPage;
