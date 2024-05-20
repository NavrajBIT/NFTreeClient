import { Routes, Route, useNavigate, Link } from "react-router-dom";
import Home from "../../Home/Home";
import CreateProject from "../../Projects/CreateProject/CreateProject";
import Auth from "../../Auth/Auth";
import "./Navbar.css";
import Contact from "../../Contact_us/Contact";
import ErrorPage from "../../Error_page/ErrorPage";
import Profile from "../../Profile/profile";
import ProjectPage from "../../Projects/marketplace/main";
import Updatereport from "../../Projects/projectReport/updatereport";
import Generatereport from "../../Projects/projectReport/generatereport";
import Donate from "../../Projects/donate/donate";
import NavContent from "./subcomponents/navcontent";
import Projectdetails from "../../Projects/projectDetails/projectdetails";
import KYCPage from "../../kyc/kycPage";
import BitWallet from "../../BitWallet/body";
import Nft from "../../NFT/nft";
import Forgotpassword from "../../ForgotPassword/forgotpassword";
import UserView from "../../Projects/projectDetails/userView";
import ProjectReport from "../../Projects/projectReport/subcomponents/ProjectReport/ProjectReport";
import Dashboard from "../../Dashboard/Dashboard";
import Duration from "../../Projects/projectReport/subcomponents/ProjectReport/Duration";


export default function Navbar() {
  

  return (
    <>
      <NavContent  />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forgotpassword" element={<Forgotpassword />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/projects/create" element={<CreateProject />} />
        <Route path="/projects/:projectId" element={<UserView />} />
        <Route path="/projects/:projectId/report" element={<ProjectReport />} />
        <Route path="/projects/:projectId/Duration" element={<Duration  />} />
        <Route path="/projects/:projectId/donate" element={<Donate />} />

        <Route
          path="/myprojects/:projectId"
          element={<UserView isOwnerView />}
        />
        {/* <Route
          path="/myprojects/:projectId/update"
          element={<Updatereport />}
        /> */}
        <Route
          path="/myprojects/:projectId/report"
          element={<ProjectReport isMyProject />}
        />

        {/* <Route path="/forget-password" element={<ForgetPassword />} /> */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/mynft" element={<Profile myNft />} />
        <Route path="/kyc" element={<KYCPage />} />
        <Route path="/wallet" element={<BitWallet />} />
        {/* <Route path="/nft/:nftid" element={<Nft />} /> */}
        <Route path="/nft/:nftid" element={<Nft />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}
