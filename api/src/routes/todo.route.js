import express from "express";
import {
  addTodo,
  updateTodoById,
  deleteTodoById,
  getTodo,
  getAllTodo,
} from "../controllers/todo.controller.js";

const router = express.Router();

router.route("/add-todo").post(addTodo);
router.put("/update-todo/:id", updateTodoById);
router.delete("/delete-todo/:id", deleteTodoById);
router.get("/view-todo/:id", getTodo);
router.get("/all-todo", getAllTodo);

export default router;
