import axios from 'axios';

import { accessTokenManage } from '../../util/storage';

export const authInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const publicInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${accessTokenManage.GET_TOKEN()}`,
  },
});

export const authApi = {
  POST: async (path, body) => {
    const response = await authInstance.post(path, body);
    return response;
  },
};

export const publicApi = {
  GET: async (path, option) => {
    const response = await publicInstance.get(path, option);
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
