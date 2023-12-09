import useprofile from "./useprofile";
import PrimaryDetails from "./subcomponents/primaryDetails";
import Auth from "../Auth/Auth";
import LocalLoading from "../Subcomponents/loading/localloading";
import "./profile.css";
import EditPrimaryDetails from "./subcomponents/popups/editPrimaryDetails";
import OrganizationDetails from "./subcomponents/organizationDetails";
import EditOrganizationPopup from "./subcomponents/popups/editOrganization";
import Myprojects from "./subcomponents/myprojects";
import Contributions from "./subcomponents/contributions";
const Profile = () => {
  const script = useprofile();

  if (!script.isLoggedIn)
    return <Auth close={() => script.setIsLoggedIn(true)} />;

  return (
    <div
      style={{
        width: "100%",
        minHeight: "var(--min-height-page)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "var(--padding-main)",
        padding: "var(--padding-main) 0",
      }}
    >
      <PrimaryDetails script={script} />
      <OrganizationDetails script={script} />
      <Myprojects script={script} />
      <Contributions script={script} />

      {script.isLoading && <LocalLoading />}
      {script.editprofilePopup && <EditPrimaryDetails script={script} />}
      {script.editorganizationPopup && (
        <EditOrganizationPopup script={script} />
      )}
    </div>
  );
};

export default Profile;
