import "./userView.css";
import ProjectPageButton from "./projectButton";
const ProjectDesc = ({ isOwnerView, details }) => {
  console.log(details);
  return (
    <div
      style={{
        backgroundImage: `url(${
          details?.project?.image
            ? details.project.image
            : "/unsplash_bYZn_C-RswQ.png"
        })`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderRadius: "20px 20px 0px 0px",
        minHeight: "450px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          className="descriptionBlock"
          style={{
            marginTop: "95px",
            borderWidth: "1px 2px 0px 2px",
            borderStyle: "solid",
            borderColor: "#4C9A46",
            minWidth: "20%",
            textAlign: "center",
            width: "fit-content",
            padding: "10px",
          }}
        >
          <h1 className="projectHeading">{details?.project?.name}</h1>
        </div>
        <div className="descriptionBlock">
          <p
            style={{
              fontFamily: "Inter",
              fontWeight: "400",
            }}
          >
            {" "}
            <span className="projectHeading">Description:</span>{" "}
            {details?.project?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDesc;
