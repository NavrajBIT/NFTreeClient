import About from "./About/About";
import Mission from "./Mission/Mission";
import HeroSection from "./heroSection.jsx/heroSection";
import "./Home.css";
import Dashboard from "./Dashboard/Dashboard";
import Contact from "../Contact_us/Contact";
import HowItWorks from "./howitworks/howItWorks";
import WhatisNFTree from "./WhatisNFTree/WhatisNFTree";

// import $ from "jquery";

// $(window).on("scroll", () => {
//   if ($(window).scrollTop() == 0) {
//     $(".navbarcontainer").css({
//       "background-image": "none",
//     });
//   } else {
//     $(".navbarcontainer").css({
//       "background-image": "linear-gradient(to right, #1B2F2F, #224629)",
//     });
//   }
// });

const Home = () => {
  return (
    <div className="homeContainer">
      <HeroSection />
      {/* <Dashboard /> */}
      {/* <WhatisNFTree />
      <About />

      <Mission />
      <HowItWorks />
      <Contact page="home" /> */}
    </div>
  );
};

export default Home;
