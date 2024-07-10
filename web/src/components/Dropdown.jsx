const Dropdown = ({
  label,
  options,
  disabled = false,
  value = "pending",
  name,
  handleOnChange,
}) => {
  return (
    <div className="flex flex-col mt-3 w-full">
      <label className="text-n-5">{label}</label>
      <select
        className="px-2 w-[50%] text-left h-10 mt-2 mb-1 text-sm font-normal rounded-lg outline outline-2
          hover:text-n-5 hover:outline-secondary-50 border-n-5 text-n-5 outline-n-6 bg-n-1"
        disabled={disabled}
        value={value}
        name={name}
        onChange={handleOnChange}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
