import ProjectDesc from "./subcomponent/projectDesc";
import ProjectDetails from "./subcomponent/projectDetails";
import FundingProcess from "./subcomponent/fundingProcess";
import PlantImages from "./subcomponent/plantImages";
import ProjectDocument from "./subcomponent/projectDocument";
import ProjectGallery from "./subcomponent/projectGallery";
import ProjectOwnerDetails from "./subcomponent/projectOwnerDetails";
import ProjectChainDetails from "./subcomponent/projectChainDetails";
import usedetails from "./usedetails";
import LocalLoading from "../../Subcomponents/loading/localloading";
import { useParams } from "react-router-dom";
const UserView = ({ isOwnerView }) => {
  const params = useParams();
  const projectId = params.projectId;
  const details = usedetails(projectId, true);
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to bottom right, #243900, #eaffc6)",
        width: "100%",
        minHeight: "var(--min-height-page)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: "1",
        padding: "3%",
      }}
      className="projectContainer"
    >
      {isOwnerView && (
        <div
          style={{
            paddingTop: "50px",
            fontSize: "50px",
            color: "white",
          }}
        >
          Project Preview
        </div>
      )}
      <div
        style={{
          width: " 95%",
          background: "linear-gradient(to right, #FFFFFF, #EBFFC8)",
          borderRadius: "20px",
          marginTop: "5rem",
          zIndex: "1",
          boxShadow: "3px 4px 30px 0px #3D511B",
        }}
        className="projectContainerBox"
      >
        <ProjectDesc isOwnerView={isOwnerView} details={details} />
        <ProjectDetails isOwnerView={isOwnerView} details={details} />

        <ProjectChainDetails details={details} />

        {details?.project?.type !== 1 && (
          <FundingProcess isOwnerView={isOwnerView} details={details} />
        )}
        <PlantImages isOwnerView={isOwnerView} details={details} />
        <ProjectDocument isOwnerView={isOwnerView} details={details} />
        <ProjectGallery isOwnerView={isOwnerView} details={details} />
        <div
          style={{
            backgroundImage: "linear-gradient(137deg, #ebffdd, #ebffc8)",
            marginBottom: "10rem",
          }}
        >
          {" "}
          <ProjectOwnerDetails isOwnerView={isOwnerView} details={details} />
        </div>
      </div>
      {details?.isLoading && <LocalLoading />}
    </div>
  );
};

export default UserView;
