"use client";
import { axios } from "../plugins/axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Order } from "../types/order";
import { AxiosResponse } from "axios";
import { useToast } from "@motiolibs/motio-js";

interface OrderHook {
    order: (
        bookId: number,
        quantity: number,
        customerId: number
    ) => Promise<void>;
    isLoading: boolean;
    cancelOrder: (orderId: number) => Promise<void>;
    cancelLoading: boolean;
}
interface OrderListHook {
    data?: Order[];
    isLoading: boolean;
}

export const useOrder = (): OrderHook => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [cancelLoading, setCancelLoading] = useState<boolean>(false);
    const router = useRouter();
    const { setToast } = useToast();
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

            setToast({
                isOpen: true,
                message: "order success",
                type: "success",
            });
            router.push("/orders");
        } catch (error: any) {
            setToast({
                isOpen: true,
                message: error.response.data.message,
                type: "error",
            });
        } finally {
            setIsLoading(false);
        }
    };

    const cancelOrder = async (orderId: number) => {
        setCancelLoading(true);
        try {
            await axios.delete(`/orders/${orderId}`).then((res) => res.data);

            setToast({
                isOpen: true,
                message: "Cancel order success",
                type: "success",
            });
            router.push("/");
        } catch (err: any) {
            setToast({
                isOpen: true,
                message: err.message,
                type: "error",
            });
        } finally {
            setCancelLoading(false);
        }
    };

    return { order, isLoading, cancelOrder, cancelLoading };
};

export const useOrderList = (customerId: number): OrderListHook => {
    const [items, setItems] = useState<Order[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { setToast } = useToast();

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const data: AxiosResponse<Order[]> = await axios
                    .get(`/orders?page=1&limit=100&customer_id=${customerId}`)
                    .then((res) => res.data);

                setItems(data.data);
            } catch (err) {
                setToast({
                    isOpen: true,
                    message: "You have not bought any book",
                    type: "error",
                });
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [customerId, setToast]);

    return { data: items, isLoading };
};
