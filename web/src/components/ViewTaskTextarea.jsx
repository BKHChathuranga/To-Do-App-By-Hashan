import React from "react";

const ViewTaskTextarea = ({ name, value, handleOnChange, disabled }) => {
  return (
    <div className="flex flex-col mt-3">
      <textarea
        className=" px-5 py-4 h-32 mb-1 text-sm leading-4.5 font-normal rounded-lg outline outline-2
          hover:outline-secondary-50 hover:opacity-100 placeholder:text-n-4 border-n-5 text-n-1 outline-n-1 bg-transparent"
        name={name}
        value={value}
        onChange={handleOnChange}
        disabled={disabled}
      />
    </div>
  );
};

export default ViewTaskTextarea;
