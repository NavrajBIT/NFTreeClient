import About from "./About/About";
import Mission from "./Mission/Mission";
import HeroSection from "./heroSection.jsx/heroSection";
import "./Home.css";
import Dashboard from "./Dashboard/Dashboard";
import Contact from "../Contact_us/Contact";
import HowItWorks from "./howitworks/howItWorks";
import WhatisNFTree from "./WhatisNFTree/WhatisNFTree";

const Home = () => {
  return (
    <>
      <HeroSection />
      {/* <Dashboard /> */}
      <WhatisNFTree />
      <About />

      <Mission />
      <HowItWorks />
      <Contact page="home" />
    </>
  );
};

export default Home;
