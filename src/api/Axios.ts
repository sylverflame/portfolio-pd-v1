// @ts-nocheck
import axios from "axios";

const instance = axios.create({
  baseURL: "",
});

const commonHeaders = {
  "Content-Type": "application/json",
  // Authorization: `Bearer ${localStorage.getItem('authToken')}`, // Replace with your logic
};

// Axios Request Interceptor
instance.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
      ...commonHeaders,
    };
    return config;
  },
  (error) => {
    return Promise.reject(new Error(error));
  }
);

export default instance;
