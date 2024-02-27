import { useNavigate } from "react-router-dom";
import Herocontainer from "../../Subcomponents/containers/herocontainer";
import Button from "../../Subcomponents/buttons/button";
import heroimage from "../assets/hero.png";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <Herocontainer
      style={{
        alignItems: "center",
      }}
      innerStyle={{
        display: "flex",
        gap: "var(--padding-light)",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--padding-large)",
        }}
      >
        <div className="landingText">TECHNOLOGY MEETS SUSTAINABLITY</div>
        <div className="heroillustrationmobile">
          <img
            src={heroimage}
            alt="BitBhoomi"
            style={{
              width: "100%",
            }}
          />
        </div>
        <div className="landingdescription">
          Step into the world of digital innovation meets environmental
          stewardship with Bitbhoomi. Uncover a vibrant ecosystem that enables
          secure and transparent participation in creating a greener planet
          through tokenized ownership. From tree counting to carbon
          sequestration, get a comprehensive, real-time view of your
          reforestation initiatives.
        </div>
        <div className="herobuttoncontainer">
          <Button
            title="Get Started"
            variant="primary"
            onClick={() => navigate("/projects")}
          />
        </div>
      </div>
      <div className="heroillustration">
        <img
          src={heroimage}
          alt="BitBhoomi"
          style={{
            width: "100%",
          }}
        />
      </div>
    </Herocontainer>
  );
};

export default HeroSection;
