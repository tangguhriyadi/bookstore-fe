"use client";
import { axios } from "../plugins/axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Order } from "../types/order";
import { AxiosResponse } from "axios";

interface OrderHook {
    order: (
        bookId: number,
        quantity: number,
        customerId: number
    ) => Promise<void>;
    isLoading: boolean;
    cancelOrder: (orderId: number) => Promise<void>;
}
interface OrderListHook {
    data?: Order[];
    isLoading: boolean;
}

export const useOrder = (): OrderHook => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const router = useRouter();
    const order = async (
        bookId: number,
        quantity: number,
        customerId: number
    ) => {
        setIsLoading(true);
        try {
            await axios
                .post("/orders", {
                    book_id: bookId,
                    quantity,
                    customer_id: customerId,
                })
                .then((res) => res.data);

            alert("order success");
            router.push("/orders");
        } catch (error: any) {
            alert(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const cancelOrder = async (orderId: number) => {
        try {
            await axios.delete(`/orders/${orderId}`).then((res) => res.data);

            alert("cancel success");
            router.push("/orders");
        } catch (err: any) {
            alert(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return { order, isLoading, cancelOrder };
};

export const useOrderList = (customerId: number): OrderListHook => {
    const [items, setItems] = useState<Order[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const data: AxiosResponse<Order[]> = await axios
                    .get(`/orders?page=1&limit=100&customer_id=${customerId}`)
                    .then((res) => res.data);

                setItems(data.data);
            } catch (err) {
                alert(err);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [customerId]);

    return { data: items, isLoading };
};
