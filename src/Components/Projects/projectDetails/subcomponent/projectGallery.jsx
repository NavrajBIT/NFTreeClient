import "./userView.css";
import PlantImageBox from "./plantImageBox";
import { useState } from "react";

const ProjectGallery = ({ isOwnerView, details }) => {
  const [seeMore, setSeeMore] = useState(false);
  return (
    <div className="projectGalleryContainer">
      <div>
        <h1 className="projectHeading">Project Gallery</h1>
      </div>

      <div className="ImageGrid">
        {details?.project?.gallery?.map(
          (img, index) =>
            (index < (isOwnerView ? 3 : 4) || seeMore) && (
              <PlantImageBox img={img} key={`project-image-${index}`} />
            )
        )}
        {isOwnerView && (
          <div
            className="plantImageBox"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p className="plantImageText"> + Add Image</p>
          </div>
        )}
      </div>
      {details?.project?.gallery?.length > (isOwnerView ? 3 : 4) && (
        <span
          style={{
            fontWeight: "500",
            position: "absolute",
            marginTop: "20px",
            right: "10%",
            fontSize: "18px",
            cursor: "pointer",
          }}
          className="SeeMoreText"
          onClick={() => setSeeMore(!seeMore)}
        >
          {seeMore ? "See Less..." : "See more..."}
        </span>
      )}
    </div>
  );
};

export default ProjectGallery;
