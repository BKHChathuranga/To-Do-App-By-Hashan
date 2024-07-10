import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import Modal from "./Modal";
import {
  deleteTodoById,
  getTodoList,
  updateTodo,
} from "../service/TodoService";
import Pending from "../assets/Pending";
import Completed from "../assets/Completed";
import EmptyTable from "../assets/EmptyTable";


const Table = ({ tasks }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [deletingTitle, setDeletingTitle] = useState(null);
  const [tasksList, setTasksList] = useState(tasks);

  useEffect(() => {
    const fetchNewTasks = async () => {
      try {
        const getTasksList = await getTodoList();
        setTasksList(getTasksList.data);
      } catch (error) {
        throw error;
      }
    };
    fetchNewTasks();
  }, [deletingId,tasks]);

  const navigate = useNavigate();

  const handleRowClick = (id) => {
    navigate(`/view-task/${id}`);
  };

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const deleteButtonHandler = (id, title) => {
    setIsDeleteModalOpen(true);
    setDeletingId(id);
    setDeletingTitle(title);
  };

  const handleDeleteCancel = () => {
    setIsDeleteModalOpen(false);
  };

  const handleConfirmDelete = async () => {
    try {
      const response = await deleteTodoById(deletingId);
      if (response === 200) {
        toast.success("To-Do deleted successfully");
        setIsDeleteModalOpen(false);
        setDeletingId(null);
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const handleStatusChange = async (task) => {
    try {
      const newStatus = task.status === "completed" ? "pending" : "completed";
      const data = { status: newStatus }
      const response = await updateTodo(task._id, data);
      if (response.success) {
        toast.success("To-Do status updated successfully");
        setTasksList(
          tasksList.map((t) =>
            t._id === task._id ? { ...t, status: newStatus } : t
          )
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateButtonClick = (id) => {
    navigate(`/view-task/${id}`,{state:{updateState:true}})
  }

  return (
    <div>
      <table className="table-fixed w-full border-spacing-y-2 border-separate">
        <thead className="text-center">
          <tr>
            <th className="text-sm font-medium text-start pl-5">Title</th>
            <th className="text-sm font-normal">Due Date</th>
            <th className="text-sm font-normal">Status</th>
            <th className="text-sm font-normal">Edit Task</th>
            <th className="text-sm font-normal">Delete Task</th>
            <th className="text-sm font-normal">Mark as Complete</th>
          </tr>
        </thead>
        <tbody>
          {tasksList.length > 0 &&
            tasksList.map((task) => (
              <tr
                key={task._id}
                className="bg-n-1 min-h-16 h-16 text-n-5 hover:bg-gray-100"
              >
                <td
                  className="rounded-s-lg pl-5 cursor-pointer"
                  onClick={() => handleRowClick(task._id)}
                >
                  {task.title}
                </td>
                <td
                  className="text-center cursor-pointer"
                  onClick={() => handleRowClick(task._id)}
                >
                  {formatDate(task.dueDate)}
                </td>
                <td
                  className="text-center cursor-pointer"
                  onClick={() => handleRowClick(task._id)}
                >
                  {task.status === "pending" && (<Pending/>)}
                  {task.status === "completed" && (<Completed/>)}{task.status}
                </td>
                <td className="text-center">
                  <Button
                    text="Update"
                    bgColor="bg-n-2/50"
                    width="w-[114px]"
                    height="h-[48px]"
                    customStyles="text-n-2 font-semibold"
                    onClick={()=>handleUpdateButtonClick(task._id)}
                  />
                </td>
                <td className="text-center">
                  <Button
                    text="Delete"
                    bgColor="bg-n-3/50"
                    width="w-[114px]"
                    height="h-[48px]"
                    customStyles="text-n-3 font-semibold"
                    onClick={() => deleteButtonHandler(task._id, task.title)}
                  />
                </td>
                <td className="rounded-e-lg text-center">
                  {" "}
                  <input
                    type="checkbox"
                    checked={task.status === "completed"}
                    onChange={() => handleStatusChange(task)}
                  />
                </td>
              </tr>
            ))}
          {tasksList.length === 0 && (
            <tr>
              <td className="items-center" colSpan={6} align="center">
                <EmptyTable/>
                <p className="text-center">No Tasks to display</p>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {isDeleteModalOpen && (
        <Modal customStyles="rounded-xl">
          <div className="w-full p-10">
            <p className="text-n-5 mb-10">{`Are sure about deleting ${deletingTitle} task?`}</p>
            <div className="w-full flex flex-row justify-center gap-4">
              <Button
                text="Delete"
                bgColor="bg-n-3/50"
                width="w-[114px]"
                height="h-[48px]"
                customStyles="text-n-3 font-semibold"
                onClick={handleConfirmDelete}
              />
              <Button
                text="Cancel"
                width="w-[114px]"
                height="h-[48px]"
                customStyles="text-n-5 font-semibold border border-1 border-n-5"
                onClick={handleDeleteCancel}
              />
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Table;
