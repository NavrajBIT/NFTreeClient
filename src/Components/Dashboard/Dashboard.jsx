import React from "react";
import "./dashboard.css";

function Dashboard() {
  return (
    <div className="DashboardContainer">
      <h1 className="dashboardTitle">BitBhoomi Dashboard</h1>
      <div className="dashboards">
        <div className="climateImpact">
          <div>
            <h2 className="climateTitle">Climate Impact</h2>
          </div>
          <div className="cboxes">
            <div className="cBox">
              <h1>23424</h1>
              <p>Total Number of Trees Planted</p>
            </div>
            <div className="cBox">
              <h1>5463</h1>
              <p>Total Carbon Sequestered</p>
            </div>
          </div>
          <div className="cboxes">
            <div className="cBox">
              <h1>342</h1>
              <p>Total Green Cover Created (in ha)</p>
            </div>
            <div className="cBox">
              <h1>12</h1>
              <p>Variety of Species Planted</p>
            </div>
          </div>
          <div className="cboxes">
            <div className="cBox">
              <h1>4563</h1>
              <p>Cummulative Projection Value Of GHG Removal</p>
            </div>
          </div>
        </div>
        <div className="impactDetails">
          <div className="tokenization">
            <div>
            <h2 className="tokenTitle">Tokenization Impact</h2>
            </div>
            <div className="tboxes">
              <div className="tBox">
                <h1>25</h1>
                <p>Total Tokenized Trees</p>
              </div>
              <div className="tBox">
                <h1>$124</h1>
                <p>Total Tokenized Value</p>
              </div>
            </div>
          </div>
          <div className="bhoomiToken">
            <div>
            <h2 className="bhoomiTitle">Bhoomi Token Details</h2>
            </div>
            <div className="bboxes">
              <div className="bBox">
                <h1>100,000,00</h1>
                <p>Total Supply</p>
              </div>
              <div className="bBox">
                <h1>100,000,00</h1>
                <p>Circulating Supply</p>
              </div>
              <div className="bBox">
                <h1>$0.10</h1>
                <p>$BHOOMI Price</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
