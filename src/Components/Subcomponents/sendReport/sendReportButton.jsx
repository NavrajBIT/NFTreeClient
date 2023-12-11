import { useState, useEffect } from "react";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import useAPI from "../../../api/useAPI";
import "./sendReport.css";
import CachedIcon from "@mui/icons-material/Cached";

const SendReportButton = ({ projectId }) => {
  const api = useAPI();
  const [isLoading, setIsLoading] = useState(false);
  const [recipients, setRecipients] = useState(null);
  useEffect(() => {
    poppulateProjectRecipients();
  }, []);

  const poppulateProjectRecipients = async () => {
    setIsLoading(true);
    await api
      .crud("GET", `project/project-recipient/${projectId}`)
      .then((res) => {
        if (res.status === 200) {
          setRecipients(res);
        }
      })
      .catch((err) => console.log(err));
    setIsLoading(false);
  };

  const handleClick = async () => {
    if (!recipients || recipients.length === 0) {
      alert("Please add recipients to send project report.");
    } else {
      setIsLoading(true);
      await api
        .crud("GET", `project/send-report/?project_id=${projectId}`)
        .then((res) => {
          if (res.status === 200) {
            alert("Project report sent successfully.");
          }
        })
        .catch((err) => console.log(err));
      setIsLoading(false);
    }
  };

  return (
    <button disabled={isLoading} onClick={handleClick}>
      {isLoading ? (
        <div className="loadingstate">
          <CachedIcon />
        </div>
      ) : (
        "Send Report"
      )}
      <AttachEmailIcon />
    </button>
  );
};

export default SendReportButton;
