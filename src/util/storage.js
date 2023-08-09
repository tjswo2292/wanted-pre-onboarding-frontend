const ACCESS_TOKEN = 'accessToken';

export const accessTokenManage = {
  GET_TOKEN: () => {
    return localStorage.getItem(ACCESS_TOKEN);
  },
  SET_TOKEN: (value) => {
    return localStorage.setItem(ACCESS_TOKEN, value);
  },
  DELETE_TOKEN: () => {
    return localStorage.removeItem(ACCESS_TOKEN);
  },
};
