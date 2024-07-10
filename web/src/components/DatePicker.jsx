import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css'; // Import default styles for the calendar

function DatePicker({ label, disabled = false }) {
  const [value, setValue] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  return (
    <div className="relative flex flex-col mt-3 w-full">
      <label className="text-n-5">{label}</label>
      <button
        className="px-2 w-[50%] text-left h-10 mt-2 mb-1 text-sm font-normal rounded-lg outline outline-2
          hover:text-n-5 hover:outline-secondary-50 hover:opacity-100 border-n-5 text-n-5 outline-n-6"
        onClick={toggleCalendar}
        disabled={disabled}
      >
        {value.toDateString()}
      </button>
      {showCalendar && (
        <div className="absolute -top-64 mt-1 outline outline-1 outline-n-5 z-10 rounded-lg">
          <Calendar onChange={setValue} value={value} />
        </div>
      )}
    </div>
  );
}

export default DatePicker;
