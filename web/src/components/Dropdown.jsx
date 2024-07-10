const Dropdown = ({ label, options,disabled=false }) => {
  return (
    <div className='flex flex-col mt-3 w-full'>
      <label className='text-n-5'>{label}</label>
      <select className='px-2 w-[50%] text-left h-10 mt-2 mb-1 text-sm font-normal rounded-lg outline outline-2
          hover:text-n-5 hover:outline-secondary-50 hover:opacity-100 border-n-5 text-n-5 outline-n-6' disabled={disabled}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  )
}

export default Dropdown;
