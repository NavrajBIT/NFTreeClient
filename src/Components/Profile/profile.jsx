import useprofile from "./useprofile";
<<<<<<< HEAD
import BasicDetails from "./subcomponents/basicDetails";
=======
>>>>>>> 0bf9333728cf8ef7c6a66aaf11cf535cb419fafe
import Auth from "../Auth/Auth";
import "./profile.css";
<<<<<<< HEAD
import EditPrimaryDetails from "./subcomponents/popups/editPrimaryDetails";
import OrganizationDetails from "./subcomponents/organizationDetails";
import EditOrganizationPopup from "./subcomponents/popups/editOrganization";
import Myprojects from "./subcomponents/myprojects";
import Contributions from "./subcomponents/contributions";
import Nfts from "./subcomponents/nfts";
import MyNft from "./subcomponents/myNft";
=======
import MyNftDetails from "./subcomponents/NftDetails/myNftDetails";
import ProfilePicture from "./subcomponents/profilePicture";
import MyProject from "./subcomponents/myProject";
import MyContribution from "./subcomponents/myContribution";
import MyNFTs from "./subcomponents/myNFTS";
>>>>>>> 0bf9333728cf8ef7c6a66aaf11cf535cb419fafe

const Profile = ({ myNft }) => {
  const script = useprofile();

  if (!script.isLoggedIn)
    return <Auth close={() => script.setIsLoggedIn(true)} />;

  return (
<<<<<<< HEAD
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
=======
    <div
      style={{
        width: "100%",
        paddingTop: "0px",
        minHeight: "var(--min-height-page)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "linear - gradient(5.22deg, #FFFFFF 58.58 %, #EEFFE9 79.08 %, #265914 91.64 %)",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "var(--nav-height-small)",
          backgroundImage: "linear-gradient(170deg, #1B2F2F, #224629)",
        }}
      />
      {
        myNft ?
          <>
            <MyNftDetails script={script} />
          </>
          :
          <>
            <ProfilePicture script={script} />
            <MyProject script={script} />
            <MyContribution script={script} />
            <MyNFTs script={script} />
          </>
      }
    </div >
>>>>>>> 0bf9333728cf8ef7c6a66aaf11cf535cb419fafe
  );
};

export default Profile;
