import ProjectDocumentBox from "./projectDocumentBox";
import { RiLoopLeftFill } from "react-icons/ri";
import { useState } from "react";

const ProjectDocument = ({ isOwnerView, details }) => {
  const [seeMore, setSeeMore] = useState(false);
  return (
    <div className="projectDocumentContainer">
      <div>
        <h1
          style={{
            color: "white",
          }}
          className="projectHeading"
        >
          Project Documents
        </h1>
      </div>
      <div
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          justifyItems: "center",
          marginTop: "2rem",
          gap: "30px 20px",
          marginTop: "20px",
          padding: "20px",
          minHeight: "clamp(100px,20vw,282px)",
        }}
      >
        {details?.project?.projectDocs?.map(
          (doc, index) =>
            (index < 4 || seeMore) && (
              <ProjectDocumentBox doc={doc} key={`project-doc-${index}`} />
            )
        )}
      </div>
      {details?.project?.projectDocs?.length >= 5 && (
        <span
          style={{
            fontWeight: "500",
            position: "absolute",
            right: "8%",
            fontSize: "18px",
            color: "white",
            cursor: "pointer",
          }}
          className="SeeMoreText"
          onClick={() => setSeeMore(!seeMore)}
        >
          {seeMore ? "See Less..." : "See more..."}
        </span>
      )}
      {isOwnerView && (
        <div style={{ textAlign: " center" }}>
          <button
            style={{
              background: " rgba(204, 229, 160, 1)",
              borderRadius: "4px",
              padding: "1% 5%",
              fontSize: "unset",
              display: "inline-flex",
              alignItems: "center",
            }}
            className="updateDocButton"
          >
            <span
              style={{
                fontSize: "1.1rem",
                fontWeight: "500",
                color: "black",
                marginRight: "10px",
              }}
            >
              Update Documents
            </span>
            <RiLoopLeftFill size={20} color={"black"} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectDocument;
