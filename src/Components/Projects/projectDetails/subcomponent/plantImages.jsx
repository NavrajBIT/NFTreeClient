import "./userView.css";
import PlantImageBox from "./plantImageBox";
import ProjectPageButton from "./projectButton";
import { useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
const PlantImages = ({ isOwnerView, details }) => {
  const navigate = useNavigate();
  const imageref = useRef(null);
  const addimageref = useRef(null);
  const [seeMore, setSeeMore] = useState(false);

  const images = details?.plantImages ? details.plantImages : [];

  return (
    <div className="btnsAndPlantImageContainer">
      <div className="buttonContainer">
        <ProjectPageButton
          text={"Share"}
          icon={"/material-symbols_share.png"}
          onClick={() => {
            console.log(navigator);
            navigator.clipboard.writeText(
              `https://bitbhoomi.com/projects/${details?.projectId}`
            );
            alert("Project link copied to clipboard.");
          }}
        />
        <ProjectPageButton
          text={" View Report"}
          icon={"/ViewReportIcon.png"}
          onClick={() => navigate(`/projects/${details?.projectId}/report`)}
        />
        {details?.project?.type === 3 && (
          <ProjectPageButton
            text={"Invest"}
            icon={"/Group.png"}
            onClick={() => navigate(`/projects/${details?.projectId}/donate`)}
          />
        )}
      </div>
      {/* {isOwnerView && (
        <div div className="buttonContainer">
          <input
            type="file"
            style={{ display: "none" }}
            ref={imageref}
            onChange={(e) => details.uploadProjectImage(e.target.files[0])}
          />
          <ProjectPageButton
            text={"Edit Image"}
            icon={"/EditImage.png"}
            onClick={() => imageref.current.click()}
          />
          {<ProjectPageButton text={"Send Report"} icon={"/SendIcon.png"} />}
        </div>
      )} */}

      <div className="imagesContainer">
        <div>
          <h1 className="projectHeading">Plant Images</h1>
        </div>
        <div className="ImageGrid">
          {images &&
            images.length > 0 &&
            images.map(
              (image, index) =>
                (index < (isOwnerView ? 3 : 4) || seeMore) && (
                  <PlantImageBox img={image} key={`plant-image-${index}`} />
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
              onClick={() => addimageref.current.click()}
            >
              <p className="plantImageText"> + Add Image</p>
              <input
                type="file"
                ref={addimageref}
                style={{ display: "none" }}
                onChange={(e) => details.uploadPlantImage(e.target.files[0])}
              />
            </div>
          )}
        </div>
        {images.length > (isOwnerView ? 3 : 4) && (
          <span
            style={{
              fontWeight: "500",
              position: "absolute",
              marginTop: "10px",
              right: "5%",
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
    </div>
  );
};

export default PlantImages;
