import useprofile from "./useprofile";
import Auth from "../Auth/Auth";
import "./profile.css";
import MyNftDetails from "./subcomponents/NftDetails/myNftDetails";
import ProfilePicture from "./subcomponents/profilePicture";
import MyProject from "./subcomponents/myProject";
import MyContribution from "./subcomponents/myContribution";
import MyNFTs from "./subcomponents/myNFTS";

const Profile = ({ myNft }) => {
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
  );
};

export default Profile;
