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
<<<<<<< HEAD
  contribution,
  treecount,
=======
  transaction,
>>>>>>> 0bf9333728cf8ef7c6a66aaf11cf535cb419fafe
}) => {
  const navigate = useNavigate();

  const filterOptions = [
    {
      label: "Monitoring",
      value: 1,
    },
    {
      label: "Donation & Monitoring",
      value: 2,
    },
    {
      label: "Investment",
      value: 3,
    },
  ];

  const navLink = isMyProject
    ? `/myprojects/${project.id}`
    : Nftproject
    ? `/profile`
    : `/projects/${project.id}`;

  return (
    <div className="projectCard" onClick={() => navigate(navLink)}>
      <img src={project.image} alt={project.name} />
      <div className="projectname">{project.name}</div>
<<<<<<< HEAD
      <div className="projectLocation">
        <span className="locationName">{project.city}</span>
        &bull;
        <span className="locationName">{project.country}</span>
      </div>
      <div className="projectdescription">
        {project.description.length > 140 ? (
          <>
            {project.description.substring(0, 140)}...
            <p style={{ fontWeight: "600" }}>Read More</p>
          </>
        ) : (
          project.description
        )}
      </div>
      <div className="trxInfo">
        {contribution && <div>Contribution: {contribution}$</div>}
        {treecount && <div>Trees: {treecount}</div>}
        {!contribution && !treecount && (
          <div>{filterOptions[project.type - 1].label}</div>
        )}
=======
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
>>>>>>> 0bf9333728cf8ef7c6a66aaf11cf535cb419fafe
      </div>
    </div>
  );
};

export default ProjectCard;
