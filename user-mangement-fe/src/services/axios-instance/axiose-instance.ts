import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL || "http://localhost:8090";



const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});


export default axiosInstance;