import React from "react";
import About from "./About/About";
import Mission from "./Mission/Mission";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import home from "./assets/home.png";
import "./Home.css";
import Dashboard from "./Dashboard/Dashboard";
import { useNavigate } from "react-router-dom";
import HowItWorks from "./howitworks/howItWorks";

const Home = () => {
  return (
    <>
      <div className="heroContainer" id="homeContainer">
        <div
          style={{
            backgroundImage: `url(${home})`,
          }}
          className="heroimageContainer heroImageLaptop"
        />
        <HeroContent />
        <div
          style={{
            backgroundImage: `url(${home})`,
          }}
          className="heroimageContainer heroImageDesktop"
        />
      </div>
      <Dashboard />
      <About />
      <Mission />
      <HowItWorks />
    </>
  );
};

export default Home;

const HeroContent = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--padding-light)",
      }}
    >
      <div className="heroheading">NFTree</div>
      <div
        style={{
          width: "100%",
          maxWidth: "var(--max-width-form)",
          textAlign: "justify",
          fontWeight: "bold",
        }}
      >
        Welcome to NFTree, where digital innovation meets environmental
        stewardship. As you explore the platform, you'll discover a dynamic
        ecosystem that fosters contribution to a greener planet securely and
        transparently. From tree counting to carbon sequestration, NFTree
        provides a comprehensive, real-time view of your reforestation impact.
      </div>
      <div className="primarybutton" style={{ width: "fit-content" }}>
        <button onClick={() => navigate("/projects")}>
          Get Started <ArrowForwardIcon />
        </button>
      </div>
    </div>
  );
};
