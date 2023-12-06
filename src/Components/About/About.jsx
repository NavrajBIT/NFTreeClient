import React from "react";
import AboutCard from "./AboutCard.jsx";
import { aboutCardData } from "./aboutCardData.js";
import Grid from "@mui/material/Grid";
import "./About.css";

const About = () => {
    return (
        <>
            <div id="about"></div>
            <div className="aboutDiv">
                <h1>What is NFTree?</h1>
                <p
                    style={{ marginTop: "1rem" }}
                    className="aboutDesc">
                    A blockchain-based digital monitoring, reporting, and verification platform, NFTree is dedicated to reforesting open spaces within and beyond urban landscapes. Empowering stakeholders with  a secure and traceable channel for expressing their eco-consciousness, the platform leverages NFT technology to enhance the transparency and traceability of donation campaigns, specifically targeting mitigation of adverse effects caused by human activities on the environment.
                </p>
                <p style={{ marginBottom: "3rem" }}
                    className="aboutDesc">
                    NFTree is aligned with the <b>United Nations Sustainable Development Goals (SDGs)</b>, demonstrating the commitment to addressing global challenges and contributing to the broader agenda of creating a more inclusive, equitable, and sustainable world.
                </p>

                <Grid
                    container
                    spacing={{ xs: 1, sm: 3 }}
                    justifyContent="center"
                    sx={{ padding: '0 1rem' }}
                >
                    <Grid item xs={2}
                        sx={{ display: { xs: "none", lg: "block" } }}>
                    </Grid>
                    <Grid item container xs={12} lg={8} spacing={3}
                        className="aboutCardContainerDiv">
                        {
                            aboutCardData.map((data, id) => {
                                return (
                                    <>
                                        <Grid item xs={10} sm={4}
                                            key={id}
                                            className="cardsDiv">
                                            <AboutCard
                                                key={id}
                                                title={data.title}
                                                desc={data.desc}
                                            />
                                        </Grid>
                                    </>
                                );
                            })
                        }
                    </Grid>
                    <Grid item xs={2}
                        sx={{ display: { xs: "none", lg: "block" } }}>
                    </Grid>
                </Grid>
            </div>
        </>
    );
};

export default About;
