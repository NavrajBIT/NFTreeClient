import img1 from "./assets/1.png";
import img2 from "./assets/2.png";
import img3 from "./assets/3.png";
import "./howitworks.css";

const HowItWorks = () => {
  return (
    <div
      style={{
        flexDirection: "column",
        background: "var(--green-100)",
        borderRadius: "var(--border-radius-big) 0 0 0",
        display: "flex",
        justifyContent: "center",
        padding: "var(--padding-main) 0",
        minHeight: "var(--min-height-section)",
      }}
    >
      <div style={{ width: "90%", margin: "auto" }}>
        <div
          className="heroheading"
          style={{
            fontSize: "3rem",
            width: "100%",
            fontWeight: "bold",
            padding: "var(--padding-main) 0",
          }}
        >
          How it works?
        </div>
        <br />
        <div className="stepscontainer">
          <Step img={img1} step="1" text="Minting NFT and Generating QR code" />
          <Step img={img2} step="2" text="Saplings are planted against it" />
          <Step img={img3} step="3" text="Regular monitoring and reporting" />
        </div>
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
      minWidth: "var(--profile-pic-diameter)",
      width: "var(--project-card-width)",
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
