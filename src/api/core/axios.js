import axios from 'axios';

import { accessTokenManage } from '../../util/storage';

const BASE_URL = 'https://www.pre-onboarding-selection-task.shop/';

export const authInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const publicInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

publicInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${accessTokenManage.GET_TOKEN()}`;
  return config;
});

export const authApi = {
  POST: async (path, body) => {
    const response = await authInstance.post(path, body);
    return response;
  },
};

export const publicApi = {
  GET: async (path) => {
    const response = await publicInstance.get(path);
    return response;
  },
  POST: async (path, body) => {
    const response = await publicInstance.post(path, body);
    return response;
  },
  PUT: async (path, body) => {
    const response = await publicInstance.put(path, body);
    return response;
  },
  DELETE: async (path) => {
    const response = await publicInstance.delete(path);
    return response;
  },
};
