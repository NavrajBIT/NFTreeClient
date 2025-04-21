import {useNavigate} from "react-router-dom";
import PropTypes from "prop-types";
import "./projectCard.css";
import monitoringtag from "./assets/Monitoring.png";
import donationtag from "./assets/Crowdfunding.png";
import investmenttag from "./assets/Investment.png";

const ProjectCard = ({project, isMyProject}) => {
  const navigate = useNavigate();
  const navLink = isMyProject ? `/myprojects/${project.id}` : `/projects/${project.id}`;

  return (
    <div
      className='projectCard'
      onClick={() => navigate(navLink)}>
      <img
        src={project.image}
        alt={project.name}
        className='projectImage'
      />
      <div className='projectInfo'>
        <h3 className='projectName'>{project.name}</h3>
        <p className='projectLocation'>
          {project.city}, {project.country}
        </p>
        <div className='projectDetails'>
          <div className='detailItem'>
            <span className='detailLabel'>Project Type:</span>
            <span className='detailValue'>{project.project_type}</span>
          </div>
          <div className='detailItem'>
            <span className='detailLabel'>Area:</span>
            <span className='detailValue'>{project.area} HA</span>
          </div>
          <div className='detailItem'>
            <span className='detailLabel'>Age:</span>
            <span className='detailValue'>{project.age} Years</span>
          </div>
          <div className='detailItem'>
            <span className='detailLabel'>Carbon Credits:</span>
            <span className='detailValue'>{project.estimated_carbon_credits}</span>
          </div>
          <div className='detailItem'>
            <span className='detailLabel'>Survival Rate:</span>
            <span className='detailValue'>{project.estimated_survival_rate}</span>
          </div>
        </div>
        <div className='projectProgress'>
          <div className='progressBar'>
            <div
              className='progressFill'
              style={{
                width: `${(project.funding.raised / project.funding.total) * 100}%`
              }}
            />
          </div>
          <div className='progressText'>
            {Math.round((project.funding.raised / project.funding.total) * 100)}% Funded
          </div>
        </div>
      </div>
      <div className='projecttags'>
        {project.type === 1 && (
          <img
            src={monitoringtag}
            alt='Monitoring'
          />
        )}
        {project.type === 2 && (
          <img
            src={donationtag}
            alt='Donation'
          />
        )}
        {project.type === 3 && (
          <img
            src={investmenttag}
            alt='Investment'
          />
        )}
      </div>
      <div className='projectdescription'>{project.description}</div>
      <div className='readmore'>Read More</div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    project_type: PropTypes.string.isRequired,
    area: PropTypes.number.isRequired,
    age: PropTypes.number.isRequired,
    estimated_carbon_credits: PropTypes.string.isRequired,
    estimated_survival_rate: PropTypes.string.isRequired,
    funding: PropTypes.shape({
      raised: PropTypes.number.isRequired,
      total: PropTypes.number.isRequired
    }).isRequired,
    type: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired,
  isMyProject: PropTypes.bool
};

export default ProjectCard;
