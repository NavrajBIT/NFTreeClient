import { useParams } from "react-router-dom";
import Projectdetails from "./projectdetails";

const ProjectdetailPage = () => {
  const params = useParams();
  const projectId = params.projectId;
  return <Projectdetails projectId={projectId} notMyProject />;
};

export default ProjectdetailPage;
