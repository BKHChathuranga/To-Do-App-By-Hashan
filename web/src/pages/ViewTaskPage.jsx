import React, { useState } from "react";
import ContentWrapper from "../components/ContentWrapper";
import ViewTaskInput from "../components/ViewTaskInput";
import ViewTaskTextarea from "../components/ViewTaskTextarea";
import Dropdown from "../components/Dropdown";
import StatusList from "../constants/statusList";
import DatePicker from "../components/DatePicker";
import Button from "../components/Button";

const ViewTaskPage = () => {
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    status: "",
    dueDate: "",
  });
  const [isEditEnabled, setIsEditEnabled] = useState(false);

  const handleEditButtonClick = () => {
    setIsEditEnabled(true);
  };
  const handleCancelButtonClick = () => {
    setIsEditEnabled(false);
  };
  return (
    <ContentWrapper>
      <div className="w-[1000px]">
        <div className="pt-[5rem] font-semibold text-3xl text-center">
          View Task
        </div>
        <div className=" bg-n-2/40 backdrop-blur-lg px-10 rounded-lg py-16">
          <div className="flex flex-col w-full">
            <div className="flex flex-row mt-3">
              <div className="basis-2/5 text-right pr-10">Name</div>
              <div className="basis-3/5 justify-center">
                <ViewTaskInput value={taskData.title} />
              </div>
            </div>
            <div className="flex flex-row mt-3">
              <div className="basis-2/5 text-right pr-10">Description</div>
              <div className="basis-3/5 justify-center">
                <ViewTaskTextarea value={taskData.description} />
              </div>
            </div>
            <div className="flex flex-row mt-3">
              <div className="basis-2/5 text-right pr-10 pt-3">Status</div>
              <div className="basis-3/5 justify-center">
                <Dropdown
                  options={StatusList}
                  disabled={isEditEnabled ? false: true}
                  value={taskData.status}
                />
              </div>
            </div>
            <div className="flex flex-row mt-3">
              <div className="basis-2/5 text-right pr-10 pt-3">Due Date</div>
              <div className="basis-3/5 justify-center">
                <DatePicker value={taskData.dueDate} disabled={isEditEnabled ? false: true}/>
              </div>
            </div>
            <div className="flex flex-row mt-8">
              <div className="basis-2/5 text-right pr-10"></div>
              <div className="flex basis-3/5 justify-between">
                {!isEditEnabled && (
                  <>
                    <Button
                      text="Edit Task"
                      width="w-[260px]"
                      customStyles="text-n-5"
                      height="h-[50px]"
                      onClick={handleEditButtonClick}
                    />{" "}
                    <Button
                      text="Delete Task"
                      width="w-[260px]"
                      customStyles="text-n-1"
                      height="h-[50px]"
                      bgColor="bg-n-3/90"
                    />
                  </>
                )}
                {isEditEnabled && (
                  <>
                    <Button
                      text="Confirm"
                      width="w-[260px]"
                      customStyles="text-n-5"
                      height="h-[50px]"
                    />{" "}
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
    </ContentWrapper>
  );
};

export default ViewTaskPage;
