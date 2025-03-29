import { AxiosInstance } from "axios";
import axios from "axios";
export const axiosInstance: AxiosInstance = axios.create({
  baseURL: "http://localhost:8000",
  timeout: 5000,
});
