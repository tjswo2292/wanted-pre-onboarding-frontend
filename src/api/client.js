import axios from "axios";

const PROXY = window.location.hostname === "localhost" ? "" : "/proxy";

export const client = axios.create({
  baseURL: `${PROXY}${process.env.REACT_APP_API_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const todoInstance = axios.create({
  baseURL: `${PROXY}${process.env.REACT_APP_API_URL}`,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    "Content-Type": "application/json",
  },
});

todoInstance.interceptors.request.use(
  (config) => {
    const access_token = localStorage.getItem("token");

    if (access_token && config.headers) {
      config.headers["Authorization"] = `Bearer ${access_token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
