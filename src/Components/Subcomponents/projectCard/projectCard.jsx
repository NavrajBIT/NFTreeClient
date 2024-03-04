import { useNavigate } from "react-router-dom";
import "./projectcard.css";
import monitoringtag from "./assets/Monitoring.png";
import donationtag from "./assets/Crowdfunding.png";
import investmenttag from "./assets/Investment.png";

const ProjectCard = ({
  project,
  isMyProject,
  Nftproject,
  nftId,
  transaction,
}) => {
  const navigate = useNavigate();

  const navLink = isMyProject
    ? `/myprojects/${project.id}`
    : Nftproject
    ? `/profile`
    : `/projects/${project.id}`;

  return (
    <div className="projectCard" onClick={() => navigate(navLink)}>
      <img src={project.image} alt={project.name} />
      <div className="projectname">{project.name}</div>
      <div className="projectlocation">
        {project.city}.{project.country}
      </div>
      <div>
        <div className="projectdescription">{project.description}</div>
        <div className="readmore">Read More</div>
      </div>
      <div className="projecttags">
        {project.type == 1 && "Monitoring"}
        {project.type == 2 && "Donation"}
        {transaction &&
          project.type == 2 &&
          `Contibution : ${transaction?.amount}$`}
        {project.type == 3 && "Investment"}
        {project.type === 1 && <img src={monitoringtag} alt="" />}
        {project.type === 2 && <img src={donationtag} alt="" />}
        {project.type === 3 && <img src={investmenttag} alt="" />}
      </div>
    </div>
  );
};

export default ProjectCard;
