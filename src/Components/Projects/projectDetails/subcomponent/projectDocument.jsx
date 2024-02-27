import ProjectDocumentBox from "./projectDocumentBox";
const ProjectDocument = ({ details }) => {
  return (
    <div className="projectDocumentContainer">
      <div>
        <p
          style={{
            fontFamily: "DM Serif Display",
            fontSize: "2rem",
            textAlign: "center",
            color: "white",
            fontWeight: "700",
          }}
        >
          Project Documents
        </p>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          marginTop: "3rem",
        }}
      >
        {details?.project?.projectDocs?.map((doc, index) => (
          <ProjectDocumentBox doc={doc} key={`project-doc-${index}`} />
        ))}
      </div>
    </div>
  );
};

export default ProjectDocument;
