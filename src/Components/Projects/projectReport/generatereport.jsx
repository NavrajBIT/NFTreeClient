import Overview from "./subcomponents/overview";
import usereport from "./usereport";
import { useParams } from "react-router-dom";
import DownloadIcon from "@mui/icons-material/Download";
import Status from "./subcomponents/status";
import Health from "./subcomponents/health";
import Impact from "./subcomponents/impact";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import SendReportButton from "../../Subcomponents/sendReport/sendReportButton";

const Generatereport = ({ isMyProject }) => {
  const params = useParams();
  const projectId = params.projectId;
  const script = usereport(projectId);

  return (
    <>
      <div
        style={{
          width: "100%",
          minHeight: "var(--min-height-page)",
          display: "flex",
          flexDirection: "column",
          gap: "var(--padding-main)",
          padding: "var(--nav-height) 0",
          background: "var(--green-10)",
        }}
        ref={script.reportRef}
      >
        <div
          style={{
            fontSize: "2rem",
            fontWeight: "700",
            color: "var(--green-30)",
            width: "100%",
            textAlign: "center",
            padding: "0 var(--padding-main)",
          }}
        >
          Project Report
        </div>
        <div
          style={{
            width: "100%",
            maxWidth: "var(--max-width)",

            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            gap: "var(--padding-main)",

            justifyContent: "space-around",
          }}
        >
          <Overview script={script} />
          <Status script={script} />
          <Health script={script} />
          <Impact script={script} />
        </div>
      </div>
      <ButtonsContainer script={script} isMyProject={isMyProject} />
    </>
  );
};

export default Generatereport;

const ButtonsContainer = ({ script, isMyProject }) => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "var(--max-width)",
        padding: "var(--padding-main)",
        display: "flex",
        gap: "var(--padding-main)",
        margin: "0 auto",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="primarybutton"
        style={{ width: "30%", minWidth: "250px" }}
      >
        <button
          onClick={() => {
            if (isMyProject) {
              navigate(`/myprojects/${script.projectId}`);
            } else {
              navigate(`/projects/${script.projectId}`);
            }
          }}
        >
          <ArrowBackIcon /> Back
        </button>
      </div>
      <div
        className="primarybutton"
        style={{ width: "30%", minWidth: "var(--project-button)" }}
      >
        <button onClick={script.downloadReport}>
          Download report <DownloadIcon />
        </button>
      </div>
      {isMyProject && (
        <div
          className="primarybutton"
          style={{ width: "30%", minWidth: "var(--project-button)" }}
        >
          <SendReportButton projectId={script.projectId} />
        </div>
      )}
    </div>
  );
};
