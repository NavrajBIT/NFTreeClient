import { useNavigate } from "react-router-dom";
import ShareIcon from "@mui/icons-material/Share";
import AssessmentIcon from "@mui/icons-material/Assessment";

const Myprojects = ({ script }) => {
  const navigate = useNavigate();

  let projectsAvailable = script.myprojects ? true : false;
  try {
    if (script.myprojects.length === 0) {
      projectsAvailable = false;
    }
  } catch {}

  return (
    <div className="primarycontainer" style={{ flexDirection: "column" }}>
      <div
        style={{
          fontSize: "2rem",
          fontWeight: "700",
          color: "var(--green-30)",
        }}
      >
        My Projects
      </div>
      <div>Projects Created by me</div>
      <div className="primarybutton" style={{ width: "fit-content" }}>
        <button onClick={() => navigate("/projects/create")}>
          Create New Project +
        </button>
      </div>
      {!projectsAvailable && "No Projects yet..."}
      {/* <button onClick={() => console.log(script.myprojects.length)}>
        Projects
      </button> */}
      {projectsAvailable && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            gap: "var(--padding-main)",
            flexWrap: "wrap",
          }}
        >
          {script?.myprojects?.map((project, index) => (
            <ProjectCard project={project} key={"my-project-" + index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Myprojects;

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();
  return (
    <div className="projectCard">
      <img src={project.image} alt={project.name} />
      <div className="projectname">{project.name}</div>
      <div className="projectdescription">{project.description}</div>
      <div
        className="clickhandler"
        onClick={() => navigate(`/myprojects/${project.id}`)}
      />
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "var(--padding-light)",
        }}
      >
        <div className="secondarybutton">
          <button>
            Share <ShareIcon />
          </button>
        </div>
        <div className="secondarybutton">
          <button onClick={() => navigate(`/myprojects/${project.id}/update`)}>
            Update <AssessmentIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
