import React from "react";
import { Box, Grid } from "@mui/material";
import { Instagram, Twitter, LinkedIn, Telegram } from "@mui/icons-material";
import logo from "/logo_white.png";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <Grid container className="footerDiv">
        <Grid item xs={1}></Grid>
        <Grid item xs={12} sm={5} md={6} lg={6} id="footerLogo">
          <img
            src={logo}
            alt=""
            id="footerImg"
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={5}
          md={4}
          lg={3}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
          id="footerIcons"
        >
          <Box>
            <Instagram
              sx={{
                color: "white",
                transform: "scale(1.4)",
                cursor: "pointer",
              }}
            />
            <Twitter className="footerIcons" />
            <LinkedIn className="footerIcons" />
            <Telegram className="footerIcons" />
          </Box>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
      <p
        style={{
          color: "white",
          fontSize: "14px",
          textAlign: "center",
          paddingBottom: "1rem",
          background: "var(--green-30)",
        }}
      >
        © 2023 Beyond Imagination Technologies Pvt. Ltd.
      </p>
    </>
  );
};

export default Footer;
