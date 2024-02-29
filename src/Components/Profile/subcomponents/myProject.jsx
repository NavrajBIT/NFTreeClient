import ProjectCard from "../../Subcomponents/projectCard/projectCard";
import { useNavigate } from "react-router-dom";
import "./profile.css"
const MyProject = ({ script }) => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundColor: "#D2E0D6",
        width: "100%",
        padding: "18rem 2rem 2rem 2rem",
        // marginTop: "5rem",
        height: "auto",
        // '@media (max-width: 800px)': {
        //   display:"flex" 
        // }
      }}
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
            Projects
          </p>
          <p
          className="pPara"
          
          >
            Projects Created By Me
          </p>
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
