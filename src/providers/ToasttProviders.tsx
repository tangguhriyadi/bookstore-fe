"use client";
import dynamic from "next/dynamic";
const ToastProvider = dynamic(
    () => import("@motiolibs/motio-js").then((module) => module.ToastProvider),
    { ssr: false }
);

const Toast = dynamic(
    () => import("@motiolibs/motio-js").then((module) => module.Toast),
    { ssr: false }
);

export { ToastProvider, Toast };
