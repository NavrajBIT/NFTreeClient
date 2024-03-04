import ProjectCard from "../../Subcomponents/projectCard/projectCard";
import { useNavigate } from "react-router-dom";
import "./profile.css"
const MyProject = ({ script }) => {
  const navigate = useNavigate();
  return (
    <div
    className="myProjectsDiv"
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems:"center"
        }}
      >
        <div>
          <p
          className="pTitle"
            
          >
           My Projects
          </p>
          {/* <p
          className="pPara"
          
          >
            Projects Created By Me
          </p> */}
        </div>
        <div>
          <button
            className="profileButtons"
            onClick={() => navigate(`/projects/create`)}
          >
            <img src="./VectorPlus.svg" alt="Plus" />
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
