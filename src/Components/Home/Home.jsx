import React from "react";
import About from "../About/About";
import Mission from "../Mission/Mission";
import { Box, Grid, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import home from "./assets/home.png";
import "./Home.css";
import Dashboard from "../Dashboard/Dashboard";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          height: { xs: "70vh", sm: "90vh" },
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          background: "var(--green-20)",
        }}
        id="homeContainer"
      >
        <Grid
          item
          // xs={12}
          xs={1}
          sx={{
            display: { xs: "none", xl: "block" },
          }}
        ></Grid>
        <Grid
          item
          xs={12}
          sm={6}
          xl={5}
          sx={{
            height: "68%",
            backgroundImage: `url(${home})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            display: { xs: "block", sm: "none" },
          }}
          id="homeImg"
        ></Grid>
        <Grid
          item
          xs={12}
          sm={5}
          xl={5}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: { xs: "90%", sm: "90%", lg: "70%" },
              textAlign: "start",
            }}
            className="homeTextBox"
          >
            <Typography
              variant="h2"
              gutterBottom
              className="homeHead"
              sx={{ fontWeight: "bold" }}
            >
              NFTree
            </Typography>

            <Typography
              variant="body1"
              className="homeDesc"
              gutterBottom
              sx={{
                textAlign: "justify",
                marginBottom: "2rem",
              }}
            >
              Welcome to NFTree, where digital innovation meets environmental
              stewardship. As you explore the platform, you'll discover a
              dynamic ecosystem that fosters contribution to a greener planet
              securely and transparently. From tree counting to carbon
              sequestration, NFTree provides a comprehensive, real-time view of
              your reforestation impact.
            </Typography>

            <div className="primarybutton" style={{ width: "fit-content" }}>
              <button onClick={() => navigate("/projects")}>
                Get Started <ArrowForwardIcon />
              </button>
            </div>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={7}
          xl={5}
          sx={{
            height: "80%",
            backgroundImage: `url(${home})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            display: { xs: "none", sm: "block" },
          }}
          id="homeImgContainer"
        ></Grid>
        <Grid item xs={1} sx={{ display: { xs: "none", xl: "block" } }}></Grid>
      </Grid>
      <Dashboard />
      <About />
      <Mission />
    </>
  );
};

export default Home;
