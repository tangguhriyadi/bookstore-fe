import Axios from "axios";

const BASE_URL = "http://localhost:4000/api/v1";

const axios = Axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export { axios };
