import { addTodo, deleteTask, getAllTodo, getTask, updateTask } from "../api/api";

const getTodoList = async () => {
  try {
    const data = await getAllTodo();
    return data.data;
  } catch (error) {
    console.error("Error getting todo list:", error);
    return null;
  }
};

export const getTaskById = async (id) => {
  try {
    const response = await getTask(id);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching task:", error);
    throw error;
  }
};

const addNewTodo = async (data) => {
  try {
    const response = await addTodo(data);
    return response.status;
  } catch (error) {
    console.error("Error adding new todo:", error);
    return null;
  }
};

const updateTodo = async (id,data) => {
  try {
    const response = await updateTask(id,data);
    return response.data
  } catch (error) {
    console.error("Error while deleting task:", error);
    throw error;
  }
};

const deleteTodoById = async (id) => {
  try {
    const response = await deleteTask(id);
    return response.status
  } catch (error) {
    console.error("Error while deleting task:", error);
    throw error;
  }
};
export { getTodoList, addNewTodo, deleteTodoById, updateTodo };
