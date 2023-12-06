import React, { useState } from "react";
import UserDetails from "./UserDetails";
import Kyc from "./Kyc/Kyc";
import { Grid } from "@mui/material";
import Sidebar from "./Sidebar";
import { useLocation } from "react-router-dom";
import ErrorPage from "../Error_page/ErrorPage";
import "./Profile.css";
import MyProjects from "./my-projects/MyProjects";
import UserTransaction from "../UserProfile/UserTransactions/UserTransaction";

const Profile = ({ state }) => {
  const location = useLocation();
  const [curPage, setCurPage] = useState("kyc");
  const [editActive, setEditActive] = useState(false);

  const setPage = (page) => {
    setCurPage(page);
  };

  const pageMap = {
    user_profile: <UserDetails />,
    edit_basic_details: (
      <UserDetails editActive={editActive} setEditActive={setEditActive} />
    ),
    kyc: <Kyc />,
    my_projects: <MyProjects />,
    donation_history: <UserTransaction />,
  };

  return (
    <Grid
      container
      sx={{
        marginTop: "4rem",
      }}
    >
      {/* <Sidebar
        props={setPage}
        editActive={editActive}
        setEditActive={setEditActive}
      /> */}

      <div className="profileContent">{pageMap[curPage]}</div>
    </Grid>
  );
};

export default Profile;
