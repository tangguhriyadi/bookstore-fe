export const formatDate = (isoStringDate: string): string => {
    const date = new Date(isoStringDate);

    const formattedDate = new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    }).format(date);

    return formattedDate;
};
