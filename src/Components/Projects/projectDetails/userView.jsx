import ProjectDesc from "./subcomponent/projectDesc";
import ProjectDetails from "./subcomponent/projectDetails";
import FundingProcess from "./subcomponent/fundingProcess";
import PlantImages from "./subcomponent/plantImages";
import ProjectDocument from "./subcomponent/projectDocument";
import ProjectGallery from "./subcomponent/projectGallery";
import ProjectOwnerDetails from "./subcomponent/projectOwnerDetails";
import usedetails from "./usedetails";
import { useParams } from "react-router-dom";
const UserView = ({ isOwnerView }) => {
  const params = useParams();
  const projectId = params.projectId;
  const details = usedetails(projectId, true);
  return (
    <div
      className="userViewContainer"
      style={{
        backgroundImage: "linear-gradient(to bottom right, #243900, #eaffc6)",
        width: "100%",
        minHeight: "var(--min-height-page)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: "1",
      }}
    >
      <div
        style={{
          width: " 100%",
          background: "linear-gradient(to right, #FFFFFF, #EBFFC8)",
          borderRadius: "20px",
          marginTop: "5rem",
          zIndex: "1",
        }}
      >
        <ProjectDesc isOwnerView={isOwnerView} details={details} />
        <ProjectDetails isOwnerView={isOwnerView} details={details} />
        {details?.project?.type !== 1 && (
          <FundingProcess isOwnerView={isOwnerView} details={details} />
        )}
        <PlantImages isOwnerView={isOwnerView} details={details} />
        <ProjectDocument isOwnerView={isOwnerView} details={details} />
        <ProjectGallery isOwnerView={isOwnerView} details={details} />
        <ProjectOwnerDetails isOwnerView={isOwnerView} details={details} />
      </div>
    </div>
  );
};

export default UserView;
