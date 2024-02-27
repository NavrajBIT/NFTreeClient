import "./userView.css";
import ProjectPageButton from "./projectButton";
const ProjectDesc = ({ isOwnerView, details }) => {
  return (
    <div className="projectDescContainer" style={{}}>
      <div
        style={{
          width: "400px",
          height: "60px",
          backgroundColor: "#BFCCA6",
          borderRadius: "20px",
          boxShadow: "3px 4px 30px 0px",
          padding: "1rem",
        }}
      >
        <p
          style={{
            fontSize: "1.7rem",
            color: "black",
            textAlign: "center",
            fontFamily: "DM Serif Display",
          }}
        >
          {details?.project?.name}
        </p>
      </div>

      <div
        style={{
          width: "92%",
          minHeight: "200px",
          backgroundColor: "#BFCCA6",
          borderRadius: "20px",
          boxShadow: "3px 4px 30px 0px",
          padding: "1rem",
        }}
      >
        <p
          style={{
            fontSize: "1.2rem",
            fontFamily: "Inter",
          }}
        >
          <b>Description:</b>
          {details?.project?.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectDesc;
