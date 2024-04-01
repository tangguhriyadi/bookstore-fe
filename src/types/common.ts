export type Author = {
    id: number;
    name: string;
};

export type BaseApiResponse<T> = {
    message: string;
    status: "error" | "success";
    data?: T;
    pagination?: Pagination;
};

export type Pagination = {
    totalItem: number;
    currentPage: number;
    pageSize: number;
    totalPages: number;
};
