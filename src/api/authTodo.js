/* eslint-disable no-console */
/* eslint-disable no-undef */
import { todoInstance } from "./client";

export const todoCreateApi = async (todo) => {
  return await todoInstance.post("/todos", { todo });
};

export const todoGetApi = async () => {
  return await todoInstance.get("/todos");
};

export const todoUpdateApi = async (isCompleted, id, todo) => {
  return await todoInstance.put(`/todos/${id}`, { todo, isCompleted });
};

export const todoDeleteApi = async (id) => {
  return todoInstance.delete(`/todos/${id}`);
};
