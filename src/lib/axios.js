import Axios from "axios";
import { storage } from "@/utils/storage";

function authRequestInterceptor(config) {
  const token = storage.getToken();

  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }

  config.headers.Accept = "application/json; charset=utf-8";

  return config;
}

export const axios = Axios.create({
  baseURL: "https://api.example.com",
});

axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
  (response) => response?.data?.data || response?.data,
  (error) => {
    return Promise.reject(error);
  }
);
