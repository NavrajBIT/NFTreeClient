import home from "../assets/home-top-bg.png";
import img1 from "../assets/home-img-1.png";
import img2 from "../assets/home-img-2.png";
import { useNavigate } from "react-router-dom";
import Herocontainer from "../../Subcomponents/containers/herocontainer";
import Button from "../../Subcomponents/buttons/button";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <Herocontainer>
      <div className="landingText">TECHNOLOGY MEETS SUSTAINABLITY</div>
      <div className="landingdescription">
        Step into the world of digital innovation meets environmental
        stewardship with Bitbhoomi. Uncover a vibrant ecosystem that enables
        secure and transparent participation in creating a greener planet
        through tokenized ownership. From tree counting to carbon sequestration,
        get a comprehensive, real-time view of your reforestation initiatives.
      </div>
      <div style={{ width: "fit-content" }}>
        <Button
          title="Get Started"
          variant="primary"
          onClick={() => navigate("/projects")}
        />
      </div>
    </Herocontainer>
  );
};

export default HeroSection;
