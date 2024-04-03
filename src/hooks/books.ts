"use client";
import { RefObject, useCallback, useEffect, useRef, useState } from "react";
import { Book } from "../types/book";
import { AxiosResponse } from "axios";
import { axios } from "../plugins/axios";
import { BaseApiResponse } from "../types/common";

interface BookListHook {
    data: Book[];
    isLoading: boolean;
    isError: boolean;
    observerTarget: RefObject<HTMLDivElement>;
}
interface useBooksProps {
    limit: number;
}

export const useBooks = (props: useBooksProps): BookListHook => {
    const { limit } = props;

    const [items, setItems] = useState<Book[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);
    const [isError, setIsError] = useState<boolean>(false);

    const fetchData = useCallback<() => Promise<void>>(async () => {
        setIsLoading(true);
        try {
            const data: AxiosResponse<Book[]> = await axios
                .get(`/books?page=${page}&limit=${limit}`)
                .then((res) => res.data);
            setItems((prevItems) => [...prevItems, ...data.data]);
            setPage((prevPage) => prevPage + 1);
            if (data.data.length === 0) {
                setIsError(true);
            }
        } catch {
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    }, [limit, page]);

    const observerTarget = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !isError && !isLoading) {
                    fetchData();
                }
            },
            { threshold: 1 }
        );

        if (observerTarget.current) {
            observer.observe(observerTarget.current);
        }

        return () => {
            if (observerTarget.current) {
                observer.unobserve(observerTarget.current);
            }
        };
    }, [fetchData, observerTarget, isError, isLoading]);

    return { data: items, isError, isLoading, observerTarget };
};

