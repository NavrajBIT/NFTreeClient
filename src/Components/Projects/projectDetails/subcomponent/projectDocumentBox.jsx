import "./userView.css";
const ProjectDocumentBox = ({ doc, name }) => {
  return (
    <div className="documentBox" onClick={() => window.open(doc)}>
      <img src="/docsImage.png" alt="plant Image" className="docImage" />
      <p
        style={{
          marginTop: "1rem",
          fontSize: "1rem",
          color: "white",
          fontWeight: "500",
          textAlign: "center",
          cursor:"pointer"
        }}
      >
        {name}
      </p>
    </div>
  );
};

export default ProjectDocumentBox;
