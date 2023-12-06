import ShareIcon from "@mui/icons-material/Share";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import AssessmentIcon from "@mui/icons-material/Assessment";

const PrimaryDetails = ({ details, notMyProject }) => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "var(--max-width)",
        background: "var(--green-20)",
        padding: "var(--padding-main)",
        borderRadius: "var(--border-radius)",
        display: "flex",
        flexWrap: "wrap",
        gap: "var(--padding-light)",
        justifyContent: "space-around",
      }}
    >
      <ProjectImage details={details} notMyProject={notMyProject} />
      <ProjectData details={details} notMyProject={notMyProject} />
    </div>
  );
};

export default PrimaryDetails;

const ProjectData = ({ details, notMyProject }) => {
  const navigate = useNavigate();
  const project = details.project;
  const isMonitoring = project.donation ? false : true;
  const data = {
    "Total Plantation Area": project.area,
    "Donation Cost per Plant ($)": project.donation,
    "Type of Plants": project.plant_types,
    "Total number of plants planned": project.plant_planned,
    Location: `${project.address}, ${project.city}, ${project.country}`,
  };

  if (isMonitoring) delete data.donation;

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "var(--max-width-form)",
        background: "var(--green-15)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "var(--padding-light)",
        padding: "var(--padding-light)",
        borderRadius: "var(--border-radius)",
      }}
    >
      <div
        style={{
          fontSize: "1.5rem",
          fontWeight: "700",
          color: "var(--green-30)",
        }}
      >
        {project.name}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className="primarybutton">
          <button>
            Share <ShareIcon />
          </button>
        </div>
        {!notMyProject && (
          <div className="primarybutton">
            <button
              onClick={() =>
                navigate(`/myprojects/${details.projectId}/update`)
              }
            >
              Update Report <AssessmentIcon />
            </button>
          </div>
        )}
      </div>
      <div style={{ textAlign: "justify" }}>{project.description}</div>
      <div
        style={{
          fontSize: "1.25rem",
          fontWeight: "700",
          color: "var(--green-30)",
        }}
      >
        Project Details :
      </div>
      {Object.keys(data).map((key, index) => (
        <Detail label={key} value={data[key]} key={"project-data-" + index} />
      ))}
      <div
        style={{
          width: "100%",
          display: "flex",
          gap: "var(--padding-light)",
          justifyContent: "space-between",
        }}
      >
        <div className="primarybutton">
          <button
            onClick={() => navigate(`/projects/report/${details.projectId}`)}
          >
            View Report <AssessmentIcon />
          </button>
        </div>
        {!isMonitoring && (
          <div className="primarybutton">
            <button onClick={() => console.log(project)}>Donate $</button>
          </div>
        )}
      </div>
    </div>
  );
};

const Detail = ({ label, value }) => {
  return (
    <div
      style={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "5fr 1fr 5fr",
      }}
    >
      <div>{label}</div>
      <div>:</div>
      <div>{value}</div>
    </div>
  );
};

const ProjectImage = ({ details, notMyProject }) => {
  const isImage = details.project.image ? true : false;
  const imageref = useRef(null);
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "var(--max-width-form)",
        background: "var(--green-15)",
        border: "2px solid var(--green-30)",
        aspectRatio: "1/1",
        display: "flex",
        flexDirection: "column",
        gap: "var(--padding-light)",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "var(--border-radius)",
        backgroundImage: `url("${details.project.image}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      onClick={() => {
        if (!notMyProject) imageref.current.click();
      }}
    >
      {!isImage && (
        <div
          style={{
            textAlign: "center",
          }}
        >
          Upload Project Image
          <p>
            {"("}Click to Upload{")"}
          </p>
          <p>Please Select a high quality in 1:1 aspect ratio</p>
        </div>
      )}
      <input
        type="file"
        style={{ display: "none" }}
        ref={imageref}
        onChange={(e) => {
          let file = e.target.files[0];
          details.uploadProjectImage(file);
        }}
      />
    </div>
  );
};
