/* eslint-disable no-console */
/* eslint-disable no-undef */
import axios from "axios";

export const createInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
