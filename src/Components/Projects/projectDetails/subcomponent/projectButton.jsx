const ProjectPageButton = ({ text, icon, onClick }) => {
  return (
    <button className="progressBtn" onClick={onClick}>
      <span>{text}</span>
      {icon && <img src={icon} alt={text} />}
    </button>
  );
};

export default ProjectPageButton;
