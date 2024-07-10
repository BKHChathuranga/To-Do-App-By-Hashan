import { api } from './axiosInstance';

export const getAllTodo = async () => api.get("/todo/all-todo")

export const getTask = async (id) => api.get(`/todo/view-todo/${id}`)

export const addTodo = async (data) => api.post("/todo/add-todo",data)

export const updateTask = async (id,data) => api.put(`/todo/update-todo/${id}`,data)

export const deleteTask = async (id) => api.delete(`/todo/delete-todo/${id}`)

