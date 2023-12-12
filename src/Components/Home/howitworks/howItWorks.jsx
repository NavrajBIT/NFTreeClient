import img1 from "./assets/1.png";
import img2 from "./assets/2.png";
import img3 from "./assets/3.jpg";
import "./howitworks.css";

const HowItWorks = () => {
  return (
    <div className="heroContainer" style={{ flexDirection: "column" }}>
      <div
        className="heroheading"
        style={{ fontSize: "3rem", width: "100%", textAlign: "center" }}
      >
        How it works?
      </div>
      <div className="stepscontainer">
        <Step img={img1} step="1" text="Minting NFT and Generating QR code" />
        <Step img={img2} step="2" text="Saplings are planted against it" />
        <Step img={img3} step="3" text="Regular monitoring and reporting" />
      </div>
    </div>
  );
};

export default HowItWorks;

const Step = ({ img, step, text }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      gap: "var(--padding-light)",
      width: "100%",
      maxWidth: "var(--max-width-card)",
    }}
  >
    <img
      src={img}
      alt=""
      style={{ width: "100%", aspectRatio: "var(--image-aspect-ratio)" }}
    />
    <div style={{ fontSize: "5rem" }}>{step}</div>
    <div>{text}</div>
  </div>
);
