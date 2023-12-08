import ShareIcon from "@mui/icons-material/Share";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AssessmentIcon from "@mui/icons-material/Assessment";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";

const PrimaryDetails = ({ details, notMyProject }) => {
  return (
    <div
      style={{
        width: "100%",
        backgroundImage: `url("${details.project.image}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        padding: "var(--padding-main) 0",
        minHeight: "var(--min-height-page)",
      }}
    >
      <div
        style={{
          margin: "auto",
          width: "100%",
          maxWidth: "var(--max-width)",
          background: "transparent",
          padding: "var(--padding-main)",
          borderRadius: "var(--border-radius)",
          display: "flex",
          flexWrap: "wrap",
          gap: "var(--padding-light)",
          justifyContent: "space-around",
        }}
      >
        <ProjectData details={details} notMyProject={notMyProject} />
        {/* {!notMyProject && (
          <ProjectImage details={details} notMyProject={notMyProject} />
        )} */}
        <ButtonsContainer details={details} notMyProject={notMyProject} />
      </div>
    </div>
  );
};

export default PrimaryDetails;

const ProjectData = ({ details, notMyProject }) => {
  const project = details.project;
  const isMonitoring = project.donation ? false : true;
  const data = {
    "Total Plantation Area": project.area,
    "Donation Cost per Plant ($)": project.donation,
    "Type of Plants": project.plant_types,
    "Total number of plants planned": project.plant_planned,
    Address: project.address,
    City: project.city,
    Country: project.country,
  };

  if (isMonitoring) delete data["Donation Cost per Plant ($)"];

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "var(--max-width)",
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
      ></div>
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
      ></div>
    </div>
  );
};

const ButtonsContainer = ({ details, notMyProject }) => {
  const navigate = useNavigate();
  const imageref = useRef(null);
  const project = details.project;
  const isMonitoring = project.donation ? false : true;
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "var(--max-width)",
        background: "var(--filter)",
        display: "flex",
        justifyContent: "center",
        gap: "var(--padding-light)",
        padding: "var(--padding-light)",
        borderRadius: "var(--border-radius)",
      }}
    >
      <div className="primarybutton" style={{ width: "20%" }}>
        <button
          onClick={() => {
            try {
              const projectUrl = `${import.meta.env.VITE_LOCATION}projects/${
                details.projectId
              }`;
              navigator.clipboard.writeText(projectUrl);
              alert("Project link copied.");
            } catch {}
          }}
        >
          Share <ShareIcon />
        </button>
      </div>
      <div className="primarybutton" style={{ width: "20%" }}>
        <button
          onClick={() => navigate(`/projects/report/${details.projectId}`)}
        >
          View Report <AssessmentIcon />
        </button>
      </div>
      {!isMonitoring && notMyProject && (
        <div className="primarybutton" style={{ width: "20%" }}>
          <button
            onClick={() => navigate(`/projects/${details.projectId}/donate`)}
          >
            Donate $
          </button>
        </div>
      )}
      {!notMyProject && (
        <div className="primarybutton" style={{ width: "20%" }}>
          <button
            onClick={() => navigate(`/myprojects/${details.projectId}/update`)}
          >
            Update Report <AssessmentIcon />
          </button>
        </div>
      )}
      {!notMyProject && (
        <div className="primarybutton" style={{ width: "20%" }}>
          <button
            onClick={() => {
              let recipients = "";
              try {
                details.recipients.map((recipient) => {
                  recipients = recipients + " " + recipient.email;
                });
              } catch {}
              const alerttext = `Project report sent to ${recipients}`;
              alert(alerttext);
            }}
          >
            Send Report <AttachEmailIcon />
          </button>
        </div>
      )}
      {!notMyProject && (
        <div className="primarybutton" style={{ width: "20%" }}>
          <button
            onClick={() => {
              imageref.current.click();
            }}
          >
            Update Image
          </button>
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
      )}
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
      <div style={{ fontWeight: "bold" }}>{label}</div>
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
        aspectRatio: "var(--image-aspect-ratio)",
      }}
      onClick={() => {
        if (!notMyProject) imageref.current.click();
      }}
    >
      {!notMyProject && (
        <div
          style={{
            textAlign: "center",
            background: "var(--green-15)",
            borderRadius: "var(--border-radius-light)",
            padding: "var(--padding-light)",
          }}
        >
          Upload Project Image
          <p>
            {"("}Click to Upload{")"}
          </p>
          <p>Please Select a high quality in 4:3 aspect ratio</p>
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
