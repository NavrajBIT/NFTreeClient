import useprofile from "./useprofile";
import ProfilePicture from "./subcomponents/profilePicture";
import MyProject from "./subcomponents/myProject";
import MyContribution from "./subcomponents/myContribution";
import MyNFTs from "./subcomponents/myNFTS";
import PrimaryDetails from "./subcomponents/primaryDetails";
import Auth from "../Auth/Auth";
import LocalLoading from "../Subcomponents/loading/localloading";
// import "./profile.css";
import EditPrimaryDetails from "./subcomponents/popups/editPrimaryDetails";
import OrganizationDetails from "./subcomponents/organizationDetails";
import EditOrganizationPopup from "./subcomponents/popups/editOrganization";
import Myprojects from "./subcomponents/myprojects";
import Contributions from "./subcomponents/contributions";
import Nfts from "./subcomponents/nfts";

const Profile = () => {
  const script = useprofile();

  if (!script.isLoggedIn)
    return <Auth close={() => script.setIsLoggedIn(true)} />;

  return (
    <div
      style={{
        width: "100%",
        paddingTop: "4rem",
        minHeight: "var(--min-height-page)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor:"#D4E5DC"
      }}
    >
      <ProfilePicture />
      <MyProject />
      <MyContribution />
      <MyNFTs />
      {/* <PrimaryDetails script={script} />
      <OrganizationDetails script={script} />
      <Myprojects script={script} />
      <Contributions script={script} />
      <Nfts script={script} />

      {script.isLoading && <LocalLoading />}
      {script.editprofilePopup && <EditPrimaryDetails script={script} />}
      {script.editorganizationPopup && (
        <EditOrganizationPopup script={script} />
      )} */}
    </div>
  );
};

export default Profile;
