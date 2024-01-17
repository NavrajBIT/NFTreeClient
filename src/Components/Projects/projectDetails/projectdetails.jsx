import usedetails from "./usedetails";
import PrimaryDetails from "./primaryDetails";
import ProjectImages from "./projectImages";
import Ownerdetails from "./ownerdetails";
import Projectdocs from "./projectdocs";
import PlantImages from "./plantImages";
import Loading from "../../Subcomponents/loading/loading";
import Recipients from "./recipients";
import { useParams } from "react-router-dom";
import Auth from "../../Auth/Auth";

const Projectdetails = ({ notMyProject }) => {
  const params = useParams();
  const projectId = params.projectId;

  const details = usedetails(projectId, notMyProject);

  if (!details.isLoaggedIn)
    return <Auth close={() => details.setIsLoggedIn(true)} />;
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
        padding: "var(--nav-height) 0",
      }}
    >
      <PrimaryDetails details={details} notMyProject={notMyProject} />
      {!notMyProject && (
        <Recipients details={details} notMyProject={notMyProject} />
      )}
      <PlantImages details={details} notMyProject={notMyProject} />
      <Projectdocs details={details} notMyProject={notMyProject} />
      <ProjectImages details={details} notMyProject={notMyProject} />
      {details.project.carbonCredit_enabled != true && (
        <Ownerdetails details={details} />
      )}
    </div>
  );
};

export default Projectdetails;
