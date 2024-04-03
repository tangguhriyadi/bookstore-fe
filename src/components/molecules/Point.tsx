"use client";
import React from "react";
import { useCustomerPoint } from "../../hooks/customer";

const Point: React.FC = () => {
    const { data: point, isLoading } = useCustomerPoint();
    return (
        <div className="text-white font-semibold text-xl cursor-pointer">
            Point: {isLoading ? "..." : `${point}`}
        </div>
    );
};

export default Point;
