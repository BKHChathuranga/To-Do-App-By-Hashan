import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Button from "../components/Button";
import ContentWrapper from "../components/ContentWrapper";
import DatePicker from "../components/DatePicker";
import Dropdown from "../components/Dropdown";
import Input from "../components/Input";
import Modal from "../components/Modal";
import Table from "../components/Table";
import TextArea from "../components/TextArea";
import StatusList from "../constants/statusList";
import { addNewTodo, getTodoList } from "../service/TodoService";
import Cross from "../assets/Cross";



const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    dueDate: new Date(),
    status: "pending",
  });
  const [errors, setErrors] = useState({ title: "", description: "" });

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTodoList();
      if (data) {
        setTodoList(data.data);
      }
    };

    fetchData();
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setErrors({ title: "", description: "" });
  };

  const handleCancel = () => {
    setTaskData({
      title: "",
      description: "",
      dueDate: new Date(),
      status: "pending",
    });
    setErrors({ title: "", description: "" });
    closeModal();
  };

  const changeHandler = (e) => {
    setTaskData({ ...taskData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleDateChange = (date) => {
    setTaskData({
      ...taskData,
      dueDate: date,
    });
    console.log(taskData)
  };

  const addTaskHandler = async () => {
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
      const response = await addNewTodo(taskData);
      if (response === 201) {
        setTaskData({
          title: "",
          description: "",
          dueDate: new Date(),
          status: "pending",
        });
        toast.success("To-Do added successfully");
        const updatedList = await getTodoList();
        if(updatedList){
          setTodoList(updatedList.data);
          closeModal();
        }
        
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContentWrapper>
      <div className="w-full">
        <div className="pt-[5rem] font-semibold text-3xl text-center">
          TODO List
        </div>
        <div className="flex w-full justify-end mt-5 my-10">
          <Button
            text="Add Task"
            width="w-[200px]"
            customStyles="text-n-5 font-semibold"
            onClick={openModal}
          />
        </div>
        <div>
          <Table tasks={todoList} />
        </div>
      </div>
      {isModalOpen && (
        <Modal customStyles="p-5 w-[50%] rounded-lg">
          <div className="w-full flex flex-row justify-between">
            <div className="flex flex-col">
              <p className="text-n-5 font-semibold">Create Task</p>
              <p className="text-n-5 text-sm">
                You are going to create a new task
              </p>
            </div>
            <p className="text-n-5 cursor-pointer" onClick={closeModal}>
              <Cross/>
            </p>
          </div>
          <div>
            <Input
              label="Title"
              value={taskData.title}
              name="title"
              handleOnChange={changeHandler}
            />
            {errors.title && <p className="text-n-3 text-xs">{errors.title}</p>}
            <TextArea
              label="Description"
              height={500}
              value={taskData.description}
              name="description"
              handleOnChange={changeHandler}
            />
            {errors.description && <p className="text-n-3 text-xs">{errors.description}</p>}
            <div className="flex flex-row">
              <Dropdown
                label="Status"
                options={StatusList}
                value={taskData.status}
                name="status"
                handleOnChange={changeHandler}
              />
              <DatePicker
                label="Due Date"
                dateValue={taskData.dueDate}
                name="dueDate"
                handleOnChange={handleDateChange}
              />
            </div>
            <Button
              text="Confirm"
              width="w-full"
              bgColor="bg-n-2"
              height="h-11"
              customStyles="mt-3"
              onClick={addTaskHandler}
            />
            <Button
              text="Cancel"
              width="w-full"
              height="h-11"
              customStyles="my-3 text-n-5 border-1 border-n-5/50 border"
              onClick={handleCancel}
            />
          </div>
        </Modal>
      )}
    </ContentWrapper>
  );
};

export default HomePage;
