import React from "react";
import AboutCard from "./AboutCard.jsx";
import { aboutCardData } from "./AboutCardData.js";
import Grid from "@mui/material/Grid";
import "./About.css";

const About = () => {
  return (
    <div
      style={{
        minHeight: "var(--min-height-section)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--green-100)",
      }}
    >
      <div className="aboutDiv">
        <div className="aboutcardcontainer">
          {aboutCardData.map((data, id) => {
            return (
              <Grid item xs={10} sm={4} key={id} className="cardsDiv">
                <AboutCard key={id} title={data.title} desc={data.desc} />
              </Grid>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
