import { useNavigate } from "react-router-dom";
import "./projectcard.css";

const ProjectCard = ({ project, isMyProject, Nftproject, nftId }) => {
  const navigate = useNavigate();

  const navLink = isMyProject
    ? `/myprojects/${project.id}`
    : Nftproject
    ? `/nft/${nftId}`
    : `/projects/${project.id}`;

  return (
    <div className="projectCard" onClick={() => navigate(navLink)}>
      <img src={project.image} alt={project.name} />
      <div className="projectname">{project.name}</div>
      <div className="projectdescription">{project.description}</div>
    </div>
  );
};

export default ProjectCard;
