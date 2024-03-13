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
    <div
      className="primarycontainer"
      style={{ flexDirection: "column", margin: "var(--padding-large) 0" }}
    >
      <div
        style={{
          color: "var(--green-30)",
          padding: "var(--padding-main) 0",
          fontWeight: "600",
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div>
          <p
            style={{
              fontSize: "2rem",
              fontWeight: "700",
              color: "var(--green-30)",
            }}
          >
            My Projects
          </p>
          <p>Projects Created by me</p>
        </div>

        <div>
          <button
            style={{
              color: "var(--green-30)",
              height: "100%",
              background: "var(--green-110)",
              padding: "0 var(--padding-light)",
              borderRadius: "var(--border-radius-light)",
              color: "white",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
            className="buttonText"
            onClick={() => navigate("/projects/create")}
          >
            <span
              style={{
                fontSize: "40px",
              }}
            >
              +
            </span>
            <p>Create New Project</p>
          </button>
        </div>
      </div>
      {!projectsAvailable && "No Projects yet..."}

      {projectsAvailable && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill, minmax(var(--project-card-width), 1fr) )",
            gap: "var(--padding-large)",
            justifyItems: "center",
            padding: script?.myprojects < 4 ? "0 var(--padding-large)" : "0px",
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
