import React from "react";
import "./dashboard.css";

function Dashboard() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: "linear-gradient(180deg, #0E1213 38%, #08370D 100%)",
        display: "flex",
      }}
      className="DashboardContainer"
    >
      <div
        style={{
          width: "90%",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "var(--padding-main)",
          maxWidth: "1163px",
          padding: "var(--nav-height) 0",
        }}
      >
        <div style={{ marginTop: "var(--padding-main)" }}>
          <h1>BitBhoomi Dashboard</h1>
        </div>
        <div
          style={{
            border: "1px solid white",
            borderRadius: "var(--border-radius)",
            background: "rgba(255, 255, 255, 0.1)",
            padding: "2vw 15px",
          }}
        >
          <div
            style={{ display: "flex", justifyContent: "space-around" }}
            className="dashboardFlexBox"
          >
            <div className="dashboardBox">
              <h2>23424</h2>
              <p>Total Number of trees planted</p>
            </div>
            <div className="dashboardBox">
              <h2>5463</h2>
              <p>Total Carbon Sequestered</p>
            </div>
            <div className="dashboardBox">
              <h2>342</h2>
              <p>Total Green Cover Created (in ha)</p>
            </div>
          </div>

          <div
            style={{ display: "flex", justifyContent: "space-evenly" }}
            className="dashboardFlexBox"
          >
            <div className="dashboardBox">
              <h2>12</h2>
              <p>Variety of species planted</p>
            </div>
            <div className="dashboardBox">
              <h2>4563</h2>
              <p>Cummulative projection value or GHG Removal</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
