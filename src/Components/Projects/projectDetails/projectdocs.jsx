import AddIcon from "@mui/icons-material/Add";
import "./details.css";
import { useRef } from "react";
import DescriptionIcon from "@mui/icons-material/Description";

const Projectdocs = ({ details, notMyProject }) => {
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
        Project Documents
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
        {!notMyProject && <AddDoc details={details} />}
        {details.projectDocs &&
          details.projectDocs.length > 0 &&
          details.projectDocs.map((doc, index) => (
            <DocCard
              notMyProject={notMyProject}
              doc={doc}
              key={"project-doc-" + index}
              details={details}
            />
          ))}
      </div>
    </div>
  );
};

export default Projectdocs;

const AddDoc = ({ details }) => {
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
        Add Document
      </div>
      <input
        type="file"
        style={{ display: "none" }}
        ref={imageref}
        onChange={(e) => {
          let file = e.target.files[0];
          details.uploadProjectDoc(file);
        }}
      />
    </div>
  );
};

const DocCard = ({ doc, details, notMyProject }) => {
  let filename = "";
  try {
    let splits = doc.file.split("/");
    filename = splits[splits.length - 1];
  } catch {}
  return (
    <div className="imagecard">
      <DescriptionIcon style={{ fontSize: "10rem" }} />
      <div style={{ fontSize: "1.5rem", color: "white" }}>{filename}</div>
      {!notMyProject && (
        <div className="deletebutton" onClick={() => details.deleteDoc(doc.id)}>
          X
        </div>
      )}
      <div className="clickhandler" onClick={() => window.open(doc.file)} />
    </div>
  );
};
