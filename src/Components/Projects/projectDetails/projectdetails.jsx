import {useEffect} from "react";
import useProjectDetails from "./usedetails";
import PrimaryDetails from "./primaryDetails";
import ProjectImages from "./projectImages";
import Ownerdetails from "./ownerdetails";
import Projectdocs from "./projectdocs";
import PlantImages from "./plantImages";
import Loading from "../../Subcomponents/loading/loading";
import Recipients from "./recipients";
import {useNavigate, useParams} from "react-router-dom";
import Auth from "../../Auth/Auth";
import PropTypes from "prop-types";
import "./details.css";

const Projectdetails = ({notMyProject}) => {
  const {projectId} = useParams();
  const navigate = useNavigate();
  const {
    project,
    isLoading,
    isLoggedIn,
    setIsLoggedIn,
    projectImages,
    plantImages,
    projectDocs,
    recipients,
    uploadProjectImage,
    uploadGalleryImage,
    uploadPlantImage,
    uploadProjectDoc,
    addRecipient,
    deleteRecipient,
    deleteGalleryImage,
    deleteDoc,
    updateProjectPopup,
    setUpdateProjectPopup,
    updateProject
  } = useProjectDetails(projectId);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn]);

  if (isLoading) {
    return <Loading />;
  }

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className='projectDetailsContainer'>
      <div className='projectHeader'>
        <div className='projectImage'>
          <img
            src={project.image}
            alt={project.name}
          />
        </div>
        <div className='projectInfo'>
          <h1>{project.name}</h1>
          <p className='projectLocation'>
            {project.city}, {project.country}
          </p>
          <div className='projectStats'>
            <div className='statItem'>
              <span className='statLabel'>Project Type:</span>
              <span className='statValue'>{project.project_type}</span>
            </div>
            <div className='statItem'>
              <span className='statLabel'>Area:</span>
              <span className='statValue'>{project.area} HA</span>
            </div>
            <div className='statItem'>
              <span className='statLabel'>Age:</span>
              <span className='statValue'>{project.age} Years</span>
            </div>
            <div className='statItem'>
              <span className='statLabel'>Carbon Credits:</span>
              <span className='statValue'>{project.estimated_carbon_credits}</span>
            </div>
            <div className='statItem'>
              <span className='statLabel'>Survival Rate:</span>
              <span className='statValue'>{project.estimated_survival_rate}</span>
            </div>
            <div className='statItem'>
              <span className='statLabel'>Total Plants:</span>
              <span className='statValue'>{project.plant_planned}</span>
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
      </div>

      <div className='projectDescription'>
        <h2>Description</h2>
        <p>{project.description}</p>
      </div>

      <div className='projectSpecies'>
        <h2>Plant Species</h2>
        <div className='speciesList'>
          {project.species.species.map((species, index) => (
            <div
              key={index}
              className='speciesItem'>
              <span className='speciesName'>{species.plant}</span>
              <span className='speciesPercentage'>{species.percentage}%</span>
            </div>
          ))}
        </div>
      </div>

      <ProjectImages
        details={{project, projectImages, uploadGalleryImage, deleteGalleryImage}}
      />

      <PlantImages details={{project, plantImages, uploadPlantImage}} />

      <Projectdocs details={{project, projectDocs, uploadProjectDoc, deleteDoc}} />

      {!notMyProject && (
        <Recipients details={{project, recipients, addRecipient, deleteRecipient}} />
      )}

      {project.carbonCredit_enabled != true && <Ownerdetails details={project} />}
    </div>
  );
};

Projectdetails.propTypes = {
  notMyProject: PropTypes.bool
};

export default Projectdetails;
