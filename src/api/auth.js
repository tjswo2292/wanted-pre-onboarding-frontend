/* eslint-disable no-console */
import { client } from "./client";

export const signUpApi = async (email, password) => {
  return await client.post("/auth/signup", { email, password });
};

export const signInApi = async (email, password) => {
  return await client.post("/auth/signin", { email, password });
};
