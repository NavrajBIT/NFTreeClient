import ShareIcon from "@mui/icons-material/Share";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AssessmentIcon from "@mui/icons-material/Assessment";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import ImageIcon from "@mui/icons-material/Image";
import EditIcon from "@mui/icons-material/Edit";
import EditProjectPopup from "./editProjectPopup";
import SendReportButton from "../../Subcomponents/sendReport/sendReportButton";

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

        <ButtonsContainer details={details} notMyProject={notMyProject} />
      </div>
      {details.updateProjectPopup && <EditProjectPopup details={details} />}
    </div>
  );
};

export default PrimaryDetails;

const ProjectData = ({ details }) => {
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

      <DonationProgress details={details} />
    </div>
  );
};

const ButtonsContainer = ({ details, notMyProject }) => {
  const navigate = useNavigate();
  const imageref = useRef(null);
  const project = details.project;
  const isMonitoring = project.donation ? false : true;
  return (
    <div className="primarybuttonscontainer">
      <div
        className="primarybutton"
        style={{ minWidth: "var(--project-button)" }}
      >
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
      <div
        className="primarybutton"
        style={{ minWidth: "var(--project-button)" }}
      >
        <button
          onClick={() => navigate(`/projects/${details.projectId}/report`)}
        >
          View Report <AssessmentIcon />
        </button>
      </div>
      {!isMonitoring && notMyProject && (
        <div
          className="primarybutton"
          style={{ minWidth: "var(--project-button)" }}
        >
          <button
            onClick={() => navigate(`/projects/${details.projectId}/donate`)}
          >
            Donate $
          </button>
        </div>
      )}
      {!notMyProject && (
        <div
          className="primarybutton"
          style={{ minWidth: "var(--project-button)" }}
        >
          <button
            onClick={() => navigate(`/myprojects/${details.projectId}/update`)}
          >
            Update Report <AssessmentIcon />
          </button>
        </div>
      )}
      {!notMyProject && (
        <div
          className="primarybutton"
          style={{ minWidth: "var(--project-button)" }}
        >
          <SendReportButton projectId={details.projectId} />
        </div>
      )}
      {!notMyProject && (
        <div
          className="primarybutton"
          style={{ minWidth: "var(--project-button)" }}
        >
          <button
            onClick={() => {
              imageref.current.click();
            }}
          >
            Update Image <ImageIcon />
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
      {!notMyProject && (
        <div
          className="primarybutton"
          style={{ minWidth: "var(--project-button)" }}
        >
          <button
            onClick={() => {
              details.setUpdateProjectPopup(true);
            }}
          >
            Edit Project <EditIcon />
          </button>
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

const DonationProgress = ({ details }) => {
  if (
    !details.project ||
    !details.project.donation ||
    details.project.donation === 0
  )
    return null;

  const target = details?.project?.funding?.total;
  const progress = details?.project?.funding?.raised;

  const calculatePercentage = () => {
    let result = 0;
    try {
      result = Math.round((progress / target) * 100);
    } catch {}
    return result;
  };
  const progressPercentage = calculatePercentage();

  return (
    <div
      style={{
        width: "100%",
        padding: "var(--padding-light)",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        gap: "var(--padding-light)",
      }}
    >
      <div style={{ fontWeight: "bold" }}>
        Funding Progress {`(${progressPercentage}%)`}
      </div>

      <div
        style={{
          width: "100%",
          height: "2rem",
          maxWidth: "var(--max-width-form)",
          background: "var(--filter)",
          borderRadius: "var(--border-radius)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            width: `${progressPercentage}%`,
            height: "2rem",
            maxWidth: "var(--max-width-form)",
            background: "var(--green-30)",
            borderRadius: "var(--border-radius)",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
        <div style={{ zIndex: 1 }}>
          {progress}$ / {target}$
        </div>
      </div>
    </div>
  );
};
