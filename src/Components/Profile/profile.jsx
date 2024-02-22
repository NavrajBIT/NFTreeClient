import useprofile from "./useprofile";
import BasicDetails from "./subcomponents/basicDetails";
import Auth from "../Auth/Auth";
import LocalLoading from "../Subcomponents/loading/localloading";
import "./profile.css";
import EditPrimaryDetails from "./subcomponents/popups/editPrimaryDetails";
import OrganizationDetails from "./subcomponents/organizationDetails";
import EditOrganizationPopup from "./subcomponents/popups/editOrganization";
import Myprojects from "./subcomponents/myprojects";
import Contributions from "./subcomponents/contributions";
import Nfts from "./subcomponents/nfts";
import MyNft from "./subcomponents/myNft";

const Profile = ({ myNft }) => {
  const script = useprofile();

  if (!script.isLoggedIn)
    return <Auth close={() => script.setIsLoggedIn(true)} />;

  return (
    <div>
      <div>
        <BasicDetails script={script} />
      </div>

      <div
        style={{
          width: "100%",
          minHeight: "var(--min-height-page)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "var(--nav-height) var(--padding-large)",
          paddingTop: "230px",
          backgroundImage:
            "linear-gradient(to bottom left, #3B622F,white, #D4E5DB)",
        }}
      >
        {myNft ? (
          <>
            <MyNft script={script} />
          </>
        ) : (
          <>
            <OrganizationDetails script={script} />
            <Myprojects script={script} />
            <Contributions script={script} />
            <Nfts script={script} />

            {script.isLoading && <LocalLoading />}
            {script.editprofilePopup && <EditPrimaryDetails script={script} />}
            {script.editorganizationPopup && (
              <EditOrganizationPopup script={script} />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
