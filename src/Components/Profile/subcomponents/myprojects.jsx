import { useNavigate } from "react-router-dom";
import ShareIcon from "@mui/icons-material/Share";
import ProjectCard from "../../Subcomponents/projectCard/projectCard";

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
      <div
        style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
      >
        <div className="primarybutton" style={{ width: "fit-content" }}>
          <button onClick={() => navigate("/projects/create")}>
            Create New Project +
          </button>
        </div>
      </div>
      {!projectsAvailable && "No Projects yet..."}

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
            <ProjectCard
              project={project}
              key={"my-project-" + index}
              isMyProject
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Myprojects;
