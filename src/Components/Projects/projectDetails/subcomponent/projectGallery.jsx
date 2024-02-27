import "./userView.css";
import PlantImageBox from "./plantImageBox";
const ProjectGallery = ({ details }) => {
  return (
    <div className="projectGalleryContainer">
      <div>
        <p className="projectGalleryTitle">Project Gallery</p>
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          marginTop: "5rem",
        }}
      >
        {details?.projectImages?.map((img, index) => (
          <PlantImageBox src={img} key={`project-image-${index}`} />
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;
