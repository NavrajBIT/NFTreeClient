import useProjectDetails from "./usedetails";
import PrimaryDetails from "./primaryDetails";
import ProjectImages from "./projectImages";
import Ownerdetails from "./ownerdetails";
import Projectdocs from "./projectdocs";
import PlantImages from "./plantImages";
import Loading from "../../Subcomponents/loading/loading";
import Recipients from "./recipients";
import {useParams} from "react-router-dom";
import Auth from "../../Auth/Auth";
import PropTypes from "prop-types";

const Projectdetails = ({notMyProject}) => {
  const params = useParams();
  const projectId = params.projectId;

  const details = useProjectDetails(projectId);

  if (!details.isLoggedIn) return <Auth close={() => details.setIsLoggedIn(true)} />;
  if (details.isLoading || !details.project) return <Loading />;

  return (
    <div
      style={{
        width: "100%",
        minHeight: "var(--min-height-page)",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "var(--padding-main)",
        padding: "var(--nav-height) 0"
      }}>
      <PrimaryDetails
        details={details}
        notMyProject={notMyProject}
      />
      {!notMyProject && (
        <Recipients
          details={details}
          notMyProject={notMyProject}
        />
      )}
      <PlantImages
        details={details}
        notMyProject={notMyProject}
      />
      <Projectdocs
        details={details}
        notMyProject={notMyProject}
      />
      <ProjectImages
        details={details}
        notMyProject={notMyProject}
      />
      {details.project.carbonCredit_enabled != true && <Ownerdetails details={details} />}
    </div>
  );
};

Projectdetails.propTypes = {
  notMyProject: PropTypes.bool
};

export default Projectdetails;
