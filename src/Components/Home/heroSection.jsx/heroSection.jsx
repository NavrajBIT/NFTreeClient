import { useNavigate } from "react-router-dom";
import { Herocontainer2 } from "../../Subcomponents/containers/herocontainer";
import Button from "../../Subcomponents/buttons/button";
import heroimage from "../assets/hero.png";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <Herocontainer2
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
      <div className="landingdatacontainer">
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
          Step into the world of digital innovation where technology meets
          environmental stewardship with Bitbhoomi. Uncover a vibrant ecosystem
          that enables secure and transparent participation in creating a
          greener planet through tokenized ownership. From tree counting to
          carbon sequestration, get a comprehensive, real-time view of your
          reforestation initiatives.
        </div>
        <div className="herobuttoncontainer">
          <div style={{ width: "fit-content" }}>
            <Button
              title="Get Started"
              variant="primary"
              onClick={() => navigate("/projects")}
            />
          </div>
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
    </Herocontainer2>
  );
};

export default HeroSection;
