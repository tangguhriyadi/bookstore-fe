import { useEffect, useMemo, useState } from "react";
import { Customer } from "../types/customer";
import { axios } from "../plugins/axios";
import { AxiosResponse } from "axios";

interface CustomerPointHook {
    data: number;
    isLoading: boolean;
}

export const useCustomerPoint = (): CustomerPointHook => {
    const [data, setData] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const customerData = useMemo(() => {
        if (typeof window !== "undefined") {
            const customer = localStorage.getItem("customer_info") as string;
            return JSON.parse(customer) as Customer;
        }
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const customer: AxiosResponse<Partial<Customer>> = await axios
                    .get(`/customers/${customerData?.id}/point`)
                    .then((res) => res.data);

                if (customer.data.point) {
                    setData(parseInt(customer.data.point));
                }
            } catch {
                setData(0);
                localStorage.removeItem("customer_info");
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [customerData]);

    return { data, isLoading };
};
