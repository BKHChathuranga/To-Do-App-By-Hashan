

const Button = ({height,
  width,
  bgColor,
  customStyles,
  text,
  onClick}) => {
  return (
    <button
      className={`${height ?  height : "h-[62px]" } ${width} ${bgColor ? bgColor : "bg-n-1"} ${customStyles} rounded-lg` } onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
