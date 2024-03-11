import ProjectDocumentBox from "./projectDocumentBox";
import { RiLoopLeftFill } from "react-icons/ri";
import { useRef, useState } from "react";

const ProjectDocument = ({ isOwnerView, details }) => {
  const [seeMore, setSeeMore] = useState(false);
  const updatebuttonref = useRef(null);
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
        <ProjectDocumentBox doc={details?.project?.land_reg_proof} />
        {details?.projectDocs?.map(
          (doc, index) =>
            (index < 4 || seeMore) && (
              <ProjectDocumentBox doc={doc.file} key={`project-doc-${index}`} />
            )
        )}
      </div>
      {details?.projectDocs?.length >= 5 && (
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
            onClick={() => {
              updatebuttonref.current.click();
            }}
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
          <input
            type="file"
            ref={updatebuttonref}
            style={{ display: "none" }}
            onChange={(e) => details.uploadProjectDoc(e.target.files[0])}
          />
        </div>
      )}
    </div>
  );
};

export default ProjectDocument;
