import About from "./About/About";
import Mission from "./Mission/Mission";
import HeroSection from "./heroSection.jsx/heroSection";
import "./Home.css";
import Dashboard from "./Dashboard/Dashboard";
import Contact from "../Contact_us/Contact";
import HowItWorks from "./howitworks/howItWorks";
import WhatisNFTree from "./WhatisNFTree/WhatisNFTree";
import ProjectReport from "../Subcomponents/ProjectReport/ProjectReport";

const Home = () => {
  return (
    <>
      <HeroSection />
      {/* <Dashboard /> */}
      <ProjectReport />
      <WhatisNFTree />
      <About />

      <Mission />
      <HowItWorks />
      <Contact page='home' />
    </>
  );
};

export default Home;
