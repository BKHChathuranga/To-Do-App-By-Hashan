const ViewTaskInput = ({ value, name, handleOnChange, disabled }) => {
  return (
    <div className="flex flex-col">
      <input
        className=" px-5 py-4 h-10 mt-2 mb-1 text-sm leading-4.5 font-normal rounded-lg outline outline-2
           hover:outline-secondary-50 hover:opacity-100 placeholder:text-n-4 border-n-5 text-n-1 outline-n-1 bg-transparent"
      name={name}
      value={value}
      onChange={handleOnChange}
      disabled={disabled}
      />
    </div>
  );
};

export default ViewTaskInput;
