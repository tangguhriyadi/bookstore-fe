"use client";
import React, { useMemo } from "react";
import { Customer } from "../../types/customer";

const Point = () => {
    const customer = useMemo(() => {
        if (typeof window !== "undefined") {
            const customer = localStorage.getItem("customer_info") as string;
            return JSON.parse(customer) as Customer;
        }
    }, []);
    return <div>Point {customer?.point}</div>;
};

export default Point;
