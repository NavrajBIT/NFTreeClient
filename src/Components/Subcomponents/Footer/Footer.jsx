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
          <img src={logo} alt="" id="footerImg" />
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          color: "white",
          background: "var(--green-100)",
          height: "fit-content",
          padding: "var(--padding-light) 0",
          gap: "var(--padding-light)",
        }}
      >
        <Grid item xs={1}></Grid>
        <Grid
          item
          xs={12}
          sm={5}
          md={6}
          lg={6}
          sx={{
            display: "flex",
            alignItems: "center",
            borderLeft: "2px solid",
            color: "white",
            paddingLeft: "var(--padding-main)",
          }}
        >
          <p>
            BITbhoomi: Transforming Eco-Consciousness with Blockchain <br />
            Transparency for Sustainable Reforestation.
          </p>
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
              onClick={() =>
                window.open("https://www.instagram.com/bitmemoir/")
              }
            />
            <Twitter
              className="footerIcons"
              onClick={() =>
                window.open(
                  "https://twitter.com/Bit_memoir?t=dPPpNawrSKg3mn3BLyYxWA&s=08"
                )
              }
            />
            <LinkedIn
              className="footerIcons"
              onClick={() =>
                window.open("https://www.linkedin.com/company/bitmemoir/")
              }
            />
            <Telegram
              className="footerIcons"
              onClick={() => window.open("https://t.me/bitmemoirofficial")}
            />
          </Box>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
      <p
        style={{
          color: "grey",
          fontSize: "14px",
          textAlign: "center",
          padding: "1rem 0",
          background: "var(--green-100)",
        }}
      >
        © Copyright 2022, All Rights Reserved by <br /> Beyond Imagination
        Technologies Pvt
      </p>
    </>
  );
};

export default Footer;
