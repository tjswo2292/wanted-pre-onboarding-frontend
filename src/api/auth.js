/* eslint-disable no-console */
import { createInstance } from "./create";

export const signUpApi = async (email, password) => {
  return await createInstance.post("/auth/signup", { email, password });
};
