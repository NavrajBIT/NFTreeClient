import "./button.css";

const Button = ({
  title,
  variant,
  startIcon,
  endIcon,
  onClick,
  type,
  style,
}) => {
  return (
    <button
      onClick={onClick}
      className={variant}
      type={type}
      style={{ ...style }}
    >
      {startIcon && <img src={startIcon} alt={title} />}
      {title}
      {endIcon && <img src={endIcon} alt={title} />}
    </button>
  );
};

export default Button;