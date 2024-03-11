import "./userView.css";
import PlantImageBox from "./plantImageBox";
import { useRef, useState } from "react";

const ProjectGallery = ({ isOwnerView, details }) => {
  const [seeMore, setSeeMore] = useState(false);
  const imagebuttonref = useRef(null);
  return (
    <div className="projectGalleryContainer">
      <div>
        <h1 className="projectHeading">Project Gallery</h1>
      </div>

      <div className="ImageGrid">
        {details?.projectImages?.map(
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
            onClick={() => imagebuttonref.current.click()}
          >
            <p className="plantImageText"> + Add Image</p>
            <input
              type="file"
              style={{ display: "none" }}
              ref={imagebuttonref}
              onChange={(e) => details.uploadGalleryImage(e.target.files[0])}
            />
          </div>
        )}
      </div>
      {details?.projectImages?.length > (isOwnerView ? 3 : 4) && (
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
