const Modal = ({  customStyles, paddingX, paddingY, children }) => (
<div className="w-screen h-screen fixed left-0 top-0 flex justify-center items-center z-50">
    <div className="absolute bg-[#122F4A] opacity-60 inset-0 z-0" />
    <div
      className={`${customStyles} ${paddingX} ${paddingY} relative w-160 h-145 bg-n-1 rounded-5`}
    >
      {children}
    </div>
  </div>
  
);


export default Modal