import About from "./About/About";
import Mission from "./Mission/Mission";
import HeroSection from "./heroSection.jsx/heroSection";
import "./Home.css";
import Dashboard from "./Dashboard/Dashboard";
import Contact from "../Contact_us/Contact";
import HowItWorks from "./howitworks/howItWorks";

const Home = () => {
  return (
    <>
      <HeroSection />
      {/* <Dashboard /> */}
      <About />
      <Mission />
      <HowItWorks />
      <Contact />
    </>
  );
};

export default Home;
