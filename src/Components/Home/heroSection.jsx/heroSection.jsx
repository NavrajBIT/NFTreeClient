import home from "../assets/home-top-bg.png";
import img1 from "../assets/home-img-1.png";
import img2 from "../assets/home-img-2.png";
import { useNavigate } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const HeroSection = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${home})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        paddingTop: "var(--nav-height)",
        minHeight: "var(--min-height-page)",

        borderRadius: "0 0 0 var(--border-radius-big)",
      }}
    >
      <div
        className="heroContainer"
        style={{
          maxWidth: "var(--max-width)",
        }}
      >
        <HeroContent />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "40%",
            flexWrap: "wrap",
          }}
        >
          <img
            src={img1}
            alt="img1"
            style={{ width: "var(--home-card-image)", alignSelf: "flex-start" }}
          />
          <img
            src={img2}
            alt="img2"
            style={{ width: "var(--home-card-image)", alignSelf: "flex-end" }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

const HeroContent = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "var(--padding-main)",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--padding-light)",
          justifyContent: "center",
        }}
      >
        <div className="heroheading">NFTree</div>
        <div
          style={{
            width: "100%",
            maxWidth: "var(--max-width-form)",
            textAlign: "justify",
            color: "white",
            borderLeft: "2px solid white",
            padding: "var(--padding-light)",
            paddingLeft: "var(--padding-main)",
          }}
        >
          Welcome to NFTree, where digital innovation meets environmental
          stewardship. As you explore the platform, you'll discover a dynamic
          ecosystem that fosters contribution to a greener planet securely and
          transparently. From tree counting to carbon sequestration, NFTree
          provides a comprehensive, real-time view of your reforestation impact.
        </div>
        <div
          className="secondarybutton homeButtonProp"
          style={{
            width: "fit-content",
            paddingTop: "var(--padding-main)",
          }}
        >
          <button
            onClick={() => navigate("/projects")}
            style={{
              background: "white",
              color: "var(--green-100)",
            }}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
