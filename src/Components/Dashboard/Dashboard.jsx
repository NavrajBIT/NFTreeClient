import React from "react";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <>
      <div className="dashboard-container">
        <div className="dashboard-box">
          <h2>Total Projects</h2>
          <p>10</p>
        </div>
        <div className="dashboard-box">
          <h2>Total Users</h2>
          <p>100</p>
        </div>
        <div className="dashboard-box">
          <h2>Total Plants Planted</h2>
          <p>100</p>
        </div>
        {/* <div className="dashboard-box">
            <h2>Total Plants Planted</h2>
            <p>100</p>
          </div>
          <div className="dashboard-box">
            <h2>Total Oxygen Emitted</h2>
            <p>100</p>
          </div> */}
      </div>
    </>
  );
}
