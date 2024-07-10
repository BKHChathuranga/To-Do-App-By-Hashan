import Todo from "../models/todo.model.js"

const createTodo = async (data) => {
  try {
    const todo = await Todo.create(data);
    return todo;
  } catch (err){
    return err
  }
};

const updateTodo = async (id, data) => {
  try {
    const todo = await Todo.findByIdAndUpdate(id, data, { new: true });
    return todo;
  } catch (err) {
    return err;
  }
};

const deleteTodo = async (id) => {
  try {
    const todo = await Todo.findByIdAndDelete(id);
    return todo;
  } catch (err) {
    return err;
  }
};

const getTodoById = async (id) => {
  try {
    const todo = await Todo.findById(id);
    return todo;
  } catch (err) {
    return err;
  }
};

const getAllTodos = async () => {
  try {
    const todos = await Todo.find();
    return todos;
  } catch (err) {
    return err;
  }
};

export { createTodo, updateTodo, deleteTodo, getTodoById, getAllTodos };