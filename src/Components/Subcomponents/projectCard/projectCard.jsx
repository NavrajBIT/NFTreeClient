import { useNavigate } from "react-router-dom";
import "./projectcard.css";

const ProjectCard = ({
  project,
  isMyProject,
  Nftproject,
  nftId,
  contribution,
  treecount,
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
    ? `/nft/${nftId}`
    : `/projects/${project.id}`;

  return (
    <div className="projectCard" onClick={() => navigate(navLink)}>
      <img src={project.image} alt={project.name} />
      <div className="projectname">{project.name}</div>
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
      </div>
    </div>
  );
};

export default ProjectCard;
