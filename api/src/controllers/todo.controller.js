import httpStatus from "http-status";
import {
  createTodo,
  updateTodo,
  deleteTodo,
  getTodoById,
  getAllTodos,
} from "../services/todo.service.js";

import * as errors from "../utils/api-error.js";
import * as response from "../middlewares/response-handler.js";

const responseHandler = response.default;

const addTodo = async (req, res) => {
  try {
    const todoDetails = await createTodo(req.body);
    res.status(httpStatus.CREATED).send(responseHandler(todoDetails));
  } catch (err) {
    res.status(httpStatus.BAD_REQUEST).send(errors.formatError(err));
  }
};

const updateTodoById = async (req, res) => {
  try {
    const todoDetails = await updateTodo(req.params.id, req.body);
    res.status(httpStatus.OK).send(responseHandler(todoDetails));
  } catch (err) {
    res.status(httpStatus.BAD_REQUEST).send(errors.formatError(err));
  }
};

const deleteTodoById = async (req, res) => {
  try {
    const todoDetails = await deleteTodo(req.params.id);
    res.status(httpStatus.OK).send(responseHandler(todoDetails));
  } catch (err) {
    res.status(httpStatus.BAD_REQUEST).send(errors.formatError(err));
  }
};

const getTodo = async (req, res) => {
  try {
    const todoDetails = await getTodoById(req.params.id);
    res.status(httpStatus.OK).send(responseHandler(todoDetails));
  } catch (err) {
    res.status(httpStatus.BAD_REQUEST).send(errors.formatError(err));
  }
};

const getAllTodo = async (req, res) => {
  try {
    const todos = await getAllTodos();
    res.status(httpStatus.OK).send(responseHandler(todos));
  } catch (err) {
    res.status(httpStatus.BAD_REQUEST).send(errors.formatError(err));
  }
};

export { addTodo, updateTodoById, deleteTodoById, getTodo, getAllTodo };
