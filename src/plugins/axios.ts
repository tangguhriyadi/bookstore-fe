import Axios from "axios";

const BASE_URL = "https://bookstore-be-omega.vercel.app/api/v1";

const axios = Axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export { axios };
