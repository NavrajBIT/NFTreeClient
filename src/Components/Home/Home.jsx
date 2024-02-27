import About from "./About/About";

import HeroSection from "./heroSection.jsx/heroSection";
import "./Home.css";
import Mission from "./mission/mission";

const Home = () => {
  return (
    <div
      style={{
        fontFamily: `"Fira Sans", sans-serif`,
      }}
    >
      <HeroSection />
      <About />
      <Mission />
    </div>
  );
};

export default Home;
