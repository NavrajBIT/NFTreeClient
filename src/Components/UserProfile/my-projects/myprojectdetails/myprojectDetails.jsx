import { useParams } from "react-router-dom";
import Projectdetails from "../../../Projects/projectDetails/projectdetails";

const MyprojectDetails = () => {
  const params = useParams();
  const projectId = params.projectId;

  return <Projectdetails projectId={projectId} />;
};

export default MyprojectDetails;
