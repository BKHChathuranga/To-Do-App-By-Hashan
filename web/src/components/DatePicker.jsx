import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import default styles for the calendar

function DatePicker({ label, disabled = false, name, handleOnChange,dateValue }) {
  const [value, setValue] = useState(dateValue ? dateValue : new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const handleDateChange = (date) => {
    setShowCalendar(false);
    handleOnChange(date);
    setValue(date)
  };

  return (
    <div className="relative flex flex-col mt-3 w-full">
      <label className="text-n-5">{label}</label>
      <button
        className={`px-2 w-[50%] text-left h-10 mt-2 mb-1 text-sm font-normal rounded-lg outline outline-2
          hover:text-n-5 hover:outline-secondary-50 hover:opacity-100 border-n-5 text-n-5 outline-n-6  ${disabled ? 'bg-n-6':'bg-n-1'}`}
        onClick={toggleCalendar}
        disabled={disabled}
        name={name}
      >
        {value.toDateString()}
      </button>
      {showCalendar && (
        <div className="absolute -top-64 mt-1 outline outline-1 outline-n-5 z-10 rounded-lg">
          <Calendar onChange={handleDateChange} value={value} />
        </div>
      )}
    </div>
  );
}

export default DatePicker;
