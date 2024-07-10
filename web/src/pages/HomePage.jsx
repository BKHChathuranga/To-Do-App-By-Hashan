import { useState } from "react";
import Button from "../components/Button";
import ContentWrapper from "../components/ContentWrapper";
import DatePicker from "../components/DatePicker";
import Dropdown from "../components/Dropdown";
import Input from "../components/Input";
import Modal from "../components/Modal";
import Table from "../components/Table";
import TextArea from "../components/TextArea";
import StatusList from "../constants/statusList";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
          <Table />
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
              close
            </p>
          </div>
          <div>
            <Input label="Title" />
            <TextArea label="Description" height={500} />
            <div className="flex flex-row">
              <Dropdown label="Status" options={StatusList} />
              <DatePicker label="Due Date" />
            </div>
            <Button
              text="Confirm"
              width="w-full"
              bgColor="bg-n-2"
              height="h-11"
              customStyles="mt-3"
            />
            <Button
              text="Cancel"
              width="w-full"
              height="h-11"
              customStyles="my-3 text-n-5 border-1 border-n-5/50 border"
            />
          </div>
        </Modal>
      )}
    </ContentWrapper>
  );
};

export default HomePage;
