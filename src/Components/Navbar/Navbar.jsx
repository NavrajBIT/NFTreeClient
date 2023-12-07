import { Routes, Route, useNavigate, Link } from "react-router-dom";

import Home from "../Home/Home";
import CreateProject from "../Projects/CreateProject/CreateProject";
import Auth from "../Auth/Auth";
import "../Navbar/Navbar.css";
import Contact from "../Contact_us/Contact";
import ErrorPage from "../Error_page/ErrorPage";
import Profile from "../Profile/profile";
import ForgetPassword from "../Auth/ForgetPassword";
import ProjectPage from "../Projects/ProjectPage/ProjectPage";
import ProjectdetailPage from "../Projects/projectDetails/projectdetailPage";
import MyprojectDetails from "../UserProfile/my-projects/myprojectdetails/myprojectDetails";
import Projectreport from "../ProjectReport/Projectreport";
import Updatereport from "../Projects/projectReport/updatereport";
import Generatereport from "../Projects/projectReport/generatereport";
import UserProfile from "../UserProfile/Profile";
import NavContent from "./subcomponents/navcontent";
import { useAuth } from "../../Contexts/AuthContext";
import BitWallet from "../BitWallet/body";

export default function Navbar() {
  const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();
  return (
    <>
      <NavContent />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Auth />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/projects/create" element={<CreateProject />} />
        <Route
          path="/projects/report/:projectId"
          element={<Generatereport />}
        />
        <Route path="/projects/:projectId" element={<ProjectdetailPage />} />
        <Route path="/myprojects/:projectId" element={<MyprojectDetails />} />
        <Route
          path="/myprojects/:projectId/update"
          element={<Updatereport />}
        />

        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/wallet" element={<BitWallet />} />
        <Route path="/kyc" element={<UserProfile />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}
