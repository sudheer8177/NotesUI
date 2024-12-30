import axios from "axios";
// import { BASE_URL } from "./constants";
const BASE_URLL = process.env.REACT_APP_BASE_URLL;
// console.log(BASE_URLL);

// console.log(BASE_URL)    

const axiosInstance = axios.create({
    baseURL: "https://notesapp-backend-xh0o.onrender.com",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("token");
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
