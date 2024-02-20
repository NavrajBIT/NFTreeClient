import "./button.css";

const Button = ({ title, variant, startIcon, endIcon, onClick, type }) => {
  return (
    <button onClick={onClick} className={variant} type={type}>
      {startIcon && <img src={startIcon} alt={title} />}

      <p style={{ width: "max-content" }}>{title}</p>
      {endIcon && <img src={endIcon} alt={title} />}
    </button>
  );
};

export default Button;
