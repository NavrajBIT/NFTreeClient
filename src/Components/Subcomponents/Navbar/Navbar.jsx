import { Routes, Route, useNavigate, Link } from "react-router-dom";
import Home from "../../Home/Home";
import CreateProjectContainer from "../../Projects/CreateProject/CreateProjectContainer";
import Auth from "../../Auth/Auth";
import "./Navbar.css";
import Contact from "../../Contact_us/Contact";
import ErrorPage from "../../Error_page/ErrorPage";
import Profile from "../../Profile/profile";
// import ForgetPassword from "../../Auth/ForgetPassword";
import ProjectPage from "../../Projects/ProjectPage/ProjectPage";
import Updatereport from "../../Projects/projectReport/updatereport";
import Generatereport from "../../Projects/projectReport/generatereport";
import Donate from "../../Projects/donate/donate";
import NavContent from "./subcomponents/navcontent";
import Projectdetails from "../../Projects/projectDetails/projectdetails";
import KYCPage from "../../kyc/kycPage";
import BitWallet from "../../BitWallet/body";
import Nft from "../../NFT/nft";
import Forgotpassword from "../../ForgotPassword/forgotpassword";
import UserView from "../../Projects/ProjectPage/UserView/userView";

export default function Navbar() {
  return (
    <>
      <NavContent />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/forgotpassword" element={<Forgotpassword />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/projects/create" element={<CreateProjectContainer />} />
        <Route
          path="/projects/:projectId"
          element={<Projectdetails notMyProject={true} />}
        />
        <Route
          path="/projects/:projectId/report"
          element={<Generatereport />}
        />
        <Route path="/projects/:projectId/donate" element={<Donate />} />

        <Route path="/myprojects/:projectId" element={<Projectdetails />} />
        <Route
          path="/myprojects/:projectId/update"
          element={<Updatereport />}
        />
        <Route
          path="/myprojects/:projectId/report"
          element={<Generatereport isMyProject />}
        />

        {/* <Route path="/forget-password" element={<ForgetPassword />} /> */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/kyc" element={<KYCPage />} />
        <Route path="/wallet" element={<BitWallet />} />
        <Route path="/nft/:nftid" element={<Nft />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/userView" element={<UserView isOwnerView={false} />} />
        <Route path="/ownerView" element={<UserView isOwnerView={true}  />} />
      </Routes>
    </>
  );
}
