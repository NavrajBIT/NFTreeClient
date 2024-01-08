import React from "react";
import img1 from "../assets/home-img-1.png";

export default function WhatisNFTree() {
  return (
    <div style={{}}>
      <div
        className="heroContainer"
        style={{
          minHeight: "unset",
        }}
      >
        <div
          className="homeimg"
          style={{
            display: "flex",
            flexDirection: "column",
            width: "40%",
            flexWrap: "wrap",
          }}
        >
          <img
            src={img1}
            alt="img1"
            style={{ width: "var(--home-card-image)", alignSelf: "flex-start" }}
          />
        </div>
        <MissionContent />
      </div>
    </div>
  );
}

const MissionContent = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--padding-light)",
      height: "100%",
      justifyContent: "space-around",
    }}
  >
    <div
      className="heroheading"
      style={{
        fontSize: "3rem",
        color: "var(--green-100)",
        fontWeight: "bold",
      }}
    >
      What is BITbhoomi?
    </div>
    <br />
    <br />

    <div
      style={{
        width: "100%",
        maxWidth: "var(--max-width-form)",
        textAlign: "justify",
        color: "var(--green-100)",
      }}
    >
      A blockchain-based digital monitoring, reporting, and verification
      platform, BITbhoomi is dedicated to reforesting open spaces within and
      beyond urban landscapes. Empowering stakeholders with a secure and
      traceable channel for expressing their eco-consciousness, the platform
      leverages NFT technology to enhance the transparency and traceability of
      donation campaigns, specifically targeting mitigation of adverse effects
      caused by human activities on the environment.
    </div>
  </div>
);
