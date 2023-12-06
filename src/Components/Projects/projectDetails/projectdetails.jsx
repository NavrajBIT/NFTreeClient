import usedetails from "./usedetails";
import PrimaryDetails from "./primaryDetails";
import ProjectImages from "./projectImages";
import Ownerdetails from "./ownerdetails";
import Projectdocs from "./projectdocs";
import Loading from "../../loading/loading";
import Auth from "../../Auth/Auth";

const Projectdetails = ({ projectId, notMyProject }) => {
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
        padding: "var(--padding-main) 0",
      }}
    >
      <PrimaryDetails details={details} notMyProject={notMyProject} />
      <Projectdocs details={details} notMyProject={notMyProject} />
      <ProjectImages details={details} notMyProject={notMyProject} />
      <Ownerdetails details={details} />
    </div>
  );
};

export default Projectdetails;
