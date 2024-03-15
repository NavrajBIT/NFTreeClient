import "./userView.css";
import ProjectPageButton from "./projectButton";
import { useRef } from "react";
import { FaEdit } from "react-icons/fa";

const ProjectDesc = ({ isOwnerView, details }) => {
  const imageref = useRef(null);

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
        position: "relative",
      }}
    >
      {isOwnerView && (
        <div style={{ position: "absolute", top: "18px", right: "18px" }}>
          <input
            type="file"
            style={{ display: "none" }}
            ref={imageref}
            onChange={(e) => details.uploadProjectImage(e.target.files[0])}
          />
          <button
            className="progressBtn"
            onClick={() => imageref.current.click()}
            style={{ padding: "10px" }}
          >
            <FaEdit size={20} />
          </button>
          {/* <ProjectPageButton text={"Send Report"} icon={"/SendIcon.png"} /> */}
        </div>
      )}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          className="descriptionBlock"
          style={{
            marginTop: "95px",
            borderWidth: "1px 2px 0px 2px",
            borderStyle: "solid",
            borderColor: "#4C9A46",

            textAlign: "center",
            width: "fit-content",
            padding: "10px",
            minWidth: "150px",
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
