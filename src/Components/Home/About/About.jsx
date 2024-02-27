import logo from "../assets/aboutlogo.png";
import abg from "../assets/Abg.png";
import "./About.css";

const About = () => {
  return (
    <div className="aboutsectioncontainer">
      <div className="aboutlogocontainer">
        <img src={logo} alt="BitBhoomi" />
      </div>
      <div className="aboutcontentcontainer">
        <div className="aboutheading">
          A<span className="bout">bout</span>
          <img src={abg} alt="" />
        </div>
        <div className="aboutlogocontainermobile">
          <img src={logo} alt="BitBhoomi" />
        </div>
        <div className="aboutdescription">
          BitBhoomi draws its inspiration from the Sanskrit term "Bhoomi,"
          meaning "Earth" or "Land." This name reflects our commitment to a
          digital landscape dedicated to the betterment of our planet. Powered
          by blockchain, the platform creates a transparent ecosystem for
          sustainability initiatives, connecting data bits to the Earth. It
          signifies a commitment to nurture our "Bit of the Earth" for a greener
          tomorrow.
        </div>
      </div>
    </div>
  );
};

export default About;
