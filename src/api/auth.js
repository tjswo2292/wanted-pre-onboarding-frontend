import { createInstance } from "./create";

export const signUpApi = async (email, password) => {
  return createInstance.post("/auth/signup", { email, password });
};
