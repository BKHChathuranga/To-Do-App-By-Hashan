const TextArea = ({label}) => {
  return (
    <div className='flex flex-col mt-3'>
      <label className='text-n-5'>{label}</label>
      <textarea className=' px-5 py-4 h-32 mt-2 mb-1 text-sm leading-4.5 font-normal rounded-lg outline outline-2
          hover:text-n-5 hover:outline-secondary-50 hover:opacity-100 placeholder:text-n-4 border-n-5 text-n-5 outline-n-6'/>
    </div>
  )
}

export default TextArea