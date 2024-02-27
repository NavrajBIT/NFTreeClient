import "./userView.css";
import PlantImageBox from "./plantImageBox";
import ProjectPageButton from "./projectButton";
import { useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
const PlantImages = ({ isOwnerView, details }) => {
  const navigate = useNavigate();
  const imageref = useRef(null);
  const [images, setImages] = useState([]);
  useEffect(() => {
    try {
      poppulateImages();
    } catch (err) {
      console.log(err);
    }
  }, []);
  const poppulateImages = async () => {
    const plantTypesArray = [];
    try {
      details?.project?.species?.species?.map((specie) => {
        plantTypesArray.push(specie.plant);
      });
    } catch {}
    console.log(plantTypesArray);
    plantTypesArray.map((plant) => {
      fetchImages(plant);
    });
  };

  const fetchImages = async (treeType) => {
    let ACCESS_KEY = import.meta.env.VITE_UNSPLASH_KEY;
    const apiUrl = `https://api.unsplash.com/photos/random?query=${treeType}_plant&client_id=${ACCESS_KEY}`;
    fetch(apiUrl)
      .then(async (res) => {
        if (res.status === 200) {
          let data = await res.json();
          console.log(data);
          setImages((prev) => {
            let newArray = [...prev];
            newArray.push({ image: data.urls.full, name: treeType });
            return newArray;
          });
        }
      })
      .catch((err) => console.log(err));
  };
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
        <ProjectPageButton
          text={"Invest"}
          icon={"/Group.png"}
          onClick={() => navigate(`/projects/${details?.projectId}/donate`)}
        />
      </div>
      {isOwnerView && (
        <div
          style={{
            marginTop: "1rem",
            gap: "2rem",
            display: "flex",
          }}
        >
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
          <ProjectPageButton text={"Send Report"} icon={"/SendIcon.png"} />
        </div>
      )}

      <div className="imagesContainer">
        <div>
          <p
            style={{
              fontSize: "1.8rem",
              fontWeight: "700",
              textAlign: "center",
              fontFamily: "DM Serif Display",
            }}
          >
            Plant Images
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "5rem",
          }}
        >
          {images &&
            images.length > 0 &&
            images.map((image, index) => (
              <PlantImageBox src={image.image} key={`plant-image-${index}`} />
            ))}
        </div>
      </div>

      {/* <ProjectDocument /> */}
    </div>
  );
};

export default PlantImages;
