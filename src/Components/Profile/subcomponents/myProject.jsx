import ProjectCard from "../../Subcomponents/projectCard/projectCard";
import { useNavigate } from "react-router-dom";
const MyProject = ({ script }) => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundColor: "#D2E0D6",
        width: "100%",
        padding: "2rem",
        marginTop: "5rem",
        height: "auto",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <p
            style={{
              fontSize: "1.6rem",
              fontWeight: "600",
            }}
          >
            Projects
          </p>
          <p
            style={{
              marginTop: "0.5rem",
            }}
          >
            Projects Created By Me
          </p>
        </div>
        <div>
          <button
            className="profileButtons"
            onClick={() => navigate(`/projects/create`)}
          >
            <img src="./VectorPlus.png" alt="Plus" />
            <span style={{}}>Create New Projects</span>
          </button>
        </div>
      </div>

      <div className="projectCardDiv">
        {script?.myprojects?.map((project, index) => (
          <ProjectCard
            project={project}
            key={`my-project-${index}`}
            isMyProject
          />
        ))}
      </div>
    </div>
  );
};

export default MyProject;
