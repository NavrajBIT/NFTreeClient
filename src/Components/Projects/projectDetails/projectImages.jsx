import AddIcon from "@mui/icons-material/Add";
import "./details.css";
import { useRef } from "react";

const ProjectImages = ({ details, notMyProject }) => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "var(--max-width)",
        background: "var(--green-20)",
        padding: "var(--padding-main)",
        borderRadius: "var(--border-radius)",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        gap: "var(--padding-light)",
        justifyContent: "space-around",
      }}
    >
      <div
        style={{
          fontSize: "1.5rem",
          fontWeight: "700",
          color: "var(--green-30)",
        }}
      >
        Project Gallery
      </div>
      <div
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill,minmax(var(--project-image-dimension),1fr))",
          gap: "var(--padding-light)",
          justifyItems: "center",
        }}
      >
        {!notMyProject && <AddImage details={details} />}
        {details.projectImages &&
          details.projectImages.length > 0 &&
          details.projectImages.map((image, index) => (
            <ImageCard
              image={image}
              key={"project-image-" + index}
              details={details}
              notMyProject={notMyProject}
            />
          ))}
      </div>
    </div>
  );
};

export default ProjectImages;

const AddImage = ({ details }) => {
  const imageref = useRef(null);
  return (
    <div
      className="imagecard"
      onClick={() => {
        imageref.current.click();
      }}
    >
      <AddIcon sx={{ fontSize: "150px" }} />
      <div style={{ color: "white", fontSize: "1.5rem", fontWeight: "bold" }}>
        Add Image
      </div>
      <input
        type="file"
        style={{ display: "none" }}
        ref={imageref}
        onChange={(e) => {
          let file = e.target.files[0];
          details.uploadGalleryImage(file);
        }}
      />
    </div>
  );
};
const ImageCard = ({ image, details, notMyProject }) => {
  return (
    <div
      className="imagecard"
      style={{ backgroundImage: `url("${image.image}")` }}
    >
      {!notMyProject && (
        <div
          className="deletebutton"
          onClick={() => details.deleteGalleryImage(image.id)}
        >
          X
        </div>
      )}
      <div className="clickhandler" onClick={() => window.open(image.image)} />
    </div>
  );
};
