import React, { useState, useEffect } from "react";
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ContentWrapper from "../components/ContentWrapper";
import ViewTaskInput from "../components/ViewTaskInput";
import ViewTaskTextarea from "../components/ViewTaskTextarea";
import Dropdown from "../components/Dropdown";
import StatusList from "../constants/statusList";
import DatePicker from "../components/DatePicker";
import Button from "../components/Button";
import { deleteTodoById, getTaskById, updateTodo } from "../service/TodoService";
import Modal from "../components/Modal";

const ViewTaskPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const updateState = useLocation();

  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    status: "",
    dueDate: "",
  });
  const [isEditEnabled, setIsEditEnabled] = useState(false);
  const [state, setState] = useState(
    updateState.state.updateState ? updateState.state.updateState : false
  );
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [errors, setErrors] = useState({ title: "", description: "" });

  function convertDateString(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  useEffect(() => {
    const fetchTask = async () => {
      const task = await getTaskById(id);
      setTaskData({
        title: task.title,
        description: task.description,
        status: task.status,
        dueDate: new Date(task.dueDate),
      });
    };

    fetchTask();
  }, [id, isEditEnabled]);

  const handleEditButtonClick = () => {
    setIsEditEnabled(true);
    setState(true);
  };
  const handleCancelButtonClick = () => {
    setIsEditEnabled(false);
    setState(false);
    setErrors({ title: "", description: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prevTaskData) => ({
      ...prevTaskData,
      [name]: value,
    }));
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleDateChange = (date) => {
    setTaskData({ ...taskData, dueDate: date });
  };

  const handleConfirmButtonClick = async () => {
    const { title, description } = taskData;
    let valid = true;

    if (!title) {
      setErrors((prevErrors) => ({ ...prevErrors, title: "Title is required" }));
      valid = false;
    }
    if (!description) {
      setErrors((prevErrors) => ({ ...prevErrors, description: "Description is required" }));
      valid = false;
    }

    if (!valid) {
      return;
    }

    try {
      const response = await updateTodo(id, {
        ...taskData,
        dueDate: convertDateString(taskData.dueDate),
      });
      
      if (response.success) {
        toast.success("To-do updated successfully")
        setTaskData(response.data);
        setIsEditEnabled(false);
        setState(false);
      }
    } catch (error) {
      throw error;
    }
  };

  const deleteButtonHandler = (id, title) => {
    setIsDeleteModalOpen(true);
    setDeletingId(id);
    setDeletingTitle(title);
  };

  const handleConfirmDelete = async () => {
    try {
      const response = await deleteTodoById(id);
      if (response === 200) {
        setIsDeleteModalOpen(false);
        navigate("/")
        toast.success("To-Do deleted successfully")
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  const handleDeleteCancel = () => {
    setIsDeleteModalOpen(false);
  };

  return (
    <ContentWrapper>
      <div className="w-[1000px]">
        <div className="pt-[5rem] font-semibold text-3xl text-center mb-8">
          {(isEditEnabled || state) && <p>Update Task</p>}
          {!isEditEnabled && !state && <p>View Task</p>}
        </div>
        <div className=" bg-n-2/40 backdrop-blur-lg px-10 rounded-lg py-16">
          <div className="flex flex-col w-full">
            <div className="flex flex-row mt-3">
              <div className="basis-2/5 text-right pr-10">Name</div>
              <div className="basis-3/5 justify-center">
                <ViewTaskInput
                  value={taskData.title}
                  name="title"
                  handleOnChange={handleChange}
                  disabled={!isEditEnabled && !state}
                />
                {errors.title && <p className="text-n-3 text-xs">{errors.title}</p>}
              </div>
            </div>
            <div className="flex flex-row mt-3">
              <div className="basis-2/5 text-right pr-10">Description</div>
              <div className="basis-3/5 justify-center">
                <ViewTaskTextarea
                  value={taskData.description}
                  name="description"
                  handleOnChange={handleChange}
                  disabled={!isEditEnabled && !state}
                />
                 {errors.description && <p className="text-n-3 text-xs">{errors.description}</p>}
              </div>
            </div>
            <div className="flex flex-row mt-3">
              <div className="basis-2/5 text-right pr-10 pt-3">Status</div>
              <div className="basis-3/5 justify-center">
                <Dropdown
                  options={StatusList}
                  disabled={!isEditEnabled && !state}
                  value={taskData.status}
                  name="status"
                  handleOnChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-row mt-3">
              <div className="basis-2/5 text-right pr-10 pt-3">Due Date</div>
              <div className="basis-3/5 justify-center">
                <DatePicker
                  value={taskData.dueDate}
                  disabled={!isEditEnabled && !state}
                  name="dueDate"
                  handleOnChange={handleDateChange}
                />
              </div>
            </div>
            <div className="flex flex-row mt-8">
              <div className="basis-2/5 text-right pr-10"></div>
              <div className="flex basis-3/5 justify-between">
                {!isEditEnabled && !state && (
                  <>
                    <Button
                      text="Edit Task"
                      width="w-[260px]"
                      customStyles="text-n-5"
                      height="h-[50px]"
                      onClick={handleEditButtonClick}
                    />
                    <Button
                      text="Delete Task"
                      width="w-[260px]"
                      customStyles="text-n-1"
                      height="h-[50px]"
                      bgColor="bg-n-3/90"
                      onClick={deleteButtonHandler}
                    />
                  </>
                )}
                {(isEditEnabled || state) && (
                  <>
                    <Button
                      text="Confirm"
                      width="w-[260px]"
                      customStyles="text-n-5"
                      height="h-[50px]"
                      onClick={handleConfirmButtonClick}
                    />
                    <Button
                      text="Cancel"
                      width="w-[260px]"
                      customStyles="text-n-1"
                      height="h-[50px]"
                      bgColor="bg-n-3/90"
                      onClick={handleCancelButtonClick}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {isDeleteModalOpen && (
        <Modal customStyles="rounded-xl">
          <div className="w-full p-10">
            <p className="text-n-5 mb-10">{`Are sure about deleting ${taskData.title} task?`}</p>
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
    </ContentWrapper>
  );
};

export default ViewTaskPage;
