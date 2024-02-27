const ProjectPageButton = ({ text, icon, onClick }) => {
  return (
    <button className="progressBtn" onClick={onClick}>
      {text}
      {icon && (
        <img
          src={icon}
          alt={text}
          style={{
            marginLeft: "5px",
            marginTop: "0px",
          }}
        />
      )}
    </button>
  );
};

export default ProjectPageButton;
