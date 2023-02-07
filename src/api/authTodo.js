import { todoInstance } from "./client";

export const todoCreateApi = async (todo) => {
  return await todoInstance.post("/todos", { todo });
};

export const todoGetApi = async () => {
  return await todoInstance.get("/todos");
};
