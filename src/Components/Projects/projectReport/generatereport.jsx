import Overview from "./subcomponents/overview";
import usereport from "./usereport";
import { useParams } from "react-router-dom";
import DownloadIcon from "@mui/icons-material/Download";
import Status from "./subcomponents/status";
import Health from "./subcomponents/health";
import Impact from "./subcomponents/impact";

const Generatereport = () => {
  const params = useParams();
  const projectId = params.projectId;
  const script = usereport(projectId);
  return (
    <div
      style={{
        width: "100%",
        minHeight: "var(--min-height-page)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--padding-main)",
        padding: "var(--padding-main) 0",
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
      <div
        style={{
          display: "flex",
          gap: "var(--padding-main)",
          margin: "0 auto",
        }}
      >
        <div className="primarybutton">
          <button onClick={script.downloadReport}>
            Download report <DownloadIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Generatereport;
