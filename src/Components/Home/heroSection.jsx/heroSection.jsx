import home from "../assets/landing.png";
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
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "var(--max-width)",
          padding: "var(--padding-main)",
        }}
      >
        <HeroContent />
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
        flexDirection: "column",
        gap: "var(--padding-light)",
      }}
    >
      <div className="heroheading">NFTree</div>
      <div
        style={{
          width: "100%",
          maxWidth: "var(--max-width-form)",
          textAlign: "justify",
          fontWeight: "bold",
        }}
      >
        Welcome to NFTree, where digital innovation meets environmental
        stewardship. As you explore the platform, you'll discover a dynamic
        ecosystem that fosters contribution to a greener planet securely and
        transparently. From tree counting to carbon sequestration, NFTree
        provides a comprehensive, real-time view of your reforestation impact.
      </div>
      <div className="primarybutton" style={{ width: "fit-content" }}>
        <button onClick={() => navigate("/projects")}>
          Get Started <ArrowForwardIcon />
        </button>
      </div>
    </div>
  );
};
