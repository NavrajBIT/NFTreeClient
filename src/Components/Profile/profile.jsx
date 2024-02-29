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
import Nfts from "./subcomponents/nfts";
import ProfilePicture from "./subcomponents/profilePicture";
import MyProject from "./subcomponents/myProject";
import MyContribution from "./subcomponents/myContribution";
import MyNFTs from "./subcomponents/myNFTS";
const Profile = () => {
  const script = useprofile();

  if (!script.isLoggedIn)
    return <Auth close={() => script.setIsLoggedIn(true)} />;

  return (
    <div
      style={{
        width: "100%",
        paddingTop: "0px",
        minHeight: "var(--min-height-page)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // backgroundColor: "#D4E5DC",
        background: "linear - gradient(5.22deg, #FFFFFF 58.58 %, #EEFFE9 79.08 %, #265914 91.64 %)",
}}
    >
      <div
        style={{
          width: "100%",
          height: "var(--nav-height)",
          backgroundImage: "linear-gradient(170deg, #1B2F2F, #224629)",
        }}
      />
      <ProfilePicture script={script} />
      <MyProject script={script} />
      <MyContribution script={script} />
      <MyNFTs script={script} />
    </div >
  );
};

export default Profile;
